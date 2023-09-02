"use client";
import { useEffect, useState, Suspense } from "react";
import Heading from "./Heading";
import { CgSpinner } from "react-icons/cg";
import Image from "next/image";

export function ImageReveal({ image, showBanner, alt, quotes }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const Timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(Timer);
  }, [loading]);
  return (
    <>
      {loading ? (
        <div className={"flex flex-col  py-28  items-center justify-center"}>
          <span className="animate-spin text-2xl">
            <CgSpinner />
          </span>
          <span>updating...</span>
        </div>
      ) : (
        <>
          <div className="  h-auto flex items-center flex-col relative justify-center lg:justify-center md:justify-start ">
            <div className=" font-medium text-lg text-blue-500 dark:text-white">{quotes}</div>
            <Suspense fallback={<CgSpinner />}>
              <Image
                src={image}
                alt={`about image pictures of ` + `${alt}`}
                className=" object-contain h-[350px] w-auto"
              />
            </Suspense>
            <div
              className={`${showBanner} absolute top-3 left-[6rem] sm:left-[7rem] md:left-[14rem] lg:left-[10rem] bg-blue-600 shadow-lg flex items-center justify-center rounded-full h-[70px] w-[70px] `}
            >
              <Heading
                style={
                  " text-white uppercase rotate-[-45deg] font-semibold text-2xl"
                }
              >
                new
              </Heading>
            </div>
          </div>
        </>
      )}
    </>
  );
}
