import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './contact.css';
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const validationSchema = Yup.object({
    from_name: Yup.string().required('Name is required'),
    from_email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string().required('Message is required')
});

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState({
        showMsg: false,
        statusMessage: '',
        color: ''
    });

    const sendEmail = (values, actions) => {
        emailjs
            .sendForm('service_wec2wrs', 'template_o40x698', form.current, { publicKey: 'r5vOFszYG_jpR-iQa', })
            .then(
                () => {
                    setStatus({
                        showMsg: true,
                        statusMessage: 'Message sent successfully!',
                        color: '#10ed10'
                    });
                    actions.resetForm(); 
                },
                (error) => {
                    setStatus({
                        showMsg: true,
                        statusMessage: 'Failed to send the message. Please try again.',
                        color: 'red'
                    });
                    console.log('FAILED...', error.text);
                },
            ).finally(() => {
                actions.setSubmitting(false); 
            });
    };

    useEffect(() => {
        if (status.showMsg) {
            const timeout = setTimeout(() => {
                setStatus((prevState) => ({
                    ...prevState,
                    showMsg: false
                }));
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, [status.showMsg]);

    

    return (
        <>
            <section id='contactSection'>
            {status.showMsg && <div style={{ color: status.color }} className='statusMessage'>{status.statusMessage}</div>}

                <h1 className='heading'>Contact<span className='highlight'> Me</span></h1>
                <p className='contactDesc'>Please fill out the form below to discuss any work opportunities.</p>
                <Formik
                    initialValues={{ from_name: '', from_email: '', message: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => sendEmail(values, actions)}
                >
                    {({ isSubmitting }) => (
                        <Form ref={form} className='contactForm'>
                            <Field type='text' name='from_name' className='name' placeholder='Your Name' />
                            <ErrorMessage name='from_name' component='div' className='error' />

                            <Field type='email' name='from_email' className='email' placeholder='Your Email' />
                            <ErrorMessage name='from_email' component='div' className='error' />

                            <Field as='textarea' style={{ resize: 'none' }} name='message' className='msg' rows='5' placeholder='Write your message here...' />
                            <ErrorMessage name='message' component='div' className='error' />

                            <button type='submit' className='submitBtn' disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Submit'}
                            </button>

                            <div className='myLinks'>
                                <a href="mailto:manishkatara9799@gmail.com" target='_blank' rel="noreferrer">
                                    <IoIosMail className='redirect' style={{ marginBottom: '10px' }} />
                                </a>
                                <a href="https://www.linkedin.com/in/manish-katara/" target='_blank' rel="noreferrer">
                                    <FaLinkedin className='redirect' style={{ marginBottom: '10px' }} />
                                </a>
                                <a href="https://wa.me/+919179609799" target='_blank' rel="noreferrer">
                                    <FaWhatsapp className='redirect' style={{ marginBottom: '10px' }} />
                                </a>
                                <a href="tel:+919179609799" target='_blank' rel="noreferrer">
                                    <IoMdCall className='redirect' style={{ marginBottom: '10px' }} />
                                </a>
                            </div>
                        </Form>
                    )}
                </Formik>
            </section>
        </>
    );
};

export default Contact;
