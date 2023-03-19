import { useEffect } from "react";
import { useNavigate, } from "react-router-dom";
import { getDatabase, ref, child, get } from "firebase/database";
import Header from "./Header";






export default function Profilesetting() {
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
            user.name = val.Username;
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
              Settings
            </h1>
          </div>
        </header>
        <main>
          <div></div>

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-base font-semibold leading-6 text-gray-900">
                    Notifications
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Decide which communications you'd like to receive and how.
                  </p>
                </div>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <form action="#" method="POST">
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                      <fieldset>
                        <legend className="sr-only">By Email</legend>
                        <div
                          className="text-sm font-semibold leading-6 text-gray-900"
                          aria-hidden="true"
                        >
                          By Email
                        </div>
                        <div className="mt-4 space-y-4">
                          <div className="flex items-start">
                            <div className="flex h-6 items-center">
                              <input
                                id="comments"
                                name="comments"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-6">
                              <label
                                htmlFor="comments"
                                className="font-medium text-gray-900"
                              >
                                Comments
                              </label>
                              <p className="text-gray-500">
                                Get notified when someones posts a comment on a
                                posting.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex h-6 items-center">
                              <input
                                id="candidates"
                                name="candidates"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-6">
                              <label
                                htmlFor="candidates"
                                className="font-medium text-gray-900"
                              >
                                Candidates
                              </label>
                              <p className="text-gray-500">
                                Get notified when a candidate applies for a job.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex h-6 items-center">
                              <input
                                id="offers"
                                name="offers"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-6">
                              <label
                                htmlFor="offers"
                                className="font-medium text-gray-900"
                              >
                                Offers
                              </label>
                              <p className="text-gray-500">
                                Get notified when a candidate accepts or rejects
                                an offer.
                              </p>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend className="contents text-sm font-semibold leading-6 text-gray-900">
                          Push Notifications
                        </legend>
                        <p className="text-sm text-gray-500">
                          These are delivered via SMS to your mobile phone.
                        </p>
                        <div className="mt-4 space-y-4">
                          <div className="flex items-center">
                            <input
                              id="push-everything"
                              name="push-notifications"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                              htmlFor="push-everything"
                              className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                            >
                              Everything
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="push-email"
                              name="push-notifications"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                              htmlFor="push-email"
                              className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                            >
                              Same as email
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="push-nothing"
                              name="push-notifications"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                              htmlFor="push-nothing"
                              className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                            >
                              No push notifications
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
