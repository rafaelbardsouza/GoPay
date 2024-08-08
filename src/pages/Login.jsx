import '../styles/Login.css';
import logo from '/goPay.png';
import { getRequest, postRequest } from '../httpClient'
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Login() {

    const [state, setState] = useState({
        username: '',
        password: ''
    })

    const onChange = (e) => {
        const {name, value} = e.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }    

    const handleLogin = (func) => {
        if(state.username==''||state.password=='') {
            toast.error('Preencha todos os campos')
        } else {
            getRequest('localhost:8080').then((r) => {
                console.log(r)
            })
        }
    }

    return (
        <div className='banner'>
            <img src={logo} alt="logo" />
            <h1>GoPay</h1>
            <div className='login-container'>
                <h2>Login</h2>
                <div className='login-form'>
                    <input
                        type='text'
                        name='username'
                        value={state.username}
                        onChange={onChange}
                    />
                    <input
                        type='password'
                        name='password'
                        value={state.password}
                        onChange={onChange}
                    />
                    <button onClick={() => {handleLogin('login')}}>Login</button>
                    <button onClick={() => {handleLogin('signin')}}>Signin</button>
                </div>
            </div>
        </div>
    );
}
