import React, { useState } from 'react';
import '../style/login.css';
import { useFormik } from 'formik';
import basicSchema from './SignInValidation';
import { useNavigate } from 'react-router-dom';
import { Result, message } from 'antd';





const SignInPage = () => {

    let navigate = useNavigate()


    const onSubmit = async (action, values) => {

        // alert("The login page is successfully completed");
        navigate("/home")
        message.open({
            type: 'success',
            content: 'Successfully Login',
        });
        action.resetForm();
    };

    const { values, handleBlur, handleChange, touched, errors, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: basicSchema,
        onSubmit,
    });
    // console.log(values);






    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormData({
    //     ...formData,
    //     [name]: value,
    //   });
    // };





    return (
        <div className='signup-maincontainer'>
            <div className="signup-container">
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={errors.email && touched.email ? "input-err" : ""}
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        // required
                        />
                        {errors.email && touched.email ? (
                            <p className="error">{errors.email}</p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className={errors.password && touched.password ? "input-err" : ""}
                            value={values.password}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        // required
                        />
                        {errors.password && touched.password ? (
                            <p className="error">{errors.password}</p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div>

                        <p className='loginchange'>
                            New student ? Please <a onClick={() => navigate("/signup")}>Sign Up</a> Now
                        </p>

                    </div>
                    <br></br>
                    <button type="submit" className="btn-signup">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;
