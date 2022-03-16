import React, { useState } from 'react'
import './Login.css'
import {useNavigate} from 'react-router-dom'


function Login() {
    const [mobilenumber, setmobilenumber] = useState(0)
    const [err, seterr] = useState('')
    const navigate = useNavigate();


    const Submit = () => {  
        if(mobilenumber.length!==10) {
            
            seterr(" invalid mobile number")
        } 
        else{
            navigate('/netflix')
        }
       

    }

    return (
        <div className='login '>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                        <div className='login-content'>
                            <div className='heading'>
                                <h2>Login</h2>
                            </div>
                            <div className='input'>
                                <input className='form-control text-center' type="number"
                                    placeholder='enter your number' required
                                    
                                    onChange={(e) => { setmobilenumber(e.target.value) }}

                                />
                            </div>
                            <p className='check text-center'>{err} </p><br />
                            <div className='button-btn'>
                                <button type="button" className="btn btn-success"
                                    onClick={() => Submit()}
                                >Success</button>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    )
}

export default Login