import {useEffect, useState} from "react"
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useAlertContext } from "../context/alertContext";
import Layout from "../Layout";
 import NameBanner from "./NameBanner";
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";
import { useNavigate } from "react-router-dom";


export default function BookingPage() {

    //const {isLoading, response, submit} = useSubmit();
    const { onOpen } = useAlertContext();
    const navigate = useNavigate();
    const currentDate = new Date().toISOString().slice(0, 10); //.toLocaleDateString();
    //const formattedDate = currentDate.toISOString().slice(0, 10);
    const [data, setData] = useState([]);

    var module = null;

    const formik = useFormik({
        initialValues : {
          date: currentDate,
          time: '',
          guests: 2,
          name: '',
          email: '',
          occasion: '',
          comment: ''
        },
        onSubmit: async (values, { setSubmitting }) => {
            try {
                fetch('https://raw.githubusercontent.com/courseraap/capstone/main/api.js')
                .then((response) => response.text())
                .then((scriptContent) => {
                    module = new Function(`return (function() { ${scriptContent} return { fetchAPI, submitAPI }; })()`)();
                    if (module.submitAPI) {
                        try {
                            console.log(formik.getFieldProps().value)
                            const resp = module.submitAPI(formik.getFieldProps().value)
                            console.log(resp)
                            if(resp) {
                                navigate("/booking-confirmed", { state: values })
                            }
                        } catch (error) {
                            console.error(error)
                        }
                    } else {
                        console.error("fetchAPI not found!");
                    }
                })
                .catch((error) => console.error("Loading script failed:", error));
            }
            catch (error) {
                console.error(error)
            }
            finally {
                setSubmitting(false); // Stop form submission loading state
            }
        },

        validationSchema : Yup.object({
          date: Yup.date().required('Required').min(currentDate, "Date is too early"),
          time: Yup.string().min(4, "Invalid time").required("required"),
          guests: Yup.number().min(1).max(10).required("required"),
          name: Yup.string().min(2, "Name must be at least 2 characters").required("required"),
          email: Yup.string().email("Invalid email address").required('required'),
          occasion: Yup.string().optional(),
          comment: Yup.string().optional(),
        }),
      });
      
      useEffect(() => {
       fetchData()
    }, [formik.values.date]);

    function fetchData() {
        try {
            fetch('https://raw.githubusercontent.com/courseraap/capstone/main/api.js')
            .then((response) => response.text())
            .then((scriptContent) => {
                module = new Function(`return (function() { ${scriptContent} return { fetchAPI, submitAPI }; })()`)();
                if (module.fetchAPI) {
                    try {
                        const d = new Date(formik.values.date);
                        const result = module.fetchAPI(d);
                        console.log("New data fetched")
                        setData(result)
                    } catch (error) {
                        console.error(error)
                    }
                } else {
                    console.error("fetchAPI not found!");
                }
            })
            .catch((error) => console.error("Loading script failed:", error));

        }
        catch (error) {
            console.error(error)
        }
    }

    return (
    <>
        <Layout>
            <NameBanner/>
            <div className="page-content">
                <h2 className="section-title">Reserve Table</h2>
                <form onSubmit={formik.handleSubmit} noValidate>
                    <FormControl isInvalid={formik.touched.date && formik.errors.date}>
                    <label htmlFor="date">Date*:</label>
                    <div>
                        <input 
                            type="date" 
                            id="date" 
                            name="date" 
                            value={formik.values.date} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            />
                    </div>
                    <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={formik.touched.time && formik.errors.time}>
                        <label htmlFor="time">Time*:</label>
                    <div>
                        <select
                            id="time"
                            name="time"
                            value={formik.values.time} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value=''>-- choose --</option>
                            {
                            data.map((t, index) => {
                                return(
                                    <option key={index} value={t}>{t}</option>
                                )
                            })
                            }
                        </select>
                    </div>
                    <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
                    <label htmlFor="guests">Number of Guests*:</label>
                    <div>
                        <input 
                            type="range" 
                            name="guests" 
                            id="guests" 
                            max={10} 
                            min={1} 
                            value={formik.values.guests} 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            style={{marginBottom: 0}}/>
                        <div id="guest-indicator" style={{width: 300, textAlign: "center", fontWeight:"bold", marginBottom:20}}>{formik.values.guests}</div>
                    </div>
                    <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={formik.touched.occasion && formik.errors.occasion}>
                    <label htmlFor="occasion">Occasion:</label>
                    <div>
                        <select
                            id="occasion"
                            name="occasion"
                            value={formik.values.occasion} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value=""></option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="Engagement">Engagement</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={formik.touched.name && formik.errors.name}>
                        <label htmlFor="name">Name*:</label>

                    <div>
                             <input 
                                type="text" 
                                id="name" 
                                value={formik.values.name} 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required 
                                autoComplete="true"/>
                    </div>
                    <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                        <label htmlFor="email">Email*:</label>
                    <div>
                             <input 
                                type="email" 
                                id="email" 
                                value={formik.values.email} 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="john.doe@gmail.com" 
                                required 
                                autoComplete="true"/>
                    </div>
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                             <label htmlFor="comment">Comment:</label>
                    <div>
                             <textarea 
                                rows="5" 
                                id="comment" 
                                name="comment" 
                                placeholder="Additional requests" 
                                value={formik.values.comment} 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                />
                    </div>
                    <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                    </FormControl>
                        <button type="submit">
                            Reserve table
                        </button>
                </form>
            </div>
        </Layout>
        </>
        )

            {/**
            Date
            Time
            Number of guests
            Occasion (Birthday, Anniversary)
            Submit reservation button (to submit the form) 



            The API has two functions that you can use in your code: 

            fetchAPI(date) - This function accepts a date as a parameter and returns an array of available reservation times for the provided date 

            submitAPI(formData) - This function accepts the booking form data as a parameter and will return true if the data was successfully submitted.

            Update the booking form to display the available times from the API
            Update the initializeTimes function that you previously created to use the fetchData API function to return the available times for today’s date. 

            Tip: You can create a Date object to represent today’s date.

            Update the updateTimes function that you previously created to use the fetchData API function. Remember, you dispatched the selected date to the updateTimes function. This should be passed to the fetchData function as a parameter.

            **/}

            }
