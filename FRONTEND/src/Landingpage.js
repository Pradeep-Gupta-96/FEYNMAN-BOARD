import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Landingpage = () => {
 
     const [state, setState] = useState({ items:[], text: "" })
    let history = useNavigate()

   
  const onChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    })
  }

  const handleAdd = ((e) => {
    // if (state.items[1] === "Pradeep") {
    //   const items = [...state.items, state.text]
    //   setState({ items: items, text:"" })
      history("/Dashboard")
    // }


    })

    return (
        <div className="container-fluid my-5" >
            <div className="container">

                <h1 className="text-center shadow-lg p-3">FEYNMAN BOARD FOR WASSERSTOFF</h1>
                <div className="row p-3">
                    <div className="col-9">
                        <input type="text" className="form-control" placeholder="USERNAME"
                            onChange={onChange}
                        />
                    </div>
                    <div className="col-2">
                        <button className="btn btn-success px-5 fw-bold" onClick={handleAdd}>Submit</button>
                    </div>
                    <div className="container-fluid">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landingpage