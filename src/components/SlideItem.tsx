import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

interface Slide {
  fileId: string
  pdfUrl: string
  imgUrl: string
  uploadUser: {
    userId: string
    name: string
    imgUrl: string
  }
  aspectRatio: number
  timestamp: number
}

interface Props {
  slide: Slide
}

export const SlideItem = (props: Props) => {
  const { slide } = props
  return (
    <Wrapper>
      <Link to={`/${slide.fileId}/`}>
        <SlideImg src={slide.imgUrl} alt="" width={250} />
      </Link>
      <Details>
        <Link to={`/${slide.uploadUser.userId}/`}>
          <UserImg src={slide.uploadUser.imgUrl} />
        </Link>
        <DetailsText>
          <UserName>{slide.uploadUser.name}</UserName>
          <Published>XXXX/MM/DD</Published>
        </DetailsText>
      </Details>
    </Wrapper>
  )
}

const DetailsText = styled.div`
  display: inline-block;
  margin: 2px;
`

const Details = styled.div`
  margin: 10px;
`

const Published = styled.p`
  margin: 0;
`

const SlideImg = styled.img`
  transition-duration: 100ms;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(50, 50, 50, 0.3);

  :hover {
    box-shadow: 5px 5px 8px rgba(50, 50, 50, 0.3);
  }
`

const UserName = styled.p`
  margin: 0;
`

const UserImg = styled.img`
  transition-duration: 50ms;
  width: 50px;
  border-radius: 50%;
  box-shadow: 2px 2px 5px rgba(50, 50, 50, 0.3);
  margin-right: 10px;

  :hover {
    box-shadow: 4px 4px 6px rgba(50, 50, 50, 0.3);
  }
`

const Wrapper = styled.div`
  display: inline-block;
  margin: 10px;
`
