
export const studentReducer = (state={
  student : [],
  fetching : false,
  fetched : false,
  error : null
}, action) => {
  switch (action.type) {
    case "FETCH_STUDENT": {
      return { ...state, fetching: true, fetched: false }
    }
    case "FETCH_STUDENT_REJECTED": {
      return { ...state, fetching: false, fetched: false, error: action.payload }
    }
    case "FETCH_STUDENT_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        student: action.payload,
      }
    }
    default:
      return state
  }
}
