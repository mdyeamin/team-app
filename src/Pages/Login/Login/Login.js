import React, { useState } from 'react';
import { FormControl, InputGroup, Spinner, Button } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2'
import './Login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { isLoading, loginUser, authError, signinUsignGoogle } = useAuth()

    const location = useLocation()
    const history = useHistory()

    const googleSignin = () => {
        signinUsignGoogle(location, history)
    }


    const handleOnchange = e => {
        const filed = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        console.log(newLoginData);
        newLoginData[filed] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {
        loginUser(loginData?.email, loginData?.password, location, history)
        if (loginData?.email && loginData?.password) {
            Swal.fire("Login Successfully")
        }
        e.preventDefault()

    }
    return (
        <div>


            <div>
                {!isLoading &&
                    <form className="form-area" onSubmit={handleLoginSubmit}>
                        <h2>Login</h2>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                            <FormControl
                                name="email"
                                placeholder="email"
                                onChange={handleOnchange}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                            <FormControl
                                name="password"
                                type="password"
                                placeholder="password"
                                onChange={handleOnchange}
                            />
                            <br />

                        </InputGroup>
                        {
                            authError && <p className="text-danger">{authError}</p>
                        }
                        <input type="submit" value="Login" /> <br />
                        <NavLink className="ask" to="/register"> new User? pleace create an account</NavLink>
                        <div>
                            <button className="google-signin" onClick={googleSignin}> Google signin</button>
                        </div>
                    </form>
                }
            </div>
            {
                isLoading &&
                <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button>
            }

        </div>
    );
};

export default Login;