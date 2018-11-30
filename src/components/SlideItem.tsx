import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

export interface Slide {
  fileId: string
  pdfUrl: string
  imgUrl: string
  uploadUser: {
    userId: string
    name: string
    imgUrl: string
  }
  aspectRatio: number
  timestamp: string
  keywords: string
}

interface Props {
  slide: Slide
  isShowDetails?: boolean
}

export const SlideItem = (props: Props) => {
  const { slide, isShowDetails } = props

  return (
    <Wrapper>
      <Link to={`/${slide.fileId}/`}>
        <SlideImg src={slide.imgUrl} alt="" width={220} />
      </Link>
      {isShowDetails === undefined || isShowDetails === true ? (
        <Details>
          <IconBox>
            <Link to={`/${slide.uploadUser.userId}/`}>
              <UserImg src={slide.uploadUser.imgUrl} />
            </Link>
          </IconBox>
          <DetailsText>
            <UserName>{slide.uploadUser.name}</UserName>
            <Published>{slide.timestamp.match(/\d{4}-\d{2}-\d{2}/)}</Published>
          </DetailsText>
        </Details>
      ) : null}
    </Wrapper>
  )
}

const DetailsText = styled.div`
  margin: 2px;
`

const Details = styled.div`
  margin: 15px;
  margin-left: 10px;
  margin-right: 5px;
  display: flex;
`

const Published = styled.p`
  margin: 0;
`

const IconBox = styled.div``

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
  letter-spacing: 1px;
  font-size: 16px;
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
