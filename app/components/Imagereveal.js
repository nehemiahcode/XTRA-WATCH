"use client";
import { useEffect, useState, Suspense } from "react";
import Heading from "./Heading";
import { CgSpinner } from "react-icons/cg";
import Image from "next/image";

export function ImageReveal({ image, showBanner, alt }) {
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
        <div className={" w-full h-[250px] flex animate-spin text-2xl items-center justify-center"}>
          <CgSpinner />
        </div>
      ) : (
        <>
          <div className="  h-auto flex items-center relative justify-center lg:justify-center md:justify-start ">
            <Suspense fallback={<CgSpinner />}>
              <Image
                src={image}
                alt={`about image pictures` + `${alt}`}
                className=" object-contain h-[350px] w-auto"
              />
            </Suspense>
            <div
              className={`${showBanner} absolute top-3 left-[5rem] sm:left-[7rem] bg-blue-600 shadow-lg flex items-center justify-center rounded-full h-[70px] w-[70px] `}
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
