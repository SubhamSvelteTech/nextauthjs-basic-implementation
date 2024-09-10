"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

const Login = () => {
  const [userCred, setUserCred] = useState({ email: "", password: "" });

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email: userCred?.email,
        password: userCred?.password,
        redirect: false,
      });
      if (res?.ok) {
        console.log("authenticated");
      } else {
        console.log("invalid credentials");
      }
      console.log(res, "res");
    } catch (error) {
      console.log(error, "bvcvbvcbvbvbvbvbv");
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value, name } = e.target;
    setUserCred((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="justify-end tabview:flex grid grid-cols-1 md:grid-cols-2 bg-login  h-screen bg-center bg-no-repeat bg-cover w-full">
        <div className="text-center m-auto hidden md:block tabview:hidden"></div>

        <div className="m-auto">
          <form onSubmit={(e) => handleClick(e)}>
            <fieldset className=" relative box-border border-solid max-w-sm m-auto bg-white border border-black rounded-3xl shadow">
              <legend className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] bg-black rounded cursor-pointer p-1 text-white text-center font-medium">
                <button className="px-20" type="submit">
                  Login
                </button>
              </legend>
              <div className="bg-teal rounded-t-3xl p-4 w-[400px] tabview:w-[350px]">
                <span className="text-3xl font-semibold text-white">
                  Sign In
                </span>
                <br />
                <span className="text-white text-xs">
                  If Already Registered, You May Login Using
                  <br />
                  Password or OTP. Else, Please Sign Up.
                </span>
              </div>
              {/* form */}

              <div className="p-4 flex flex-col gap-5 mb-6">
                <div className="relative z-0 w-full mb-3 group">
                  <input
                    type="text"
                    autoComplete="off"
                    value={userCred?.email}
                    onChange={(e) => handleChangeInput(e)}
                    name="email"
                    id="floating_email"
                    className="block px-6 py-2.5 w-full text-xs text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer text-black"
                    placeholder="Username"
                  />
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <div className="flex items-center">
                    <input
                      type={"text"}
                      name="password"
                      value={userCred?.password}
                      autoComplete="off"
                      onChange={(e) => handleChangeInput(e)}
                      id="floating_password"
                      className="block px-6 py-2.5 w-full text-xs text-gray-900 bg-transparent border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-300 peer text-black"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="text-xs flex cursor-pointer justify-center">
                    <span className="text-teal flex gap-2 font-semibold">
                      <input type="checkbox" className="accent-teal" />
                      <span>Remember me</span>
                    </span>
                  </div>
                  <Link
                    href={"/forgot-password"}
                    className="text-xs font-semibold text-teal dark:text-gray-300 cursor-pointer"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
