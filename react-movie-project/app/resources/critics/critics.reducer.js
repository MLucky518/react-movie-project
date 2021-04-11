import { CRITICS_FETCH_SUCCESS } from './critics.actions'

const initialState = {
  data: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CRITICS_FETCH_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state
  }
}