"use client";
import { IoMdClose } from "react-icons/io";
import { TbWorldQuestion } from "react-icons/tb";
import Ripples from "react-ripples";
import Heading from "./Heading";
import Typography from "./Typography";
import { useState, useEffect } from "react";
import { useLockBodyScroll } from "@uidotdev/usehooks";

export default function Modal({ show }) {
  const [loading, setLoading] = useState(true);
  useLockBodyScroll()

  useEffect(() => {
    const Time = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(Time);
  }, []);
  return (
    <div className="fixed inset-0 z-[9999]">
      <div
        className="fixed inset-0 w-full h-full  bg-black opacity-40"
        onClick={show}
      ></div>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-[95%] md:max-w-lg mx-auto bg-white dark:bg-slate-900 rounded-md shadow-lg">
            <div className="flex items-center justify-between p-4 border-b">
              <Heading style="text-lg font-medium flex items-center gap-4 dark:text-white text-gray-800">
                Ooopss
                <span className=" text-4xl">
                  <TbWorldQuestion />
                </span>
              </Heading>
              <button
                type="button"
                className="p-2 text-gray-400 cursor-default md:cursor-pointer rounded-md hover:bg-gray-100"
                onClick={show}
              >
                <span className=" text-xl">
                  <IoMdClose />
                </span>
              </button>
            </div>
            <div className="space-y-2 p-4 mt-3 text-[15.5px] leading-relaxed text-gray-500">
              <Typography style={" dark:text-white"}>
                The page you are trying to access is not available at the
                moment, but will soon be implemented.
              </Typography>
            </div>
            <div className="flex items-center  justify-end p-4 mt-5 border-t">
              <button
                className="px-6 py-2 text-white hidden bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                onClick={show}
              >
                Accept
              </button>

              <Ripples className="rounded-md">
                <button
                   onClick={show}
                  type="button"
                  className="px-6 py-2 text-gray-800 dark:text-white border hover:bg-gray-500 dark:hover:bg-slate-800 border-slate-400 cursor-default md:cursor-pointer rounded-md outline-none ring-2 ring-indigo-600 focus:ring-2"
                >
                  Close
                </button>
              </Ripples>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function SkeletonLoader() {
  return (
    <div className="flex items-center min-h-screen px-4 py-8">
      <div className="relative py-8 px-4  w-[90%] md:max-w-lg mx-auto bg-white dark:bg-slate-900 rounded-md shadow-lg">
        {/* error message and icon loading effect */}
        <div className="flex justify-between mb-5 items-center">
          <div className=" rounded bg-gray-600 w-[60%] py-5 animate-pulse"></div>
          <div className=" h-10 w-10 rounded bg-gray-600 animate-pulse"></div>
        </div>
        {/* texts loading effects */}
        <div className="py-2 rounded w-[80%] bg-gray-600 animate-pulse my-2"></div>
        <div className="py-2 rounded w-[80%] bg-gray-600 animate-pulse my-2"></div>

        {/* button loading effect */}
        <div className="flex w-full my-2 justify-end">
          <div className=" rounded py-5 w-[30%] bg-gray-600 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
