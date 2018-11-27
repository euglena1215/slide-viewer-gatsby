import React from 'react'
import IndexLayout from '../layouts'
import Page from '../components/Page'
import Container from '../components/Container'
import { SlideItem } from '../components/SlideItem'
import styled from 'react-emotion'

export default (context: any) => {
  const { pageContext } = context
  const { user, slides } = pageContext
  return (
    <IndexLayout>
      <Page>
        <Container>
          <UserWrapper>
            <UserIcon src={user.imgUrl} alt="" />
            <UserName>{user.name}</UserName>
          </UserWrapper>

          {slides.map(slide => (
            <SlideItem slide={slide} key={slide.fileId} isShowDetails={false} />
          ))}
        </Container>
      </Page>
    </IndexLayout>
  )
}

const UserIcon = styled.img`
  border-radius: 50%;
  margin-right: 30px;
  box-shadow: 2px 2px 5px rgba(50, 50, 50, 0.3);
`
const UserName = styled.h1`
  margin-left: 40px;
  margin-right: 40px;
  text-align: center;
`

const UserWrapper = styled.div`
  display: flex;
  margin: 50px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
`
