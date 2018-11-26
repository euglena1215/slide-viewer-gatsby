'use strict'

const axios = require('axios')
const path = require('path')
const fs = require('fs')
const https = require('https')

async function getAllSlideData() {
  const { data: slides } = await axios.get(
    `https://script.google.com/macros/s/AKfycbzzea8w5fE91z2yNCoNyoKd2F-c2hReVzb_gGrXEYH9lSL8LAqi/exec`
  )

  return slides
}

exports.onPreBootstrap = async () => {
  const allSlide = await getAllSlideData()
  let assets = new Set()

  allSlide.forEach(slide => {
    assets.add([`${slide.fileId}.pdf`, slide.pdfUrl])
    assets.add([`${slide.fileId}.png`, slide.imgUrl])
    assets.add([`${slide.uploadUser.userId}.png`, slide.uploadUser.imgUrl])
  })

  const savedDir = './public/assets/'
  if (!fs.existsSync(savedDir)) {
    fs.mkdirSync(savedDir)
  }

  Array.from(assets).forEach(asset => {
    const fileName = asset[0]
    const url = asset[1]

    const outFile = fs.createWriteStream(savedDir + fileName)

    const req = https.get(url, res => {
      res.pipe(outFile)

      res.on('end', () => {
        outFile.close()
      })
    })

    req.on('error', err => {
      console.log('Error: ', err)
      return
    })

    req.end()
  })
}

const toSelfHostedSlides = allSlide => {
  return allSlide.map(slide => {
    slide.pdfUrl = `/assets/${slide.fileId}.pdf`
    slide.imgUrl = `/assets/${slide.fileId}.png`
    slide.uploadUser.imgUrl = `/assets/${slide.uploadUser.userId}.png`
    return slide
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  let allSlide = await getAllSlideData()
  allSlide = toSelfHostedSlides(allSlide)

  createPage({
    path: `/`,
    component: require.resolve('./src/templates/index.tsx'),
    context: { allSlide }
  })

  allSlide.forEach(slide => {
    createPage({
      path: `/${slide.fileId}/`,
      component: require.resolve('./src/templates/slide.tsx'),
      context: { slide }
    })
  })
}
