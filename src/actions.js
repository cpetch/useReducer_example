import axios from 'axios'

// Action constants
export const actions = {
  FETCH_STUDENT: "FETCH_STUDENT",
  FETCH_STUDENT_FULFILLED: "FETCH_STUDENT_FULFILLED",
}

export const createAction = (type, payload) => {
  return {
    type,
    payload
  }
}

export const fetchStudent = (dispatch) => 
  createAction(actions.FETCH_STUDENT,
                axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
                dispatch(createAction(actions.FETCH_STUDENT_FULFILLED, res))
                                })
  )  