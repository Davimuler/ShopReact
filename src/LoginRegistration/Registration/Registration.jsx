import React, {useEffect, useState} from "react";
import S from './Registration.module.css'
import axios, {apiCreateUser} from '../../api/api.js'

const Reg = (props) => {
    const [fullName, setFullName] = useState('')
    const [fullNameDirty, setFullNameDirty] = useState(false)
    const [fullNameError, setFullNameError] = useState('Name can not be empty')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordConfirmDirty, setPasswordConfirmDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email can not be empty');
    const [passwordError, setPasswordError] = useState('Password can not be empty');
    const [passwordConfirmError, setPasswordConfirmError] = useState('Password can not be empty');
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passwordError || passwordConfirmError || fullNameError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError, passwordConfirmError, fullNameError])

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
            setPasswordError('Password must be longer than 3 symbols and shorter than 12')
            if (e.target.value === '') {
                setPasswordError('Password can not be empty')
            }
        } else {
            if (e.target.value !== passwordConfirm) {
                setPasswordConfirmError('Passwords are not equal')
            } else {
                setPasswordConfirmError('')
            }
            setPasswordError('')
        }
    }
    const passwordConfirmHandler = (e) => {
        setPasswordConfirm(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 12) {
            setPasswordConfirmError('Password must be longer than 3 symbols and shorter than 12')
            if (e.target.value === '') {
                setPasswordConfirmError('Password can not be empty')
            }
        } else {
            if (e.target.value != password) {
                setPasswordConfirmError('Passwords are not equal')
            } else {
                setPasswordConfirmError('')
            }
        }
    }

    const fullNameHandler = (e) => {
        setFullName(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 12) {
            setFullNameError('Name must be longer than 3 symbols and shorter than 12');
            if (e.target.value === '') {
                setFullNameError('Name can not be empty');
            }
        } else {
            setFullNameError('');
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
                break;
            case 'passwordConfirm': {
                setPasswordConfirmDirty(true)
            }
                break;
            case 'fullName': {
                setFullNameDirty(true)
            }
                break;
        }
    }


    const Registration = () => {
        const usersData = {
            email: email,
            password: password,
            fullName: fullName,
        };
        apiCreateUser(usersData).then(() => {
            }
        )
        setFullName('')
        setEmail('')
        setPassword('')
        setPasswordConfirm('')
    }

    return <div className={S.formReg}>
        <form>
            <div>
                <h1>Registration</h1>
            </div>
            <div>
                {(fullNameError && fullNameDirty) && <div style={{color: 'red'}}>{fullNameError}</div>}
                <input onBlur={e => blurHandler(e)} type='text' name='fullName' onChange={fullNameHandler}
                       value={fullName}
                       placeholder={'Name'}/>
            </div>
            <div>
                {(emailError && emailDirty) && <div style={{color: 'red'}}>{emailError}</div>}
                <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email'
                       type='text'
                       placeholder='Enter your email....'/>
            </div>
            <div>
                {(passwordError && passwordDirty) && <div style={{color: 'red'}}>{passwordError}</div>}
                <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password'
                       type='password' placeholder='Enter your password....'/>
            </div>
            <div>
                {(passwordConfirmDirty && passwordConfirmError) &&
                    <div style={{color: 'red'}}>{passwordConfirmError}</div>}
                <input onChange={e => passwordConfirmHandler(e)} value={passwordConfirm} name='passwordConfirm'
                       onBlur={e => blurHandler(e)} type='password' placeholder='Confirm your password....'/>
            </div>
        </form>
        <div>
            <button onClick={Registration} disabled={!formValid}>Registration</button>
        </div>
    </div>
}

export default Reg;