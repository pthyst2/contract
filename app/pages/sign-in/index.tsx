import { useState } from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import Link from "next/link";

interface SignInValue {
  email: String;
  password: String;
}
export default function SignInPage() {
  return (
    <>
      <main className="bg-mainLight w-full min-h-[100vh] flex justify-center items-center">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={() => {}}
        >
          <Form className="bg-white rounded-[10px] shadow-lg py-[20px] px-[32px]">
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="example@domain.com"
                spellCheck="false"
                className="custom-input"
              />
            </div>
            {/* end of email */}
            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                type="password"
                className="custom-input"
                spellCheck="false"
              />
            </div>
            {/* end of password */}
            {/* Actions */}
            <div className="text-right">
              <Link href="">
                <a className="text-main hover:underline block py-2">
                  Forgot password
                </a>
              </Link>
              <button type="submit" className="btn btn-main rounded px-4 py-1">
                Submit
              </button>
            </div>
            {/* end of action */}
          </Form>
        </Formik>
      </main>
      <style jsx global>
        {`
          .form-group {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding-bottom: 1em;
          }
          .form-group label {
            font-weight: 600;
            margin-bottom: 0.25em;
            letter-spacing: normal;
          }
          .form-group .custom-input {
            border-radius: 4px;
            background-color: #fafafa;
            box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
            padding: 0.3em 0.5em;
            outline: none;
            border: none;
          }
          .form-group .custom-input:focus {
            box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
          }
        `}
      </style>
    </>
  );
}
