import React from 'react'
import IndexLayout from '../layouts'
import Page from '../components/Page'
import Container from '../components/Container'
import { SlideItem, Slide } from '../components/SlideItem'
import styled from 'react-emotion'
import { Input } from 'antd'
import { colors } from '../styles/variables'

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
    const Search = Input.Search
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
              <SearchLabel>スライド内容を検索</SearchLabel>
              <Search size="large" placeholder="Search" onChange={e => this.setState({ keyword: e.target.value })} />
            </SearchBox>

            <SlideWrapper>
              {slides.map(slide => (
                <SlideItem slide={slide} key={slide.fileId} />
              ))}
            </SlideWrapper>
          </Container>
        </Page>
      </IndexLayout>
    )
  }
}

const SearchBox = styled.div`
  margin: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`

const SearchLabel = styled.h2`
  margin-bottom: 40px;
  color: ${colors.text};
  text-align: center;
`

const SlideWrapper = styled.div`
  width: 100%;
`
