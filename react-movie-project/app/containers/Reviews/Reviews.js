import React, { useEffect, useState } from 'react'
import {
  Card,
  CardImage,
  ListWrapper,
  List,
  CardContent,
} from '../../components/Reviews_Critics/Reviews_Critics.jsx'
import { Pagination } from '../Paginate'
import { connect } from 'react-redux'
import { GiTrophy } from 'react-icons/gi'

const Reviews = props => {
  const [reviews, setReviews] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [reviewsPerPage] = useState(20)

  useEffect(() => {
    setReviews(props.data)
    
  }, [])

  const indexOfLastPost = currentPage * reviewsPerPage
  const indexOfFirstPost = indexOfLastPost - reviewsPerPage
  const currentReviews = reviews.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
  }

  return (
    <ListWrapper>
      <h1>Reviews</h1>
      <Pagination
        perPage={reviewsPerPage}
        total={reviews.length}
        paginate={paginate}
      />

      <List>
        {currentReviews.map((item, idx) => {
          return (
            <Card key={idx}>
              <CardImage src={item.multimedia.src} />
              <CardContent>
                <h4>{item.display_title}</h4>
                <time>{item.publication_date}</time>
                <p>
                  {item.mpaa_rating ? item.mpaa_rating : 'Rating not available'}
                </p>
                {item.critics_pick === 1 ? (
                  <GiTrophy style={{ color: 'orange' }} />
                ) : (
                  ''
                )}
              </CardContent>
            </Card>
          )
        })}
      </List>
    </ListWrapper>
  )
}

const mapStateToProps = state => {
  console.log(state, 'state')
  return {
    data: state.resources.reviews.data,
  }
}

//   const mapDispatchToProps = dispatch => ({
//
//   })

export default connect(
  mapStateToProps,
  {}
)(Reviews)
