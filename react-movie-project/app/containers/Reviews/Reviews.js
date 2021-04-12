import React, { useEffect, useState } from 'react'
import {
  Card,
  CardImage,
  ListWrapper,
  List,
  CardContent,
  Input,
} from '../../components/Reviews_Critics/Reviews_Critics.jsx'
import { Pagination } from '../Paginate'
import { connect } from 'react-redux'
import { GiTrophy } from 'react-icons/gi'
import { useHistory } from 'react-router-dom'
import storage from '../../helpers/storage'
import { ButtonContainer } from '../../components/Home/Home.jsx'
import { Button } from '../../components/Buttons/Button.js'

const Reviews = props => {
  const history = useHistory()
  const [reviews, setReviews] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [reviewsPerPage, setReviewsPerPage] = useState(50)

  useEffect(() => {
    setReviews(props.data)
  }, [])

  const indexOfLastPost = currentPage * reviewsPerPage
  const indexOfFirstPost = indexOfLastPost - reviewsPerPage
  const currentReviews = reviews.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
  }

  const setPerPage = flag => {
    switch (flag) {
      case true:
        if (reviewsPerPage <= 40) {
          setReviewsPerPage(reviewsPerPage + 10)
        } else {
          setReviewsPerPage(50)
        }
        break
      case false:
        if (reviewsPerPage >= 32) {
          setReviewsPerPage(reviewsPerPage - 10)
        } else {
          setReviewsPerPage(20)
        }
        break
    }
  }

  return (
    <ListWrapper>
      <h1>Reviews</h1>
      <Input/>
      <Pagination
        perPage={reviewsPerPage}
        total={reviews.length}
        paginate={paginate}
      />
      <p>Currently Viewing {reviewsPerPage} reviews per page</p>

      <ButtonContainer style={{marginBottom:"5%"}}>
        <Button
          style={{ marginRight: '2%' }}
          onClick={() => setPerPage(false)}
          primary="false">
          {' '}
          down
        </Button>

        <Button onClick={() => setPerPage(true)} primary="true">
          up
        </Button>
      </ButtonContainer>

      <List>
        {currentReviews.map((item, idx) => {
          return (
            <Card onClick={() => history.push(`/reviews/${item.id}`)} key={idx}>
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
                <br />
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
