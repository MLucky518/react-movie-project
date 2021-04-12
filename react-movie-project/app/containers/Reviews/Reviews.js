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
  const [searched, setSearched] = useState(
    storage.load('search') === null ? '' : storage.load('search')
  )
  const [filtered, setFiltered] = useState([])

  ///Filters///
  const [mpaa, setMpaa] = useState(
    storage.load('mpaa') === null ? false : storage.load('mpaa')
  )
  const [criticsChoice, setCriticsChoice] = useState(
    storage.load('crit') === null ? false : storage.load('crit')
  )
  const [pubDate, setPubDate] = useState(
    storage.load('pub') === null ? false : storage.load('pub')
  )
  /////////

  useEffect(() => {
    
    setReviews(props.data)
  }, [])

  useEffect(() => {
    storage.remove('mpaa')
    storage.remove('pub')
    storage.remove('crit')
    let filteredChars = []
    if (mpaa) {
      filteredChars = props.data.filter(rev => {
        return rev.mpaa_rating === searched.toUpperCase()
      })
    }
    else if (pubDate) {
      filteredChars = props.data.filter(rev => {
        return rev.publication_date.toLowerCase().includes(searched.slice(0, 5))
      })
    }
    else if (criticsChoice) {
      filteredChars = props.data.filter(rev => {
        return (
          rev.critics_pick === 1 &&
          rev.display_title.toLowerCase().includes(searched)
        )
      })
    } else {
      filteredChars = props.data.filter(rev => {
        return rev.display_title.toLowerCase().includes(searched)
      })
    }
    // const filteredChars = props.data.filter(rev => {
    //   if (mpaa) {
    //     return rev.mpaa_rating === searched
    //   }
    //   if (pubDate) {
    //     return rev.publication_date.includes(searched.slice(0, 5))
    //   }
    //   if (criticsChoice) {
    //     return (
    //       rev.critics_pick === 1 &&
    //       rev.display_title.toLowerCase().includes(searched)
    //     )
    //   } else {
    //     return rev.display_title.toLowerCase().includes(searched)
    //   }
    // })
    storage.save('mpaa', mpaa)
    storage.save('pub', pubDate)
    storage.save('crit', criticsChoice)

    setFiltered(filteredChars)
  }, [searched, props.data, mpaa, pubDate, criticsChoice])

  const indexOfLastPost = currentPage * reviewsPerPage
  const indexOfFirstPost = indexOfLastPost - reviewsPerPage
  const currentReviews = filtered.slice(indexOfFirstPost, indexOfLastPost)

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

  const handleChange = e => {
    e.preventDefault()
    storage.save('search', searched)
    setSearched(e.target.value)
  }

  return (
    <ListWrapper>
      <h1>Reviews</h1>
      <label htmlFor="search">Search Reviews</label>
      <Input
        type="text"
        name="search"
        value={searched}
        onChange={handleChange}
      />
      <h4>Filters</h4>
      <input
        type="checkbox"
        name="critics"
        value="CRIT"
        onChange={() => setCriticsChoice(!criticsChoice)}
        checked={criticsChoice}
      />
      <label htmlFor="critics">Critics pick</label>
      <br />
      <input
        type="checkbox"
        name="mpaa"
        value="MPAA"
        onChange={() => setMpaa(!mpaa)}
      />
      <label htmlFor="mpaa"> MPAA Rating</label>
      <br />
      <input
        type="checkbox"
        name="pub date"
        value="PUB"
        onChange={() => setPubDate(!pubDate)}
      />
      <label htmlFor="pub date"> Publication date</label>
      <br />
      <br />

      <Pagination
        perPage={reviewsPerPage}
        total={reviews.length}
        paginate={paginate}
      />
      <p>Currently Viewing {reviewsPerPage} reviews per page</p>

      <ButtonContainer style={{ marginBottom: '5%' }}>
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
                  {item.mpaa_rating ? item.mpaa_rating : 'n/a'}
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
