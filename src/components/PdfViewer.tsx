import React from 'react'
import PDF from 'react-pdf-js'
import styled from 'react-emotion'

interface Prop {
  pdfUrl: string
  aspectRatio: number
}

interface State {
  pages: number
  page: number
}

export default class PdfViewer extends React.Component<Prop, State> {
  state = { page: 1, pages: -1 }

  onDocumentComplete = pages => {
    this.setState({ pages, page: 1 })
  }

  handlePrevious = () => {
    if (this.state.page !== 1) {
      this.setState({ page: this.state.page - 1 })
    }
  }

  handleNext = () => {
    if (this.state.page !== this.state.pages) {
      this.setState({ page: this.state.page + 1 })
    }
  }

  render() {
    const { pdfUrl } = this.props

    return (
      <Wrapper>
        <PDF file={pdfUrl} onDocumentComplete={this.onDocumentComplete} page={this.state.page} cMapUrl="/cmaps/" cMapPacked={true} />
        <PreviousButton onClick={this.handlePrevious} />
        <NextButton onClick={this.handleNext} />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  position: relative;
  box-shadow: 2px 2px 5px rgba(50, 50, 50, 0.3);
`

const PreviousButton = styled.div`
  cursor: w-resize;
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  left: 0;
`

const NextButton = styled.div`
  cursor: e-resize;
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  right: 0;
`
