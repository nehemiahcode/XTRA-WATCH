"use client";
import Image1 from "@/public/watch-1.png";
import Image2 from "@/public/watch-2.png";
import Image3 from "@/public/watch-5.png";
import Image5 from "@/public/watch-4.png";
import Image4 from "@/public/custom-watch.png";
import Image from "next/image";
import { Suspense } from "react";
import Fade from "react-awesome-reveal";
import { GrNext, GrPrevious } from "react-icons/gr";
import Ripples from "react-ripples";
import ReactSwipe from "react-swipe";
import Heading from "./Heading";
import Spinner from "./Spinner";
import Typography from "./Typography";
export default function Section1() {
  const Images = [
    { alt: "dark wrist watch image.", image: Image1 },
    {
      alt: "two diffrent wrist watch with two different colors.",
      image: Image2,
    },
    { alt: "Watch image picture", image: Image3 },
    { alt: "Watch image picture", image: Image4 },
    { alt: "Watch image picture", image: Image5 },
  ];
  let reactSwipeEl;
  return (
    <>
      <section className="  grid grid-cols-1 lg:grid-cols-2 w-full py-10 h-auto px-2 lg:px-10 xl:px-12">
        <div className=" h-auto lg:text-left text-center w-[100%]">
          <Heading style={" text-4xl font-normal py-3 lg:py-5"}>
            Skip the impossile
          </Heading>
          <Heading
            style={" text-2xl lg:text-5xl  py-3 font-medium lg:py-4 py-2"}
          >
            Extraordinery
          </Heading>
          <Heading style={" text-3xl lg:text-7xl   py-3  font-bold lg:py-4 "}>
            Performance
          </Heading>
          <Ripples className=" my-4 rounded-full">
            <button
              type="button"
              className=" cursor-default md:cursor-pointer rounded-full bg-blue-600 px-4 py-3 text-center text-white font-medium w-[140px]"
            >
              More
            </button>
          </Ripples>
        </div>

        <div className=" w-full flex flex-col h-auto items-center lg:p-0 py-5 justify-center">
          <Suspense fallback={<Spinner />}>
            <div className=" w-[100%] h-auto flex items-center justify-center">
              <ReactSwipe
                className="carousel"
                swipeOptions={{ continuous: true }}
                ref={(el) => (reactSwipeEl = el)}
              >
                {Images.map((image, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <Fade>
                      <Image
                        src={image.image}
                        alt={image.alt}
                        className=" object-contain mx-auto  h-auto lg:h-[440px] lg:w-[90%] sm:w-[80%] w-[90%]"
                      />
                    </Fade>
                  </div>
                ))}
              </ReactSwipe>
            </div>
          </Suspense>
          <div className=" flex gap-5">
            <button
              className="text-xl  active:scale-110 dark:text-white cursor-default md:cursor-pointer active:text-blue-600"
              onClick={() => reactSwipeEl.prev()}
            >
              <GrPrevious />
              <Typography style={"sr-only"}>back</Typography>
            </button>
            <button
              className="text-xl active:scale-110 cursor-default md:cursor-pointer active:text-blue-600"
              onClick={() => reactSwipeEl.next()}
            >
              <GrNext />
              <Typography style={"sr-only"}>next</Typography>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
