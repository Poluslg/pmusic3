import React from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useEffect } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import { useNavigate, Link, NavLink } from "react-router-dom";

const user = {
  name: "",
  email: " ",
  imageUrl: "./person.svg",
};

const Header = () => {
  const navigation = [
    { name: "Home", href: "/afterlogin" },
    { name: "Your Library", href: "/library" },
    { name: "Create Playlist", href: "/playlist" },
  ];

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
            const val = snapshot.val();
            user.name = val.usename;
            user.email = val.email;
          } else {
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
    <Disclosure as="nav" className="bg-cyan-500 text-white ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-cyan-400 hover:bg-cyan-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="/favicon.ico"
                    alt="PMusic"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="/favicon.ico"
                    alt="PMusic"
                  />
                </div>
                <div className="hidden sm:ml-4 sm:block">
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          isActive
                            ? "bg-cyan-90 text-white rounded-md px-3 py-2 text-sm font-medium"
                            : "text-gray-300 hover:bg-sky-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full bg-cyan-500"
                      src={user.imageUrl}
                      alt="userphoto"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      <Link
                        to="/loginprofile"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Your Profile
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        to="/profilesetting"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Settings
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-sm text-gray-700"
                        onClick={logOut}
                      >
                        Logout
                      </Link>
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  }
                  // aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
