'use strict'

const axios = require('axios')
const path = require('path')

async function getAllSlideData() {
  const { data: slides } = await axios.get(
    `https://script.google.com/macros/s/AKfycbzzea8w5fE91z2yNCoNyoKd2F-c2hReVzb_gGrXEYH9lSL8LAqi/exec`
  )

  return slides
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allSlide = await getAllSlideData()
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
