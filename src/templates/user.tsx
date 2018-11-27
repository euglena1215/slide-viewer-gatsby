import React from 'react'
import IndexLayout from '../layouts'
import Page from '../components/Page'
import Container from '../components/Container'
import { SlideItem } from '../components/SlideItem'

export default (context: any) => {
  const { pageContext } = context
  const { user, slides } = pageContext
  return (
    <IndexLayout>
      <Page>
        <Container>
          <div>
            <img src={user.imgUrl} alt="" />
            <h2>{user.name}</h2>
          </div>

          {slides.map(slide => (
            <SlideItem slide={slide} key={slide.fileId} />
          ))}
        </Container>
      </Page>
    </IndexLayout>
  )
}