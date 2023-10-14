import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../headers';


export default function Login() {
    const navigate = useNavigate();





    const [error, setError] = useState('');





    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: async (values) => {



            console.log(JSON.stringify(values));
            try {
                const response = await fetch('http://127.0.0.1:5000/app_login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values, null, 2),
                });
                const k = await response.json()
                console.log(k);
                if (!k['auth_token']) {

                    const errorData = await response.json();
                    setError(errorData.message);
                } else {
                    try {

                        localStorage.setItem('auth_token', k['auth_token']);
                        localStorage.setItem('authenticated', true)
                        localStorage.setItem('role', k['role'])

                        console.log('your token is ' + localStorage.getItem('auth_token'));

                    } catch (err) {
                        return undefined;
                    }
                    // Handle successful login
                    navigate('/loggedin');
                }
            } catch (error) {
                setError(error.message);
            }

        },
    });




    return (
        <div className="container mt-5">
            <NavBar />
            <div className="row">
                <div className="col-md-6 offset-md-3 ">
                    <div className="card">

                        <div className="card-header">
                            <div className="card-title text-center">
                            </div>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={formik.handleSubmit}>
                                <div className='form-group'>
                                    <label htmlFor="username" className='form-control-label'>username</label>
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.username}
                                        className='form-control'
                                    />
                                </div>



                                <div className='form-group'>
                                    <label htmlFor="password" className='form-control-label'>password</label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                        className='form-control'
                                    />

                                </div>
                                <div className='form-group mt-2'>
                                    <input type='submit' value='submit' onClick={formik.handleSubmit} className='btn btn-primary btn-block' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


};