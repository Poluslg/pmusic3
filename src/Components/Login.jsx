import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Login() {
  const [email, getEmail] = useState("");
  const [password, getPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();
  const [error, seterror] = useState("");

  const login = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("token", user.accessToken);
        localStorage.setItem("uid", user.uid);
        alert("wellcome to PMusic");
        navigate("/afterlogin");
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          seterror("Invalid email address and/or password");
        } else if (error.code === "auth/invalid-email") {
          seterror("Please Enter Email Address");
        } else if (error.code === "auth/wrong-password") {
          seterror("Wrong Password");
        } else if (error.code === "auth/internal-error") {
          seterror("Pleae Enter Password");
        } else {
          seterror(error.code);
        }
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/afterlogin");
    }
  }, [navigate]);

  const cancel = () => {
    navigate("/");
  };

  const newac = () => {
    navigate("/Newac");
  };

  const provider = new GoogleAuthProvider({
    clientId:
      "475738216650-h7cqlhdkietls673qhsos83fimfaa49i.apps.googleusercontent.com",
    prompt: "one",
  });

  const gsing = () => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        const user = GoogleAuthProvider.credentialFromResult(userCredential);
        localStorage.setItem("token", user.accessToken);
        localStorage.setItem("uid", user.uid);
        alert("welcome to PMusic");
        navigate("/afterlogin");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="/favicon.ico"
              alt="PMusic"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <form className="-space-y-px rounded-md shadow-sm" onSubmit={login}>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => getEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => getPassword(e.target.value)}
              />
            </div>
          </form>
          <div className="lerror">
            <h1>{error}</h1>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="/forgotpassword"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div className="container mx-auto px-4">
            <h1 className="lgor"> </h1>
            <div className="googlelogoborder">
              <button type="submit" onClick={gsing}>
                Connect with google
              </button>
              <img
                src="/google.svg"
                alt="Google-Login"
                className="googlelogo"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              onClick={login}
              className="group relative flex w-full justify-center rounded-md border  bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
              Sign in
            </button>
            <div className="btnac">
              <button type="submit" onClick={newac} className="group relative flex w-full justify-center rounded-md border  bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Create a new Account
              </button>
              <button type="submit" onClick={cancel} className="group relative flex w-full justify-center rounded-md border  bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
