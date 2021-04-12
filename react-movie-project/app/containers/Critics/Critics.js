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
import reviewsReducer from '../../resources/reviews/reviews.reducer.js'

const Critics = props => {
  const [critics, setCritics] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [criticsPerPage] = useState(20)

  useEffect(() => {
    props.data.forEach((critic, idx) => {
      props.data[idx].totalPicks = 0

      props.data[idx].reviews = props.reviews.filter(review => {
        return critic.display_name.toUpperCase() === review.byline.toUpperCase()
      })

      props.data[idx].reviews.forEach(review => {
        if (review.props_pick === 1) {
          props.data[idx].totalPicks += 1
        }
      })
    })
    setCritics(props.data)
  }, [])

  const indexOfLastPost = currentPage * criticsPerPage
  const indexOfFirstPost = indexOfLastPost - criticsPerPage
  const currentCritics = critics.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
  }

  return (
    <ListWrapper>
      <h1>Critics</h1>
      <Pagination
        perPage={criticsPerPage}
        total={critics.length}
        paginate={paginate}
      />

      <List>
        {currentCritics.map((item, idx) => {
          return (
            <Card key={idx}>
              <CardImage
                src={
                  item.multimedia
                    ? item.multimedia.resource.src
                    : 'https://assets.website-files.com/5cb8b10a48eebf8ee23d835b/5fa9a5aeb9e58ca6b693cc15_default-profile-picture1.jpg'
                }
              />
              <CardContent>
                <h4>{item.display_name}</h4>
              </CardContent>
              <CardContent>
                  <h3>Total Picks:{item.reviews.length}</h3>
                  <h3>Total Reviews:{item.totalPicks}</h3>
              </CardContent>
            </Card>
          )
        })}
      </List>
    </ListWrapper>
  )
}

const mapStateToProps = state => {
  console.log(state, 'state-critics')
  return {
    data: state.resources.critics.data,
    reviews: state.resources.reviews.data,
  }
}

const mapDispatchToProps = dispatch => ({
  getCritics: () => dispatch(getCritics()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Critics)
