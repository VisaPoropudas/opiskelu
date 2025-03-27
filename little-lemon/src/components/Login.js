import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import {useAlertContext} from '../context/alertContext';
import Layout from "../Layout";
import { Link, useNavigate } from "react-router-dom";
import NameBanner from "./NameBanner";
import Homepage from "./Homepage";
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";

export default function Login() {
    //const {isLoading, response, submit} = useSubmit();
    const navigate = useNavigate();
    const [isRegistration, setIsRegistration] = useState(false);
    const { onOpen } = useAlertContext();

    const formik = useFormik({
        initialValues : { 
          username: '',
          password: '',
          confirmPassword: ''
        },
        onSubmit: async (values, { setSubmitting }) => {
          try {
            onOpen("success", "Login succesful!")
            navigate("/");
            } catch (error) {
                console.error(error);
          } finally {
            setSubmitting(false); // Stop form submission loading state
          }
        },
    
        validationSchema : Yup.object({
          username: Yup.string().email("Invalid email address").min(8, "Must be at least 8 characters").required('required'),
          password: Yup.string().min(8, "Password must be at least 8 characters").required('required'),
          confirmPassword: Yup.string().when("password", {
            is: (password) => isRegistration,
            then: () => Yup.string().min(8, "Invalid confirmed password").required("required")
          }),
        }),
      });


    return (
        <>
        <Layout>
            <NameBanner/>
            <div className="page-content">
            <h2 className="section-title">{isRegistration ? "Register" : "Login"}</h2>
            <form onSubmit={formik.handleSubmit} noValidate>
                <FormControl isInvalid={formik.touched.username && formik.errors.username}>
                <label htmlFor="username">Username*:</label>
                <div>
                    <input 
                        type="email" 
                        id="username" 
                        name="username" 
                        placeholder="john.doe@here.com" 
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                        required 
                        autoComplete="true"/>
                </div>
                <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.touched.password && formik.errors.password}>
                <label htmlFor="password">Password*:</label>
                <div>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="******" 
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} 
                    required />
                </div>
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                </FormControl>
                { isRegistration && (
                    <>
                        <FormControl isInvalid={formik.touched.confirmPassword && formik.errors.confirmPassword}>
                        <label htmlFor="confirmPassword">Confirm Password*:</label>
                        <div>
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            name="confirmPassword" 
                            placeholder="******" 
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} 
                            />
                        </div>
                        <FormErrorMessage>{formik.errors.confirmPassword}</FormErrorMessage>
                        </FormControl>
                     </>
                )}
                <button type="submit">{isRegistration ? "Register" : "Login"}</button>
                {!isRegistration && (
                    <p>Not yet registered? <Link to="#" onClick={() => setIsRegistration(true)}>Register here</Link></p>
                )}
                {isRegistration && (
                    <p>Already registered? <Link to="#" onClick={() => setIsRegistration(false)}>Login</Link></p>
                )}
            </form>
            </div>
        </Layout>
        </>
    )
}