import React from 'react'
import IndexLayout from '../layouts'
import Page from '../components/Page'
import Container from '../components/Container'

export default (context: any) => {
  const { pageContext } = context
  const { allSlide } = pageContext
  return (
    <IndexLayout>
      <Page>
        <Container>{JSON.stringify(allSlide)}</Container>
      </Page>
    </IndexLayout>
  )
}
