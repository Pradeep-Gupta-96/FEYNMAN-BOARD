import React from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Addtopic = (props) => {

    return (
        // heading 
        <div className="container-fluid my-5" >
            <h1 className="text-center shadow-lg p-3">Please write about your topic</h1>

            {/* textarea */}
            <div className="form-group shadow-textarea">
                <textarea className="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3" placeholder="Write something here..."></textarea>

            </div>
        </div>
    );
}

export default Addtopic