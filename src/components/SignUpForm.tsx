"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters long")
          .matches(/[0-9]/, "Password must contain at least one number")
          .matches(
            /[!@#$%^&*(),.?":{}|<>]/,
            "Password must contain at least one special character"
          )
          .required("Required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password")], "Passwords must match")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4 px-8 sm:px-4 md:px-4 lg:px-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <Field
              name="name"
              type="text"
              className="mt-1 p-2 block w-full border rounded-md"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <Field
              name="email"
              type="email"
              className="mt-1 p-2 block w-full border rounded-md"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Field
              name="password"
              type="password"
              className="mt-1 p-2 block w-full border rounded-md"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <Field
              name="confirmPassword"
              type="password"
              className="mt-1 p-2 block w-full border rounded-md"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white py-2 rounded-md text-[13px] sm:text-base md:text-lg lg:text-lg"
            >
              Sign up
            </button>
          </div>

          <div className="flex items-center justify-center mt-4">
            <span className="text-sm text-gray-500">or</span>
          </div>

          <div className="flex items-center justify-center mt-4">
            <span className="text-[10.5px] sm:text-sm md:text-sm lg:text-sm text-gray-500">
              Already have an account?{" "}
              <a href="/auth/sign-in" className="text-blue-500">
                Sign in
              </a>
              .
            </span>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
