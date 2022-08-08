import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import  './style.css'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import LogInContext from "./logInContext";

const LogIn = () => {

  const [emailContext, setEmailContext] = useContext(LogInContext);
  const navigate = useNavigate()

  const handleClick = (values) => {
    
    setEmailContext(JSON.stringify(values.email))
    navigate("/posts")
  }

    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
         .required('No password provided.')
         .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
      }),
      onSubmit: values => {
        handleClick(values);
        console.log(JSON.stringify(values, null, 2));
    },
    });

    return (
      <div className="formBody">
      <form onSubmit={formik.handleSubmit}>

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
  
          <div className="LogInButton"><button type="submit" onSubmit={formik.handleSubmit}>LogIn</button></div>
        
      </form></div>
    );
  };

export default LogIn