import fs from 'fs'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import sass from 'node-sass'
import pretty from 'pretty'
import { ncp } from 'ncp'

import router from '@config/router'
import scriptList from '@config/scriptList'

const publicDir = 'public'
const buildDir = 'buildTemplate'

prepareBuildDirectory()
createStyleFromSCSS()
generatePageFiles()
copyAllStyles()
copyAllScripts()

function prepareBuildDirectory() {
  if (fs.existsSync(buildDir)){
    removeDir(buildDir)
  }

  fs.mkdirSync(buildDir)
}

function generatePageFiles() {
  const baseHTML = fs.readFileSync(`${publicDir}/index.html`, 'utf8')
  const scriptListHTML = scriptList.map(src => (
    `<script src="${src}"></script>`
  )).join('\n')

  router.forEach(route => {
    const Component = route.component
    const result = ReactDOMServer.renderToStaticMarkup(<Component />)

    const fileName = `${route.key}.html`

    let content = baseHTML.replace('<div id="root"></div>', `\n${result}`)
    content = content.replace('</body>', `\n${scriptListHTML}\n\n</body>`)
    content = content.replace(
      '</head>', `<link rel="stylesheet" href="styles/main.css">\n</head>`,
    )

    fs.writeFileSync(`${buildDir}/${fileName}`, pretty(content))
  })
}

function createStyleFromSCSS() {
  const stylesDir = `${buildDir}/styles`

  const result = sass.renderSync({
    file: 'src/styles/main.scss',
    outputStyle: 'expanded',
  })

  fs.mkdirSync(stylesDir)
  fs.writeFileSync(`${stylesDir}/main.css`, result.css)
}

function copyAllStyles() {
  ncp(`${publicDir}/styles`, `${buildDir}/styles`, (err) => {
    if (err) {
      return console.error(err)
    }
  })
}

function copyAllScripts() {
  ncp(`${publicDir}/scripts`, `${buildDir}/scripts`, (err) => {
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
