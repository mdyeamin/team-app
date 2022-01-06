import React, { useState } from 'react';
import { FormControl, InputGroup, Spinner, Button } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Register.css'
import Swal from 'sweetalert2'


const Register = () => {
    const [loginData, setLoginData] = useState({})

    const { user, registerUser, isLoading, authError, signinUsignGoogle } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const handleOnchange = e => {
        const filed = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        console.log(newLoginData);
        newLoginData[filed] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {

        if (loginData?.email && loginData?.password) {
            Swal.fire("Register successfylly")
        }
        registerUser(loginData?.email, loginData?.password, loginData?.name, location, history)
        e.preventDefault()
    }

    const googleSignin = () => {
        signinUsignGoogle(location, history)
    }

    return (
        <div>


            <div>
                {!isLoading &&
                    <form className="form-area" onSubmit={handleLoginSubmit}>
                        <h2>Register</h2>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                            <FormControl
                                name="name"
                                placeholder="name"
                                onChange={handleOnchange}
                            />
                        </InputGroup>
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

                        </InputGroup>
                        {
                            authError && <p className="text-danger">{authError}</p>
                        }
                        <input type="submit" value="register" /> <br />

                        <NavLink className="ask" to="/login"> allredy registered? place login</NavLink>
                        <div>
                            <button className="google-signin" onClick={googleSignin}> Google signin</button>
                        </div>
                    </form>}
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

export default Register;