import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet' // Header Generator
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Switch, Route, useHistory } from 'react-router-dom'
import { Button } from '.././../components/Buttons/Button'
import { getMovieReviews } from 'resources/reviews/reviews.actions'
import {
  HomeImage,
  HomeSection,
  HomeHeaderWrapper,
  TrophyImage,
  HomeHeader,
  ContentWrapper,
  LeftSideContent,
  RightSideContent,
  ButtonContainer,
  AdvisorBoxWrapper,
  AdvisorBoxContent,
} from '../../components/Home/Home'
import Fade from 'react-reveal/Fade'
import Rotate from 'react-reveal/Rotate'
import Wobble from 'react-reveal/Wobble'
import RubberBand from 'react-reveal/RubberBand'
import Zoom from 'react-reveal/Zoom'
import { IoArrowUpSharp } from 'react-icons/io5'

export function HomePage(props) {
  const history = useHistory()
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollPosition = () => {
    if (!showScroll && window.pageYOffset > 500) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 500) {
      setShowScroll(false)
    }
  }

  window.addEventListener('scroll', checkScrollPosition)

  useEffect(() => {
    console.log(props)
    props.getMovieReviews()
    
  }, [])

  console.log(props.data)

  return (
    <HomeSection>
      <Helmet>
        <meta name="description" content="Home" />
      </Helmet>
      <HomeHeaderWrapper>
        <HomeHeader>
          <TrophyImage src="https://thumbs.dreamstime.com/b/golden-film-strip-cup-stand-isolated-d-rendering-white-background-entertainment-concept-165553595.jpg" />
          <Wobble>
            <h1>
              Everyone's <span>A</span> critic<span>!</span>
            </h1>
          </Wobble>

          <TrophyImage src="https://thumbs.dreamstime.com/b/golden-film-strip-cup-stand-isolated-d-rendering-white-background-entertainment-concept-165553595.jpg" />
        </HomeHeader>
      </HomeHeaderWrapper>
      <HomeImage top="true">
        <h2>Find Your Voice</h2>
        <ButtonContainer>
          <Button primary="true" big="true" round="true">
            2-Min Video
          </Button>

          <Button style = {{marginLeft:"20px"}} primary="true" round="true">
            Demo
          </Button>
        </ButtonContainer>
      </HomeImage>
      <RubberBand>
        <h1 className="home-content-header">
          <span>Express Yourself</span> With the things you love
        </h1>
      </RubberBand>
      <IoArrowUpSharp
        className="scrollIcon"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
        style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
      />
      <ContentWrapper>
        <Fade top>
          <LeftSideContent>
            <h3>Find Wellness in sharing your voice</h3>
            <p>
              Read Reviews from all over the world or write your own! Earn
              Reward Points for every review to use towards health perks (free
              gym memberships,healthy food...etc)
            </p>
          </LeftSideContent>
        </Fade>

        <RightSideContent round="true">
          <Fade>
            <img src="https://chronicle.brightspotcdn.com/87/cb/8ca9f0c8c929f40d0ccb7faf3b4f/vitae-diversity-blogging.jpg" />
          </Fade>
        </RightSideContent>
      </ContentWrapper>

      <ContentWrapper>
        <RightSideContent>
          <Fade>
            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/2GXL5NEMQNGB7PS4KH62UEHKM4.jpg" />
          </Fade>
        </RightSideContent>

        <Rotate bottom right>
          <LeftSideContent>
            <h1>Phrase</h1>
            <p>paragraph</p>
          </LeftSideContent>
        </Rotate>
      </ContentWrapper>

      <ContentWrapper>
        <Fade bottom>
          <LeftSideContent>
            <h3>Find Wellness in sharing your voice</h3>
            <p>Read Reviews from all over the world or write your own!</p>
          </LeftSideContent>
        </Fade>
        {props.data &&
          props.data.map(map => {
            console.log(map)
          })}
        <RightSideContent round="true">
          <Fade>
            <img src="https://ak.picdn.net/shutterstock/videos/33621025/thumb/1.jpg" />
          </Fade>
        </RightSideContent>
      </ContentWrapper>
      <HomeImage style={{ alignItems: 'flex-start' }}>
        <h2 style={{ marginLeft: '5%' }}>Share and talk about what you love</h2>
        <ButtonContainer
          style={{ justifyContent: 'flex-start', marginLeft: '15%' }}>
          <Button primary="true" big="true" round="true">
            2-Min Video
          </Button>

          <Button style = {{marginLeft:"20px"}} primary="true" round="true">
            Demo
          </Button>
        </ButtonContainer>
      </HomeImage>
      <AdvisorBoxWrapper>
        <Zoom>
          <AdvisorBoxContent>
            <img
              className="ashoka-pic"
              src="https://thathashtagshow.com/wp-content/uploads/2020/06/Ahsoka-Tano-Cover.jpg"
            />
            <div>
              <h1>I am no Jedi.</h1>
              <blockquote>&mdash; Ahsoka Tano</blockquote>
            </div>
          </AdvisorBoxContent>
        </Zoom>
      </AdvisorBoxWrapper>
    </HomeSection>
  )
}

const mapStateToProps = state => {
  console.log(state,"state")
  return {
    data: state.resources.reviews.data,
  }
}

const mapDispatchToProps = dispatch => ({
  getMovieReviews: () => dispatch(getMovieReviews()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
