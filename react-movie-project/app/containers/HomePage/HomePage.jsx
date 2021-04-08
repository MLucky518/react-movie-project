import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet' // Header Generator
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Switch, Route, useHistory } from 'react-router-dom'
import { HomeButton } from '.././../components/Buttons/Button'
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
import Zoom from 'react-reveal/Zoom';

export function HomePage(props) {
  const history = useHistory()

  useEffect(() => {
    props.getMovieReviews()
  }, [])

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
          <HomeButton primary="true" big="true" round="true">
            2-Min Video
          </HomeButton>

          <HomeButton primary="true" round="true">
            Demo
          </HomeButton>
        </ButtonContainer>
      </HomeImage>
      <RubberBand>
        <h1 className="home-content-header">
          <span>Express Yourself</span> With the things you love
        </h1>
      </RubberBand>
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
          <img src="https://chronicle.brightspotcdn.com/87/cb/8ca9f0c8c929f40d0ccb7faf3b4f/vitae-diversity-blogging.jpg" />
        </RightSideContent>
      </ContentWrapper>

      <ContentWrapper>
        <RightSideContent>
          <img src="https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/2GXL5NEMQNGB7PS4KH62UEHKM4.jpg" />
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
        <RightSideContent round="true">
          <img src="https://ak.picdn.net/shutterstock/videos/33621025/thumb/1.jpg" />
        </RightSideContent>
      </ContentWrapper>
      <HomeImage style={{ alignItems: 'flex-start' }}>
        <h2 style={{ marginLeft: '5%', fontSize: '3rem' }}>
          Share and talk about what you love
        </h2>
        <ButtonContainer
          style={{ justifyContent: 'flex-start', marginLeft: '15%' }}>
          <HomeButton primary="true" big="true" round="true">
            2-Min Video
          </HomeButton>

          <HomeButton primary="true" round="true">
            Demo
          </HomeButton>
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
      <button
        onClick={() =>
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }>
        UP
      </button>
    </HomeSection>
  )
}

const mapStateToProps = (state, ownProps) => {
  return state
}

const mapDispatchToProps = dispatch => ({
  getMovieReviews: () => dispatch(getMovieReviews()),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HomePage)
