import React, { useContext, useEffect } from "react"

import { Store } from "../../contexts";
import { fetchStudent } from "../../actions"

export const Student = () => {
  const [state, dispatch] = useContext(Store)

  const student = state.student ? state.student.student : null

  useEffect(() => {
    // load student from an API
    dispatch(fetchStudent(dispatch))
  }, [dispatch]);
  
  return (
    <>
      <h2>Students</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>address</th>
            <th>phone</th>
            <th>website</th>
          </tr>
        </thead>
        <tbody>
          {student  && student.data.map((student)=> 
          <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.username}</td>
              <td>{student.email}</td>
              <td>{student.address.street}</td>
              <td>{student.phone}</td>
              <td>{student.website}</td>
          </tr>
          )}
        </tbody>
      </table>
    </>
  )
}
