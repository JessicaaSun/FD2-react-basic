import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const fieldStyle = "rounded-md border border-gray-200";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email").required("Email is required!"),
  password: Yup.string().required("Password is required").matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
    'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.'
  ),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Password must match"),
  lastName: Yup.string()
    .min(3, "Last name is too short")
    .required("Last name is required"),
  firstName: Yup.string()
    .min(3, "First name is too short")
    .required("First name is required"),
});
const Register = () => {
  return (
    <div className="flex w-full flex-col ">
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          lastName: "",
          firstName: "",
        }}
        onSubmit={(value, {setSubmitting}) => {
          console.log(value);
         setSubmitting(false)
        }}
        validationSchema={validationSchema}
      >
        {({isSubmitting}) => {
          return (
            <Form className="flex flex-col gap-4 bg-blue-100 p-10  justify-center items-center">
              <div className="flex w-1/2 flex-col">
                <label htmlFor="email">Email:</label>
                <Field
                  className={fieldStyle}
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 text-sm italic"
                />
              </div>
              <div className="flex w-1/2 flex-col">
                <label htmlFor="password">Password:</label>
                <Field
                  className={fieldStyle}
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600 text-sm italic"
                />
              </div>
              <div className="flex w-1/2 flex-col">
                <label htmlFor="password">Confirm Password:</label>
                <Field
                  className={fieldStyle}
                  name="confirmPassword"
                  type="password"
                  placeholder="Enter your confirm password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-600 text-sm italic"
                />
              </div>
              <div className="flex w-1/2 flex-col">
                <label htmlFor="firstName">First name:</label>
                <Field
                  className={fieldStyle}
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-600 text-sm italic"
                />
              </div>
              <div className="flex w-1/2 flex-col">
                <label htmlFor="lastName">Last name:</label>
                <Field
                  className={fieldStyle}
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-600 text-sm italic"
                />
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="flex flex-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Register;
