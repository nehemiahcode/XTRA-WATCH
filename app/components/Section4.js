"use client";
import MyImage1 from "@/public/black-watch.png";
import MyImage2 from "@/public/brown-watch.png";
import MyImage3 from "@/public/watch-4.png";
import MyImage4 from "@/public/watch-gray.png";
import Image from "next/image";
import { AiFillStar, AiOutlineEye } from "react-icons/ai";
import Ripples from "react-ripples";
import Heading from "./Heading";
import Typography from "./Typography";
// import Link from "next/link";
import Modal from "./Modal";
import { useState, useEffect } from "react";

export default function Section4() {
  const [activemodal, setActiveModal] = useState(false);
  const Cards = [
    {
      url: "",
      title: "Chrome watch",
      amount: "$399.00",
      image: MyImage1,
    },
    {
      url: "",
      title: "Classic Watch",
      amount: "$299.00",
      image: MyImage2,
    },
    {
      url: "",
      title: "Siver watch",
      amount: "$699.00",
      image: MyImage3,
    },
    {
      url: "",
      title: "Colored watch",
      amount: "$599.00",
      image: MyImage4,
    },
  ];
  const Stars = [1, 2, 3, 4, 5];

  const handleShowModal = () => {
    setActiveModal(!activemodal);
  };

  //remove or hide the modal after 5 seconds of displaying it..
  useEffect(() => {
    if (activemodal) {
      const Timer = setTimeout(() => {
        setActiveModal(false);
      }, 5000);
      return () => clearTimeout(Timer);
    }
  }, [activemodal]);

  return (
    <section className=" py-10 w-full h-auto">
      {activemodal ? <Modal show={() => setActiveModal(false)} /> : ""}

      <Heading style={" text-4xl text-center font-bold"}>
        {" "}
        <span className=" text-blue-500 font-semibold text-4xl pr-2">
          Pear-Watch
        </span>{" "}
        Products{" "}
      </Heading>
      <Typography
        style={
          " text-center font-medium lg:w-[60%] px-5 lg:mx-auto py-2 text-md"
        }
      >
        A smartwatch is a wearable computer in the form of a watch; modern
        smartwatches provide a local touchscreen interface for daily use.
      </Typography>
      <section className=" w-full lg:px-16  h-auto grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-7 lg:gap-5 py-10">
        {Cards.map((card, index) => (
          <div
            key={index}
            className=" bg-white dark:bg-slate-700 w-[90%] sm:w-[80%] md:w-[90%] mx-auto lg:w-[100%] rounded-md h-[380px] flex flex-col items-center shadow-xl py-2"
          >
            <div className=" rounded-full flex items-center justify-center w-[200px] h-[200px] lg:h-[170px] lg:w-[170px] p-2 bg-[rgba(0,0,0,0.3)]">
              <Image
                src={card.image}
                alt="watch image"
                className=" w-auto object-contain h-auto"
              />
            </div>
            <Heading style={" text-blue-500 py-2 font-medium text-lg"}>
              {card.title}
            </Heading>
            <span className=" flex items-center  text-yellow-500">
              {Stars.map((star) => (
                <AiFillStar key={star} />
              ))}
            </span>
            <Typography style={" font-medium py-2 "}>{card.amount}</Typography>
            {/* <Link href={`../about/${card.id}`} prefetch={false}> */}
            <Ripples onClick={handleShowModal} className="rounded-full my-3 ">
              <button
                type="button"
                className=" bg-blue-600 w-full cursor-default md:cursor-pointer font-bold flex items-center gap-2 rounded-full px-4 py-2 text-white"
              >
                <span className=" text-2xl">
                  {" "}
                  <AiOutlineEye />
                </span>
                Quick view
              </button>
            </Ripples>
            {/* </Link> */}
          </div>
        ))}
      </section>
    </section>
  );
}
