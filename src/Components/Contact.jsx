import React, { useState } from "react";
import Navbar from "./Navbar";

function Contact() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const getUserData = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (event) => {
    event.preventDefault();
    const { name, email, number, message } = user;
    if (name && email && number && message) {
      const res = await fetch(
        "https://pmusiccontact-cfcb3-default-rtdb.firebaseio.com/PMusiccontact.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            number,
            message,
          }),
        }
      );
      if (res) {
        setUser({
          name: "",
          email: "",
          number: "",
          message: "",
        });
        alert("Thank You For Contact with Us");
      }
    } else {
      alert("Please fill all the Information");
    }
  };

  return (
    <>
      <Navbar />

      <div className="chead">
        <h3>Free free to contact with us</h3>
      </div>
      <form method="POST">
        <div className="cname">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={user.name}
            onChange={getUserData}
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Enter your email id"
            value={user.email}
            onChange={getUserData}
          />
          <input
            type="text"
            name="number"
            id="number"
            autoComplete="off"
            placeholder="Enter Your Phone Number"
            value={user.number}
            onChange={getUserData}
          />
        </div>
        <div className="cmsg">
          <label htmlFor="message" className="block">
            Message
          </label>
          <div className="cmsg2">
            <textarea
              id="message"
              rows="4"
              className="ctexta"
              name="message"
              value={user.message}
              onChange={getUserData}
            ></textarea>
          </div>
        </div>
        <div className="cpolicy">
          <h1>By clicking the button you agree our terms &amp; conditions</h1>
          <div className="cpolicylink">
            <a href="./policy">Treams and conditions</a>
          </div>
        </div>

        <div className="cbtn">
          <button type="submit" onClick={postData}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Contact;
