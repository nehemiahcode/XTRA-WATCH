"use client";
import { useState, useEffect } from "react";
import Ripples from "react-ripples";
import Heading from "./Heading";
import Typography from "./Typography";

export default function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  const [send, setSend] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSend(!send);
    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);
    if (success) {
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  useEffect(() => {
    const Timer = setTimeout(() => {
      setSend(false);
    }, 1000);
    return () => clearTimeout(Timer);
  }, [send]);

  const test = ["name", "email", "message"];
  return (
    <main className="w-full px-5 h-auto flex flex-col items-center justify-center  sm:px-4">
      <div className="w-full space-y-4 text-gray-600  sm:max-w-md">
        <div className="text-center">
          {/* <img
            src="https://floatui.com/logo.svg"
            width={150}
            className="mx-auto"
          /> */}
          <div className="mt-5 space-y-2">
            <Heading style=" dark:text-white text-gray-800  text-2xl font-bold sm:text-3xl">
              Contact us today
            </Heading>
            <Typography style="dark:text-white text-gray-800">
              Fill in the required fileds below to get in touch.
            </Typography>
          </div>
        </div>
        {success && !error.length && (
          <div className="text-green-500 text-base">
            Message sent successfully
          </div>
        )}
        <div className="bg-white relative dark:bg-slate-600 lg:w-[100%] rounded-md shadow p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="Name"
                className="font-medium dark:text-white text-gray-800"
              >
                Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                placeholder={"Fullname"}
                type="text"
                value={name}
                // required
                className="w-full mt-2 px-3 py-2 text-gray-500 dark:text-white  bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
              {/* {error[0] && (
                <div
                  className={` text-red-500 text-base`}
                >
                  {error[0]}
                </div>
              )} */}
            </div>
            <div>
              <label
                htmlFor="Email"
                className="font-medium dark:text-white text-gray-800"
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                type="email"
                value={email}
                // required
                className="w-full mt-2 px-3 py-2 text-gray-500 dark:text-white  bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
              {/* {error[1] && (
                <div className="text-red-500 text-base">{error[1]}</div>
              )} */}
            </div>
            <div>
              <label
                htmlFor="Message"
                className="font-medium dark:text-white text-gray-800"
              >
                Message
              </label>
              <textarea
                value={message}
                placeholder=" Some Message..."
                onChange={(e) => setMessage(e.target.value)}
                className="h-[200px] resize-none w-full mt-2 px-3 py-2 text-gray-500 dark:text-white  bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              ></textarea>
              {/* {error[2] && (
                <div className="text-red-500 text-base">{error[2]}</div>
              )} */}
            </div>

            <Ripples className=" w-full">
              <button
                type="submit"
                className="w-full px-4 py-3 cursor-default md:cursor-pointer   text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
              >
                Subscribe
              </button>
            </Ripples>
          </form>
        </div>
        {/* {send && (
          <div> */}
            {" "}
            {error &&
              error.map((e, id) => (
                <div
                  key={id}
                  className={`${
                    success ? "text-green-500" : "text-red-500"
                  } text-sm`}
                >
                  {e}
                </div>
              ))}
          {/* </div>
        )} */}
      </div>
    </main>
  );
}
