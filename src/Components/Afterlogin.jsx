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
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  {/* <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="./favicon.ico"
                        alt="PMusic"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div> */}
               
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pt-4 pb-3">
                  <div className="flex items-center px-5">
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user.imageUrl}
                            alt="userimage"
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
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white left-0 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
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
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

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
