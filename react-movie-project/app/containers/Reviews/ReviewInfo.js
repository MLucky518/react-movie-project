import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
  Card,
  CardContent,
  InfoWrapper,
  CardImage,
} from '../../components/Reviews_Critics/Reviews_Critics'
import { GiTrophy } from 'react-icons/gi'
import { useHistory } from 'react-router-dom'

const ReviewInfo = props => {
  const history = useHistory()

  console.log(history, 'hist')
  const rev = props.data.find(rev => `${rev.id}` === props.match.params.id)

  console.log(props)
  return (
    <InfoWrapper>
      <button onClick={() => history.goBack()}>back</button>
      <Card className="info-card" style={{ cursor: 'auto' }}>
        <CardImage src={rev.multimedia.src} />

        <CardContent>
          <h1>{rev.display_title}</h1>

          <time>{rev.publication_date}</time>
          <p>{rev.mpaa_rating ? rev.mpaa_rating : 'Rating not available'}</p>

          {rev.critics_pick === 1 ? (
            <GiTrophy style={{ color: 'orange' }} />
          ) : (
            ''
          )}
        </CardContent>
        <CardContent>
          <p>{rev.summary_short}</p>
          <br />
          <a href={rev.link.url}>{rev.link.suggested_link_text}</a>
        </CardContent>
      </Card>
    </InfoWrapper>
  )
}

const mapStateToProps = state => {
  return {
    data: state.resources.reviews.data,
  }
}

export default connect(
  mapStateToProps,
  {}
)(ReviewInfo)
