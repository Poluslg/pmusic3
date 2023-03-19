import { Fragment, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useNavigate, Link } from "react-router-dom";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { getDatabase, ref, child, get } from "firebase/database";
import Header from "./Header";

const user = {
  name: "",
  email: " ",
  imageUrl: "./defaultprofile.png",
};
const navigation = [
  // { name: "Dashboard", href: "/afterlogin", current: true },
  // { name: "Your Library", href: "#", current: false },
  // { name: "Create Playlist", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Afterlogin() {
  const dbRef = ref(getDatabase());
  const navigate = useNavigate();
  useEffect(() => {
    const getStoredData = async () => {
      const uid = await localStorage.getItem("uid");
      if (uid && uid.length) {
        getUserData(uid);
      }
    };

    const getUserData = (userId) => {
      get(child(dbRef, `users/${userId}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            // console.log(snapshot.val());
            const val = snapshot.val();
            user.name = val.usename;
            user.email = val.email;
          } else {
            // console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      getStoredData();
    }
  }, [dbRef, navigate]);

  function logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
    navigate("/login");
  }
  return (
    <>
      <Header/>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div>
              <h6>Wellcome to PMusic</h6>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
