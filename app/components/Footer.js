"use client";
import Link from "next/link";
import { useState } from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import Ripples from "react-ripples";
import Heading from "./Heading";
import Logo from "./Logo";
import Typography from "./Typography";
import { useRouter } from "next/navigation";

export default function Footer() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const footerRoute = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/contact");
  };

  const Menu = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Store", url: "/store" },
    { text: "Contact", url: "/contact" },
  ];

  return (
    <footer className=" w-full h-auto grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4    text-white py-24  lg:px-5 bg-white dark:bg-slate-900">
      <div className="lg:col-span-2 px-4 sm:w-[100%] my-2">
        <span>
          <Logo />
        </span>
        <Typography
          style={
            " font-medium text-gray-800 dark:text-white py-2   text-[0.98rem]  md:text-base  "
          }
        >
          A smartwatch is a wearable computer in the form of a watch; modern
          smartwatches provide a local touchscreen interface for daily use.
        </Typography>
        <div className=" flex items-center  my-2 gap-3 place-items-center">
          <span onClick={() => router.push('https://twitter.com/codehubby?s=09')} className=" rounded-full p-3 text-lg ring-[1px] text-black duration-200 hover:bg-sky-600 dark:text-white grid place-content-center place-items-center">
            <BsTwitter />
            <span className=" sr-only">Twitter icon</span>
          </span>
          <span
            onClick={() => router.push("https://github.com/nehemiahcode/")}
            className=" rounded-full p-3 text-lg  ring-[1px] text-black duration-200 group  hover:bg-slate-900 dark:hover:bg-cyan-950 dark:text-white grid place-content-center place-items-center"
          >
            <BsGithub className=" group-hover:text-white" />
            <span className=" sr-only">Github icon</span>
          </span>
        </div>
        <Typography
          style={
            " text-gray-800  font-medium text-sm md:text-base  py-4 dark:text-white"
          }
        >
          All rights reversed 2023
        </Typography>
        <Typography
          style={
            " text-gray-800  font-medium text-sm md:text-base cursor-default  md:cursor-pointer dark:text-white"
          }
        >
          <span onClick={() => router.push("/privacy-policy")}>
            {" "}
            Privacy policy
          </span>
        </Typography>
      </div>

      <div className=" px-4 h-auto  sm:w-[50%] my-4  ">
        <Heading style={" font-semibold text-xl text-black pb-3"}>Menu</Heading>
        {Menu.map((links, index) => (
          <ul
            key={index}
            className=" flex w-fit flex-col justify-between gap-7"
          >
            <li className=" py-1">
              <span
                onClick={() => footerRoute.push(links.url)}
                className={` text-black py-2 dark:text-white text-sm md:text-base md:cursor-pointer cursor-default dark:hover:text-sky-600  hover:text-sky-600 font-normal`}
              >
                {links.text}
              </span>
            </li>
          </ul>
        ))}
      </div>
      <div className=" sm:grid-cols-2 my-4 px-4">
        <Heading style={" font-semibold text-xl text-black"}>
          Stay in Touch
        </Heading>
        <form onSubmit={handleSubmit} className=" flex flex-col space-y-5">
          <div>
            <label htmlFor="Email"></label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder={"Email address"}
              disabled
              className="w-full  mt-2 px-3 py-2 text-black dark:text-white border-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <Ripples className="w-[100%]">
            <button
              type="submit"
              className=" w-[100%]  px-4 py-3 cursor-default md:cursor-pointer text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
            >
              Subscribe
            </button>
          </Ripples>
        </form>
      </div>
      
    </footer>
  );
}
