"use client";
import Avatar1 from "@/public/auth-01.png";
import Avatar2 from "@/public/auth-02.png";
import Avatar3 from "@/public/auth-03.png";
import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { GrNext, GrPrevious } from "react-icons/gr";
import Ripples from "react-ripples";
import ReactSwipe from "react-swipe";
import Heading from "./Heading";
import Typography from "./Typography";

export default function Testimonial() {
  const Testimonial = [
    { name: "John", image: Avatar1 },
    { name: "Peter", image: Avatar2 },
    { name: "Sam", image: Avatar3 },
  ];
  let reactSwipeEl;
  return (
    <section className=" py-10 w-full px-4 md:px-10 lg:px-16">
      <Heading style=" text-center text-black dark:text-white text-4xl font-bold ">
        Join our{" "}
        <span className=" text-blue-500 text-4xl font-bold ">
          {" "}
          happy customers
        </span>
      </Heading>
      <Typography
        style={
          " text-center  text-md fone-medium py-2 text-gray-800 dark:text-white"
        }
      >
        You can trust our watches and the quality and professionalism of our
        products.
      </Typography>
      <div className="bg-white dark:bg-slate-900 rounded-md mx-auto shadow-lg w-[95%] xl:w-[40%] lg:w-[45%] md:w-[70%] sm:w-[80%]">
        <ReactSwipe
          className="carousel"
          swipeOptions={{ continuous: false }}
          ref={(el) => (reactSwipeEl = el)}
        >
          {Testimonial.map((items, index) => (
            <div
              key={index}
              className=" flex flex-col  relative bg-white px-4  py-6 dark:bg-slate-900 rounded-md shadow-lg w-[95%] xl:w-[40%] lg:w-[45%] md:w-[70%] sm:w-[80%]"
            >
              <blockquote className="text-center  text-md fone-medium py-3 text-gray-800 dark:text-white">
              &quot;I don&apos;t always clop, but when I do, it&apos;s because of pear watch.
                Pear watch has really helped me. I STRONGLY recommend pear watch
                to EVERYONE interested in fashion &amp; tech! This is simply
                unbelievable!&quot;
              </blockquote>
              <span className=" text-sky-500 rounded p-1 active:scale-110 text-xl absolute top-1 right-3">
                <BsTwitter />
              </span>
              <div className="flex items-center justify-center gap-3">
                <Image
                  src={items.image}
                  alt={"customers image"}
                  className=" rounded-full h-[50px] w-[50px]  border-2"
                />
                <Heading style={" font-semibold"}>{items.name}</Heading>
              </div>
            </div>
          ))}
        </ReactSwipe>
      </div>
      <div className=" w-full flex items-center my-2 justify-center gap-5">
        <Ripples className=" rounded-full active:scale-110">
          <button
            onClick={() => reactSwipeEl.prev()}
            className=" text-lg text-white flex items-center active:scale-110 cursor-default md:cursor-pointer justify-center bg-blue-600 rounded-full p-3 h-[40px] w-[40px]"
            type="button"
          >
            <GrPrevious />
          </button>
        </Ripples>
        <Ripples className=" rounded-full active:scale-110">
          <button
            onClick={() => reactSwipeEl.next()}
            className={` text-lg text-white flex items-center  cursor-default md:cursor-pointer justify-center bg-blue-600 rounded-full p-3 h-[40px] w-[40px]`}
            type="button"
          >
            <GrNext />
          </button>
        </Ripples>
      </div>
    </section>
  );
}
