import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from './Dashboard'
import Landingpage from './Landingpage'
import Addtopic from './Addtopic'


const App = (props) => {
  return (
    <div >
        <Router>
  
          <Routes>
            <Route path="/" exact element={<Landingpage />} />
            <Route path="/Dashboard" exact element={<Dashboard />} />
            <Route path="/Addtopic" exact element={<Addtopic />} />
          </Routes>
        </Router>
      </div>
  )
}

export default App