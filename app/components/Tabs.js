"use client";
import { useState, useEffect } from "react";
import Ripples from "react-ripples";
import Heading from "./Heading";
import Typography from "./Typography";
import { useRouter } from "next/navigation";
import { ImageReveal } from "./Imagereveal";
import MyImage2 from "@/public/black-watch.png";
import MyImage3 from "@/public/brown-watch.png";
import MyImage5 from "@/public/pink-watch.png";
import MyImage1 from "@/public/watch-4.png";
import MyImage4 from "@/public/watch-gray.png";

export default function Tab() {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState(0);
  const tabItems = ["Overview", "Integration"];

  const tabContent = [
    "Content for Overview tab",
    "Content for Integration tab",
    "Content for Billing tab",
    "Content for Transactions tab",
    "Content for Plans tab",
  ];

  const Skeleton = [1, 2, 3, 4];

  return (
    <div className=" w-full flex flex-col items-center justify-center px-4 md:px-8">
      <Heading style={" font-bold text-black text-3xl py-1"}>
        {" "}
        Our <span className=" text-blue-600">Store</span>
      </Heading>
      <Typography
        style={" text-center text-[0.98rem] md:text-base font-medium leading-loose"}
      >
        Welcome to our store feel free to get in touch with us for something
        special
        <span
          onClick={() => router.push("/contact")}
          className=" cursor-default md:cursor-pointer text-blue-500 px-2 font-semibold text-base"
        >
          Contact us now
        </span>
      </Typography>
      <ul
        role="tablist"
        className="border-b flex items-center gap-x-3  text-sm"
      >
        {tabItems.map((item, idx) => (
          <li
            key={idx}
            className={`py-2 border-b-2 ${
              selectedItem === idx
                ? "border-indigo-600 dark:border-white text-indigo-600"
                : "border-none text-gray-500 dark:text-white"
            }`}
          >
            <Ripples>
              <button
                role="tab"
                aria-selected={selectedItem === idx}
                aria-controls={`tabpanel-${idx + 1}`}
                className="py-2.5 px-4 rounded-lg duration-150 cursor-default md:cursor-pointer hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
                onClick={() => setSelectedItem(idx)}
              >
                {item}
              </button>
            </Ripples>
          </li>
        ))}
      </ul>

      <div className="mt-4  w-[100%]  sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%]">
        {/* Render the content associated with the active tab */}

        <div
          className={
            selectedItem === 0 ? "block text-center   py-10 px-1  " : "hidden"
          }
        >
          <Heading style={" font-bold  text-3xl"}>
            Quality <span className=" text-blue-600">Watch</span>
          </Heading>
          <Typography  style={" text-center text-[0.98rem] md:text-base font-medium leading-loose"}>
            We sell all kind of quality watches that fits all your need.
          </Typography>
          <Typography  style={" text-center text-[0.98rem] md:text-base font-medium leading-loose"}>
            Use the numbered tabs bellow to see our awesome products
          </Typography>
          <Reveal />
        </div>

        <div className={selectedItem === 1 ? "block" : "hidden"}>
          <div className={` flex flex-col items-center`}>
            <div className=" py-4 w-[50%] bg-gray-600 rounded-md animate-pulse my-2"></div>
            <div className=" bg-gray-600 animate-pulse rounded-md py-2 my-1 w-[80%]"></div>
            <div className=" bg-gray-600 animate-pulse rounded-md py-2 my-1 w-[80%]"></div>
            <div className=" bg-gray-600 animate-pulse my-4 rounded-full h-[200px] w-[200px]"></div>
            <div className="flex items-center my-2 gap-3">
              {Skeleton.map((index) => (
                <div
                  key={index}
                  className=" rounded-full h-[40px] w-[40px] bg-gray-600 animate-pulse"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Reveal() {
  const [imageindex, setImageIndex] = useState("1");
  const navigate = [
    { number: 1, argument: "1" },
    { number: 2, argument: "2" },
    { number: 3, argument: "3" },
    { number: 4, argument: "4" },
    { number: 5, argument: "5" },
  ];
  return (
    <>
      <div className=" my-3">
        {imageindex === "1" && (
          <ImageReveal
            image={MyImage1}
            showBanner={" hidden"}
            alt={" Silver watch"}
            quotes={"Silver coloured watch"}
          />
        )}
        {imageindex === "2" && (
          <ImageReveal
            image={MyImage2}
            showBanner={" hidden"}
            alt={" Black watch"}
            quotes={"Black coloured watch"}
          />
        )}
        {imageindex === "3" && (
          <ImageReveal
            image={MyImage3}
            showBanner={" hidden"}
            alt={" Brown watch"}
            quotes={"Brown coloured watch"}
          />
        )}
        {imageindex === "4" && (
          <ImageReveal
            image={MyImage4}
            showBanner={" hidden"}
            alt={" White watch"}
            quotes={" White coloured watch "}
          />
        )}
        {imageindex === "5" && (
          <ImageReveal
            image={MyImage5}
            showBanner={" hidden"}
            alt={" Pink watch"}
            quotes={"Dark pink coloured watch"}
          />
        )}
        <div>
          {navigate.map((button, index) => (
            <Ripples key={index} className=" rounded-full mx-1">
              <button
                onClick={() => setImageIndex(button.argument)}
                type="button"
                className={` rounded-full active:scale-110 cursor-default md:cursor-pointer  ${
                  imageindex === `${button.argument}`
                    ? "bg-red-500 h-[33px] w-[33px]"
                    : "bg-blue-600 h-[36px] w-[36px]"
                }  text-white`}
              >
                {button.number}
              </button>
            </Ripples>
          ))}
        </div>
      </div>
    </>
  );
}
