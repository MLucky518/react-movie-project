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

const Critics = props => {
  const [critics, setCritics] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [criticsPerPage] = useState(20)

  useEffect(() => {
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
              <CardContent>
                <h4>{item.display_name}</h4>
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
  }
}

const mapDispatchToProps = dispatch => ({
  getCritics: () => dispatch(getCritics()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Critics)
