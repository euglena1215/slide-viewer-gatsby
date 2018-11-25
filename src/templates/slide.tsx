import React from 'react'
import IndexLayout from '../layouts'
import Page from '../components/Page'
import Container from '../components/Container'

export default (context: any) => {
  const { pageContext } = context
  const { slide } = pageContext
  return (
    <IndexLayout>
      <Page>
        <Container>{JSON.stringify(slide)}</Container>
      </Page>
    </IndexLayout>
  )
}
