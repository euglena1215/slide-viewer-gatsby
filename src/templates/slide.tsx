import React from 'react'
import IndexLayout from '../layouts'
import Page from '../components/Page'
import Container from '../components/Container'
import PdfViewer from '../components/PdfViewer'
import styled from 'react-emotion'

export default (context: any) => {
  const { pageContext } = context
  const { slide } = pageContext
  return (
    <IndexLayout>
      <Page>
        <Container>
          <PdfViewer pdfUrl={slide.pdfUrl} aspectRatio={slide.aspectRatio} />
          {slide.keywords === '' ? null : (
            <>
              <h3>keywords</h3>
              <KeyWordText>{slide.keywords}</KeyWordText>
            </>
          )}
        </Container>
      </Page>
    </IndexLayout>
  )
}

const KeyWordText = styled.p`
  word-wrap: break-word;
`
