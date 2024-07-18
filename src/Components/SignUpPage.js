import React, { useState } from 'react';
import '../style/login.css';
import { useFormik } from 'formik';
import basicSchema from './SignUpValidation';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUserDetails } from '../store/userSlice';
import { message } from 'antd';





const SignUpPage = () => {

  let navigate = useNavigate()
  let dispatch = useDispatch()


  const onSubmit = async (action, values) => {

    dispatch(addUserDetails(action))
    navigate("/home")
    message.open({
      type: 'success',
      content: 'Successfully Login',
    });

    // action.resetForm();
  };

  const { values, handleBlur, handleChange, touched, errors, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: ""
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


  // const handleSignIn = () => {
  //   console.log(values)
  //   if (!errors == null) {
  //     console.log("handleSignIn")
  //   }
  // }

  // const handleSignUp = () => {
  //   console.log(errors)
  // }


  return (
    <div className='signup-maincontainer'>
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className={errors.name && touched.name ? "input-err" : ""}
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
            // required
            />
            {errors.name && touched.name ? (
              <p className="error">{errors.name}</p>
            ) : (
              ""
            )}
          </div>

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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              value={values.confirmpassword}
              className={errors.confirmpassword && touched.confirmpassword ? "input-err" : ""}
              onBlur={handleBlur}
              onChange={handleChange}
            // required
            />
            {errors.confirmpassword && touched.confirmpassword ? (
              <p className="error">{errors.confirmpassword}</p>
            ) : (
              ""
            )}
          </div>

          <div>

            <p className='loginchange'>

              Already registered? <a onClick={() => navigate("/")}>Sign In</a> Now
            </p>

          </div>
          <br></br>

          <button type="submit" className="btn-signup">Sign Up</button>

        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
