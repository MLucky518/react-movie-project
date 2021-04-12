import React, { useEffect, useState } from 'react'
import { ReviewListWrapper } from '../../components/Reviews/Reviews'
import { Pagination } from '../Paginate'
import { connect } from 'react-redux'

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
    <ReviewListWrapper>
      <div>
        <div>
          <div>
            {currentReviews.map(item => {
              return <div>{item.display_title}</div>
            })}
          </div>
        </div>
      </div>

      <Pagination
        perPage={reviewsPerPage}
        total={reviews.length}
        paginate={paginate}
      />
    </ReviewListWrapper>
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
