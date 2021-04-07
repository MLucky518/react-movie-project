import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet' // Header Generator
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Switch, Route, useHistory } from 'react-router-dom'

import { getMovieReviews } from 'resources/reviews/reviews.actions'
import {
  HomeImage,
  HomeSection,
  HomeContentWrapper,
  TrophyImage,
  HomeContent
} from '../../components/Home/Home'

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
      <HomeContentWrapper>
        <HomeContent>
        <TrophyImage src="https://thumbs.dreamstime.com/b/golden-film-strip-cup-stand-isolated-d-rendering-white-background-entertainment-concept-165553595.jpg" />
        <h1>
          Everyone's <span>A</span> critic<span>!</span>
          <blockquote>Honest Movie Reviews by regular people</blockquote>
        </h1>

        <TrophyImage src="https://thumbs.dreamstime.com/b/golden-film-strip-cup-stand-isolated-d-rendering-white-background-entertainment-concept-165553595.jpg" />
        </HomeContent>
      </HomeContentWrapper>
      <HomeImage />
      <h1> why</h1>
      <h1>I am no Jedig.</h1>
      <p>&mdash; Ahsoka Tano</p>
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
