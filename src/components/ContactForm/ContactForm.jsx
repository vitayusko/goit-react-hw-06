import React from "react";
import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addContact } from "../../redux/contact/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };
  const onSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    resetForm();
    console.log("Contact added:", newContact);
  };
  return (
    <div className={s.wrapper}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name:</span>
            <Field className={s.input} name="name" />
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Number:</span>
            <Field className={s.input} name="number" />
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>
          <button type="submit">Create</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
