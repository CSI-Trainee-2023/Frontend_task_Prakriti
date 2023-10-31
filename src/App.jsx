import React from 'react'
import Homepage from "./Homepage"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        </Routes>
      </Router>
    
    </>
  )
}

export default App
