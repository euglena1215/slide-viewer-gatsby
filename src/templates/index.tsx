import React from 'react'
import IndexLayout from '../layouts'
import Page from '../components/Page'
import Container from '../components/Container'
import { Link } from 'gatsby'

export default (context: any) => {
  const { pageContext } = context
  const { allSlide } = pageContext
  return (
    <IndexLayout>
      <Page>
        <Container>
          {allSlide.map(slide => {
            return (
              <Link to={`/${slide.fileId}/`} key={slide.fileId}>
                <img src={slide.imgUrl} alt="" width={200} />
              </Link>
            )
          })}
        </Container>
      </Page>
    </IndexLayout>
  )
}
