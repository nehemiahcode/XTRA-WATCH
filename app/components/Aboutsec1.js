"use client";
import MyImage2 from "@/public/black-watch.png";
import MyImage3 from "@/public/brown-watch.png";
import MyImage5 from "@/public/pink-watch.png";
import MyImage1 from "@/public/watch-4.png";
import MyImage4 from "@/public/watch-gray.png";
import { useState } from "react";
import Ripples from "react-ripples";
import Heading from "../components/Heading";
import Typography from "../components/Typography";
import { ImageReveal } from "./Imagereveal";

export default function Aboutsec1() {
  const [imageindex, setImageIndex] = useState("1");
  const navigate = [
    { number: 1, argument: "1" },
    { number: 2, argument: "2" },
    { number: 3, argument: "3" },
    { number: 4, argument: "4" },
    { number: 5, argument: "5" },
  ];
  return (
    <section className=" px-4 sm:px-10 md:px-10 lg:px-16">
      <div className=" grid grid-cols-1 py-4 gap-5 lg:gap-0 lg:grid-cols-2">
        <div>
          <Heading
            style={" text-4xl font-bold pb-3 text-black dark:text-white"}
          >
            Get to know us{" "}
            <span className=" text-blue-500 font-bold text-4xl">better</span>
          </Heading>
          <Typography
            style={
              " font-medium text-md  dark:text-white text-gray-800  leading-7  text-gray-700 "
            }
          >
            With over 27 years of experience, we have been providing exceptional
            watches services for all kinds, adults, children.. throughout the
            globe. If you &apos;re looking for any type of watch , wrist, digital.
            They are all available. We provide FREE estimates if you live in the
            local area for shipping. Call us today to get one from{" "}
            <strong>XTRA WATCH</strong>.
          </Typography>
        </div>
        <div>
          {imageindex === "1" && (
            <ImageReveal image={MyImage1} alt={"Silver watch"} />
          )}
          {imageindex === "2" && (
            <ImageReveal
              image={MyImage2}
              showBanner={" hidden"}
              alt={"Black watch"}
            />
          )}
          {imageindex === "3" && (
            <ImageReveal
              image={MyImage3}
              showBanner={" hidden"}
              alt={" Brown watch"}
            />
          )}
          {imageindex === "4" && (
            <ImageReveal
              image={MyImage4}
              showBanner={" hidden"}
              alt={" White watch"}
            />
          )}
          {imageindex === "5" && (
            <ImageReveal image={MyImage5} alt={" Pink watch"} />
          )}
          {navigate.map((button, index) => (
            <Ripples key={index} className=" rounded-full mx-1">
              <button
                onClick={() => setImageIndex(button.argument)}
                type="button"
                className={` rounded-full active:scale-110 cursor-default md:cursor-pointer h-[36px] w-[36px] ${
                  imageindex === `${button.argument}`
                    ? "bg-red-500"
                    : "bg-blue-600"
                }  text-white`}
              >
                {button.number}
              </button>
            </Ripples>
          ))}
        </div>
      </div>
    </section>
  );
}
