import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../firebase";

export default function Newac() {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const inputFirstName = useRef(null);
  const inputLastName = useRef(null);
  const inputEmail = useRef(null);
  const inputNumber = useRef(null);
  const inputPassword = useRef(null);
  const inputUserName = useRef(null);

  const register = (e) => {
    e.preventDefault();
    console.log();
    const email = inputEmail.current.value;
    const password = inputPassword.current.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        writeUserData(user.uid);
        // postData();
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

  function writeUserData(userId) {
    const db = getDatabase();
    set(ref(db, "users/" + userId), {
      usename:inputUserName.current.value,
      firstName: inputFirstName.current.value,
      lastName: inputLastName.current.value,
      email: inputEmail.current.value,
      phonenumber: inputNumber.current.value,
    });
    alert("successfully registered");
    cancel();
  }

  const cancel = () => {
    navigate("/Login");
  };
  return (
    <>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="flex  justify-center">
          <div className="mt-5">
            <form method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="user-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        User Name
                      </label>
                      <input
                        ref={inputUserName}
                        type="text"
                        name="user-name"
                        id="user-name"
                        autoComplete="username"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        First name
                      </label>
                      <input
                        ref={inputFirstName}
                        type="text"
                        name="firstname"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Last name
                      </label>
                      <input
                        ref={inputLastName}
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium leading-6 text-gray-900 "
                      >
                        Email address
                      </label>
                      <input
                        ref={inputEmail}
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className=" nemailinput"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium leading-6 text-gray-900 pt-3 "
                    >
                      Phone Number
                    </label>
                    <input
                      ref={inputNumber}
                      type="text"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="number"
                      className=" nemailinput"
                    />
                  </div>
                  <div className="npasswordlabel">
                    <label
                      htmlFor="password"
                      className="block text-sm py-1 font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <input
                      ref={inputPassword}
                      type="password"
                      name="password"
                      id="password"
                      className="space-y-0.5 w-9/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    onClick={(e) => register(e)}
                    className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Save
                  </button>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button type="submit" className=" nbtn" onClick={cancel}>
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
