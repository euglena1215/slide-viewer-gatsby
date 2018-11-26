import React from 'react'
import IndexLayout from '../layouts'
import Page from '../components/Page'
import Container from '../components/Container'
import PdfViewer from '../components/PdfViewer'

export default (context: any) => {
  const { pageContext } = context
  const { slide } = pageContext
  return (
    <IndexLayout>
      <Page>
        <Container>
          <PdfViewer pdfUrl={slide.pdfUrl} aspectRatio={slide.aspectRatio} />
        </Container>
      </Page>
    </IndexLayout>
  )
}
