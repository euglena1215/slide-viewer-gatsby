import React from 'react'
import IndexLayout from '../layouts'
import Page from '../components/Page'
import Container from '../components/Container'
import { SlideItem } from '../components/SlideItem'

export default (context: any) => {
  const { pageContext } = context
  const { allSlide } = pageContext
  return (
    <IndexLayout>
      <Page>
        <Container>
          {allSlide.map(slide => (
            <SlideItem slide={slide} key={slide.fileId} />
          ))}
        </Container>
      </Page>
    </IndexLayout>
  )
}
