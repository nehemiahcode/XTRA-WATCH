import myImage from "@/public/watch-3.jpg";
import Image from "next/image";
import { AiFillTags } from "react-icons/ai";
import { BsCalendarDateFill, BsSmartwatch } from "react-icons/bs";
import { ImLink } from "react-icons/im";
import { PiBatteryHighBold } from "react-icons/pi";
import { SiCloudways } from "react-icons/si";
import Heading from "./Heading";
import Typography from "./Typography";

export default function Section2() {
  const Details = [
    { icon: <SiCloudways />, heading: "Extraordinery Performance" },
    { icon: <PiBatteryHighBold />, heading: "Excellent battery life" },
    { icon: <ImLink />, heading: "Connectable  to android/iOS" },
  ];
  const Details2 = [
    { icon: <BsCalendarDateFill />, heading: "Shows time & date" },
    { icon: <AiFillTags />, heading: "Affordable price" },
    { icon: <BsSmartwatch />, heading: "Best Quality and design " },
  ];
  return (
    <section className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-full py-8 h-auto px-5 sm:px-10  lg:px-16">
      <div className=" w-[full] lg:p-0 pt-5 grid gap-3">
        {Details.map((detail, index) => (
          <div key={index} className="lg:text-right pr-5 ">
            <span className=" text-blue-600 flex lg:justify-end   text-5xl">
              {detail.icon}
            </span>
            <Heading style={" font-semibold text-xl"}>{detail.heading}</Heading>
            <Typography
              style={
                " text-md py-2  text-slate-800 dark:text-gray-300 font-medium"
              }
            >
              A smartwatch is a wearable computer in the form of a watch.
            </Typography>
          </div>
        ))}
      </div>

      <div className=" grid place-content-center place-items-center">
        <Image
          src={myImage}
          alt=" watch describing its part and abilities."
          className=" h-[auto] object-contain lg:w-auto sm:w-[80%] w-auto"
        />
      </div>
      <div className=" w-[full] md:ml-[60%] md:w-[100%] lg:m-0 lg:p-0 pt-5 grid gap-3">
        {Details2.map((detail, index) => (
          <div key={index} className=" p-0 lg:pl-5 ">
            <span className=" text-blue-600  text-4xl">{detail.icon}</span>
            <Heading style={" font-semibold text-xl"}>{detail.heading}</Heading>
            <Typography
              style={
                " text-md py-2 dark:text-gray-300  text-slate-800 font-medium"
              }
            >
              A smartwatch is a wearable computer in the form of a watch.
            </Typography>
          </div>
        ))}
      </div>
    </section>
  );
}
