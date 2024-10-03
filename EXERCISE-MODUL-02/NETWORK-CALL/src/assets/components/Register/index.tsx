import { Formik, Form, Field, FormikProps } from "formik";
import { useState } from "react";
import IUser from "../../interfaces/user.interface";
import axios from "axios";
import Schema from "./schema";

function Register() {
  const postUser = async (params: IUser) => {
    try {
      await axios.post(
        "https://66fd3d81c3a184a84d199b16.mockapi.io/api/v1/gguser",
        {
          fullname: params.fullname,
          email: params.email,
          password: params.password,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const [shwpswd, setshwpswd] = useState<boolean>(false);

  return (
    <div className="flex justify-center items-center h-screen bg-[#414142]">
      <div className="bg-[#414142 p-6 rounded-lg shadow-lg w-80 text-white font-bold">
        <h2 className="text-2xl font-bold text-center mb-4">Page Register</h2>
        <Formik
          initialValues={{
            id: 0,
            fullname: "",
            email: "",
            password: "",
          }}
          validationSchema={Schema}
          onSubmit={(values) => {
            postUser(values);
          }}
        >
          {(props: FormikProps<IUser>) => {
            const { values, errors, touched, handleChange } = props;

            return (
              <Form>
                <div className="mb-4">
                  <label htmlFor="fullname" className="block mb-1">
                    Name:
                  </label>
                  <Field
                    type="text"
                    name="fullname"
                    onChange={handleChange}
                    value={values.fullname}
                    className="border border-gray-300 text-black rounded p-2 w-full"
                  />
                  {touched.fullname && errors.fullname ? (
                    <div className="text-red-500">{errors.fullname}</div>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-1">
                    Email:
                  </label>
                  <Field
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    className="border border-gray-300 text-black rounded p-2 w-full"
                  />
                  {touched.email && errors.email ? (
                    <div className="text-red-500">{errors.email}</div>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block mb-1">
                    Password:
                  </label>
                  <div className="relative">
                    <Field
                      type={shwpswd ? "text" : "password"}
                      name="password"
                      onChange={handleChange}
                      value={values.password}
                      className="border border-gray-300 text-black rounded p-2 w-full"
                    />
                    <button
                      type="button"
                      onClick={() => setshwpswd(!shwpswd)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 text-sm px-2 py-1 rounded"
                    >
                      {shwpswd ? "Hide" : "Show"}
                    </button>
                  </div>
                  {touched.password && errors.password ? (
                    <div className="text-red-500">{errors.password}</div>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 rounded w-full"
                >
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default Register;
