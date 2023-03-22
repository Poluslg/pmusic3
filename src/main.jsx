import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import About from "./Components/About";
import Afterlogin from "./Components/Afterlogin";
import Contact from "./Components/Contact";
import Newac from "./Components/Newac";
import Policy from "./Components/Policy";
import Forgotpassword from "./Components/Forgotpassword";
import Errorpage from "./Components/Errorpage";
import Profilesetting from "./Components/Profilesetting";
import Loginprofile from "./Components/Loginprofile";
import Playlist from "./Components/Playlist";
import Library from "./Components/Library"
import reducer,{initialState} from "./utils/reducer";
import { StateProvider } from "./utils/StateProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <Errorpage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/afterlogin",
    element: <Afterlogin />,
  },
  // {
  //   path: "/login/afterlogin",
  //   element: <Afterlogin />,
  // },
  {
    path: "/policy",
    element: <Policy />,
  },
  {
    path: "/newac",
    element: <Newac />,
  },
  {
    path: "/forgotpassword",
    element: <Forgotpassword />,
  },
  {
    path: "/profilesetting",
    element: <Profilesetting />,
  },
  {
    path: "/loginprofile",
    element: <Loginprofile />,
  },
  {
    path: "/playlist",
    element: <Playlist />,
  },
  {
    path: "/library",
    element: <Library />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
       
    <StateProvider initialState={initialState} reducer={reducer}>
    <RouterProvider router={router} />
    </StateProvider>
  </React.StrictMode>
);


