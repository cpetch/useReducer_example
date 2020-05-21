import combineReducers from "./combineReducers"

import { studentReducer } from "./studentReducer"
//import teacherReducer from "./teacherReducer"

const rootReducer = combineReducers({
  student: studentReducer
//  teacher: teacherReducer
})

export default rootReducer