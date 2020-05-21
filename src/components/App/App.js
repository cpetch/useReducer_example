import React, { useReducer } from "react";

// Styles
import "../../styles.css"

// Data
import initialState from "../../initialstate"
import rootReducer from "../../rootReducer"
import { Store } from "../../contexts"

// Components
import { Student } from "../Student/Student"

export const App = () => {
  const store = useReducer(rootReducer,initialState)

  return (
    <Store.Provider value={store}>
        <Student />
    </Store.Provider>
  )
}
