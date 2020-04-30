import fs from 'fs'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import sass from 'node-sass'
import pretty from 'pretty'
import { ncp } from 'ncp'

import router from '@config/router'

const publicDir = 'public'
const buildDir = 'buildTemplate'

prepareBuildDirectory()
createStyleFromSCSS()
generatePageFiles()
copyAssets()

function prepareBuildDirectory() {
  if (fs.existsSync(buildDir)){
    removeDir(buildDir)
  }

  fs.mkdirSync(buildDir)
}

function generatePageFiles() {
  const baseHTML = fs.readFileSync(`${publicDir}/index.html`, 'utf8')

  router.forEach(route => {
    const Component = route.component
    const result = ReactDOMServer.renderToStaticMarkup(
      <StaticRouter>
        <Component />
      </StaticRouter>
    )

    const fileName = `${route.key}.html`

    let content = baseHTML.replace('<div id="root"></div>', `\n${result}`)
    content = content.replace(
      '</head>', `<link rel="stylesheet" href="assets/main.css">\n</head>`
    )

    if (fs.existsSync(`${publicDir}/assets/app.js`)) {
      content = content.replace(
        '</body>',
        `\n<script src="assets/app.js"></script>\n\n</body>`
      )
    }

    const matchesLink = content.match(/href="(.+?).html"/g)

    if (matchesLink.length > 0) {
      matchesLink.forEach(link => {
        content = content.replace(link, link.replace('/', ''))
      })
    }

    fs.writeFileSync(`${buildDir}/${fileName}`, pretty(content))
  })
}

function createStyleFromSCSS() {
  const buildAssetsDir = `${buildDir}/assets`

  const result = sass.renderSync({
    file: 'src/styles/main.scss',
    outputStyle: 'expanded',
  })

  fs.mkdirSync(buildAssetsDir)
  fs.writeFileSync(`${buildAssetsDir}/main.css`, result.css)
}

function copyAssets() {
  ncp(`${publicDir}/assets`, `${buildDir}/assets`, (err) => {
    if (err) {
      return console.error(err)
    }
  })
}

function removeDir(path) {
  if (fs.existsSync(path)) {
    const files = fs.readdirSync(path)

    if (files.length > 0) {
      files.forEach(function(filename) {
        if (fs.statSync(path + '/' + filename).isDirectory()) {
          removeDir(path + '/' + filename)
        } else {
          fs.unlinkSync(path + '/' + filename)
        }
      })
      fs.rmdirSync(path)
    } else {
      fs.rmdirSync(path)
    }
  } else {
    console.log('Directory path not found.')
  }
}
