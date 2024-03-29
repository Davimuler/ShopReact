import React from "react";
import S from './Login.module.css'
import {useState} from "react";
import {useEffect} from "react";
import axios from '../../api/api.js'
import {logUser} from "../../redux/UserReducer";
import { useNavigate } from 'react-router-dom';
import {Button, Typography} from "@mui/material";


const Login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email can not be empty');

    const [password, setPassword] = useState('');
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordError, setPasswordError] = useState('Password can not be empty');
    const [message, setMessage] = useState('')

    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError])


    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Incorrect email')
            if (e.target.value === '') {
                setEmailError('Email can not be empty')
            }
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 12) {
            setPasswordError('Incorrect length of password')
            if (e.target.value === '') {
                setPasswordError('Password can not be empty')
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email': {
                setEmailDirty(true)
            }
                break;
            case 'password': {
                setPasswordDirty(true)
            }
        }
    }

    const Login = () => {
        axios.post('/auth/login', {
            email: email,
            password: password,
        }).then(res => {
            if (res.status == 200) {
                setMessage('Logged in')
                props.logUser(res.data)
                navigate('/');
            }

        })
    }

    return <div className={S.LogForm}>
        <form>
            <Typography variant="h3">LOGIN</Typography>
            <div>
                {(emailError && emailDirty) && <div style={{color: 'red'}}>{emailError}</div>}
                <input onBlur={blurHandler} onChange={emailHandler} value={email} name='email' placeholder='Email'
                       type='text'/>
            </div>

            <div>
                {(passwordError && passwordDirty) && <div style={{color: 'red'}}>{passwordError}</div>}
                <input onBlur={blurHandler} onChange={passwordHandler} value={password} name='password'
                       placeholder='Password' type='password'/>
            </div>
        </form>
        <div>
            <Button onClick={Login} disabled={!formValid}>Logg in</Button>
        </div>

        <div style={{color: 'green'}}>{message}</div>

    </div>
}

export default Login;