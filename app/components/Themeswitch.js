"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoIosSunny } from "react-icons/io";
import { PiMoonLight } from "react-icons/pi";
import Ripples from "react-ripples";

export default function Themeswitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Ripples className="rounded-full">
      <button
        onClick={toggleTheme}
        className="bg-blue-500  dark:bg-slate-800  cursor-default lg:cursor-pointer dark:ring-cyan-400 focus:ring-2 ring-white ring-inset flex justify-center items-center h-[40px] w-[40px] text-xl  rounded-full"
      >
        {theme === "light" ? (
          <span className="  active:rotate-[360deg]  duration-500">
            <IoIosSunny />
            <span className=" sr-only">Dark Theme</span>
          </span>
        ) : (
          <span className="active:rotate-[360deg] duration-500">
            <PiMoonLight />
            <span className=" sr-only">Light Theme</span>
          </span>
        )}
      </button>
      {/* <span
        className={` hidden md:flex top-5 z-[99]  ${
          theme === "dark"
            ? "text-white bg-slate-800 ring-1 ring-inset ring-white"
            : "text-black bg-white"
        }  flex items-center justify-center rounded-md px-2 py-[0.20rem] w-[90px]`}
      >
        {theme === "dark" ? "Dark" : "Light"}
      </span> */}
    </Ripples>
  );
}
