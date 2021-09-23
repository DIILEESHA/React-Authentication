import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './login.css'

function login() {
    return <div>

        <div className='row justify-content-center'>
        <div className='col-md-4'>
        <h1><b><i>Authentication</i></b></h1>
        <form>
            <input type = "text" placeholder = "Enter Name" className="form-control"/>
            <input type = "text" placeholder = "Enter Name" className="form-control"/>
            <input type ="submit" className='btn btn-primary'/>
            </form>
        </div>
    </div>
    </div>
    
}

export default login;
