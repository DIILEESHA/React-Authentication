import React,{useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './login.css'

function login() {

    const[username,setusername]=useState('')
    const[password,setpassword]=useState('')

    return <div>

        <div className='row justify-content-center'>
        <div className='col-md-4'>
        <h1><b><i>Authentication</i></b></h1>
        <form>
            <input type = "text" placeholder = "username" className="form-control" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
            <input type = "text" placeholder = "password" className="form-control" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
            <input type ="submit" className='btn btn-primary'/>
            </form>
        </div>
    </div>
    </div>
    
}

export default login;
