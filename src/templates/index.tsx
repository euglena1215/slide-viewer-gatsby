import React from 'react'
import IndexLayout from '../layouts'
import Page from '../components/Page'
import Container from '../components/Container'
import { SlideItem, Slide } from '../components/SlideItem'
import styled from 'react-emotion'

interface Prop {
  pageContext: any
}

interface State {
  slides: Slide[]
  keyword: string
}

export default class Index extends React.Component<Prop, State> {
  componentWillMount() {
    this.setState({ slides: this.props.pageContext.allSlide, keyword: '' })
  }

  render() {
    const allSlide: Slide[] = this.props.pageContext.allSlide

    const slides: Slide[] =
      this.state.keyword === ''
        ? allSlide
        : allSlide.filter(slide => slide.keywords !== undefined && slide.keywords.includes(this.state.keyword))

    return (
      <IndexLayout>
        <Page>
          <Container>
            <SearchBox>
              <input type="text" name="search" value={this.state.keyword} onChange={e => this.setState({ keyword: e.target.value })} />
            </SearchBox>

            {slides.map(slide => (
              <SlideItem slide={slide} key={slide.fileId} />
            ))}
          </Container>
        </Page>
      </IndexLayout>
    )
  }
}

const SearchBox = styled.div``
