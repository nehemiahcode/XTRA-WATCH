import Heading from "./Heading";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import Link from "next/link";

export default function Contact2() {
  const Card = [
    {
      tag: "Email",
      icon: <IoMdMail />,
      info: "codehubby@gmail.com",
      url: "mailto:codehubby@gmail.com",
    },
    {
      tag: "Phone",
      icon: <FaPhone />,
      info: "+234 819 573 7649",
      url: "callto:+234 819 573 7649",
    },
    {
      tag: "Address",
      icon: <FaAddressBook />,
      info: "Phase 3 gwagwalada Abuja - Nigeria",
      url: "#javascript(void)",
    },
  ];
  return (
    <section className=" flex items-center flex-col justify-center">
      <Heading
        style={" font-bold text-3xl text-black text-center dark:text-white"}
      >
        Get in touch{" "}
        <span className=" text-blue-600 font-bold text-3xl">with us</span>
      </Heading>
      <div className=" w-full px-4 my-3 lg:px-10 xl:px-16 lg:gap-3 grid gap-3 grid-cols-1 md:grid-cols-3  lg:grid-cols-3">
        {Card.map((card, id) => (
          <div
            key={id}
            className=" w-[90%]  sm:w-[70%] md:w-[100%] lg:w-[100%] text-center mx-auto h-[165px] bg-white dark:bg-slate-600 relative rounded-md shadow-md"
          >
            <Heading style={" font-semibold text-2xl pt-10 text-black"}>
              {card.tag}
            </Heading>
            <span className=" text-gray-800 dark:text-white font-normal">
              {card.info}
            </span>
            <Link href={card.url} prefetch={false}>
              <div className=" absolute z-[99] top-[-9px]  left-[45%] bg-blue-600 text-white rounded-full h-[50px] shadow-xl w-[50px] flex items-center justify-center">
                {card.icon}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
