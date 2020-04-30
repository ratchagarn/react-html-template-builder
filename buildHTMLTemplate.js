import fs from 'fs'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { renderStylesToString } from 'emotion-server'
import sass from 'node-sass'
import HTMLPretty from 'pretty'
import cssbeautify from 'cssbeautify'
import { ncp } from 'ncp'
import { JSDOM } from 'jsdom'

import router from '@config/router'

const publicDir = 'public'
const buildDir = 'buildTemplate'

const { correctStyle, getCorrectedStyle } = createCorrectStyle()

prepareBuildDirectory()
generatePageFiles()
createStyleFromSCSS()
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
    const result = correctStyle(
      ReactDOMServer.renderToString(
        <StaticRouter>
          <Component />
        </StaticRouter>
      )
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

    fs.writeFileSync(`${buildDir}/${fileName}`, HTMLPretty(content))
  })
}

function createStyleFromSCSS() {
  const buildAssetsDir = `${buildDir}/assets`

  const result = sass.renderSync({
    file: 'src/styles/main.scss',
    outputStyle: 'expanded',
  })

  fs.mkdirSync(buildAssetsDir)

  const css = `${result.css}\n${getCorrectedStyle()}`

  fs.writeFileSync(`${buildAssetsDir}/main.css`, css)
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

function createCorrectStyle() {
  const correctedStyle = []

  return {
    correctStyle(htmlString) {
      const source = renderStylesToString(htmlString)
      // console.log(HTMLPretty(source))

      const dom = new JSDOM(source)
      const { body } = dom.window.document

      const emotionStyle = body.querySelectorAll('[data-emotion-css]')

      for (let i = 0, len = emotionStyle.length; i < len; i++) {
        const styleTag = emotionStyle[i]
        const selector = `css-${styleTag.getAttribute('data-emotion-css')}`
        const target = body.querySelector(`.${selector}`)
        const className = target.getAttribute('data-class')

        const pattern = new RegExp(selector, 'g')
        const styleSource = styleTag.innerHTML.replace(pattern, className)

        styleTag.parentNode.removeChild(styleTag)
        target.removeAttribute('data-class')
        target.setAttribute('class', className)

        correctedStyle.push(styleSource)
      }

      return body.innerHTML
    },
    getCorrectedStyle() {
      return cssbeautify(correctedStyle.join('\n').trim(), {
        indent: '  ',
      })
    },
  }
}
