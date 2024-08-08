import '../styles/Login.css';
import logo from '/goPay.png';
import { useState } from 'react';

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
                    <button onClick={() => {console.log(state)}}>Login</button>
                    <button onClick={() => {console.log(state)}}>Signin</button>
                </div>
            </div>
        </div>
    );
}
