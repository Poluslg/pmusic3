import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function Forgotpassword() {
  const navigate = useNavigate();
  const cancel = () => {
    navigate("/login");
  };

  const inputElement = useRef();

  const [ setShowModal] = useState(false);
  const [ getemail] = useState("");
  const [error, geterror] = useState("");
  const auth = getAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = inputElement.current.value;
    const emailpattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (emailpattern.test(email)) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          getemail(email);
          setShowModal(true);
          alert("A mail has been sent to your email address.");
        })
        .catch((error) => {
          if (error.code === "auth/user-not-found") {
            geterror("Email id not registered");
          } else {
            geterror(error.code);
            alert(error.code);
          }
        });
    }
    
    else{
      geterror("Please enter a valid email address") 
    }
  };

  return (
    <>
      <Navbar />
      <div className="overflow-hidden shadow sm:rounded-md">
        <div className="bg-white px-4 py-5 sm:p-6">
          <div className="fhead">
            <h3>Find Your Account</h3>
            <h1>
              Please enter your email address or mobile number to search for
              your account.
            </h1>
          </div>
          <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  ref={inputElement}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Your Email address"
                />
              </div>
              <div>
                <h1>{error}</h1>
              </div>

              <div className="btnc">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="group relative flex w-full justify-center rounded-md border  bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit{" "}
                </button>
               
                <button
                  type="submit"
                  onClick={cancel}
                  className="group relative flex w-full justify-center rounded-md border  bg-red-400 py-2 px-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Cancel{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgotpassword;
