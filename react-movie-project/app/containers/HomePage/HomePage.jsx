import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet' // Header Generator
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Switch, Route, useHistory } from 'react-router-dom'

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
} from '../../components/Home/Home'
import Fade from 'react-reveal/Fade'
import Rotate from 'react-reveal/Rotate'
import Wobble from 'react-reveal/Wobble'

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
              <blockquote>Honest Movie Reviews by regular people</blockquote>
            </h1>
          </Wobble>

          <TrophyImage src="https://thumbs.dreamstime.com/b/golden-film-strip-cup-stand-isolated-d-rendering-white-background-entertainment-concept-165553595.jpg" />
        </HomeHeader>
      </HomeHeaderWrapper>
      <HomeImage />
      <ContentWrapper>
        <Fade top>
          <LeftSideContent>
            <h1>Phrase</h1>
            <p>paragraph</p>
          </LeftSideContent>
        </Fade>
        <RightSideContent>
          <img src="https://ak.picdn.net/shutterstock/videos/33621025/thumb/1.jpg" />
        </RightSideContent>
      </ContentWrapper>

      <ContentWrapper>
        <RightSideContent>
          <img src="https://image.freepik.com/free-vector/clapperboard-popcorn-ticket-movie_18591-3586.jpg" />
        </RightSideContent>
        <Rotate bottom right>
          <LeftSideContent>
            <h1>Phrase</h1>
            <p>paragraph</p>
          </LeftSideContent>
        </Rotate>
      </ContentWrapper>

      <h1> why</h1>
      <h1>I am no Jedig.</h1>
      <p>&mdash; Ahsoka Tano</p>
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
