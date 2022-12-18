import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Topics from './Topics';
import axios from 'axios'


const Dashboard = () => {
    const [state, setState] = useState({ items:[], text: "" })
    

  const handlechange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    })
  }

  const handleAdd = ((e) => {
    if (state.items !== "") {
      const items = [...state.items, state.text]
      setState({ items: items, text:"" })
     axios.post("http://localhost:8000/",state)
     .then(res=>console.log(res))
    }
  
  })
  
  return (
    <div className="container-fluid my-5" >
      <div className="row">
        <div className="col-sm-6 mx-auto " ></div>
        <h1 className="text-center shadow-lg p-3">DASHBOARD</h1>
        <div className="row">
          <div className="col-9">
            <input type="text" className="form-control" placeholder="ADD TOPIC"
              name='text'
              value={state.text} onChange={handlechange} />
          </div>
          <div className="col-2">
            <button className="btn btn-warning px-5 fw-bold" onClick={handleAdd}>ADD</button>
          </div>
          <div className="container-fluid">
            <ul className="list-unstyled row m-5">
              
              <h1>TOPIC LIST</h1>
              {state.items.map((value,i)=>{
                  return<Topics value={value}/>

              })}
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard