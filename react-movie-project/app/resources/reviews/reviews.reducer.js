import { REVIEWS_FETCH_SUCCESS } from './reviews.actions'

const initialState = {
  data: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REVIEWS_FETCH_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state
  }
}
