import myImage from "@/public/watch.webp";
import Image from "next/image";
import { BsDroplet } from "react-icons/bs";
import { GiBattery75 } from "react-icons/gi";
import Heading from "./Heading";
import Typography from "./Typography";
export default function Section3() {
  const Info = [
    { text: "", icon: <BsDroplet />, title: "Water proof" },
    { text: "", icon: <GiBattery75 />, title: "Battery life" },
  ];

  return (
    <section className="  w-full h-[auto]  flex items-center my-6 rounded-xl  justify-center">
      <div className=" relative flex items-center  h-[auto] lg:w-[70%] sm:w-[80%] w-[90%] rounded-xl  justify-center">
        <Image
          src={myImage}
          alt="a nice black watch image"
          className=" h-[500px] lg:h-[380px] object-cover w-[100%]"
        />
        <div className=" absolute text-center px-2  flex items-center rounded-xl bottom-0 top-0  h-[auto]  justify-center flex-col bg-[rgba(0,0,0,0.5)]  w-full">
          <Heading style=" text-4xl text-white py-3 uppercase font-bold">
            XTRA For you
          </Heading>
          <Typography style={"text-[0.98rem] md:text-base leading-loose md:leading-relaxed text-white py-2 font-normal"}>
            A smartwatch is a wearable computer in the form of a watch; modern
            smartwatches provide a local touchscreen interface for daily use,
            while an associated smartphone app provides for management and
            telemetry (such as long-term biomonitoring).
          </Typography>
          <div className=" my-2  grid grid-cols-2  gap-5">
            {Info.map((info, index) => (
              <div key={index} className=" flex flex-col gap-1 items-center">
                <div className=" flex items-center justify-center bg-white rounded-full h-[80px] w-[80px]">
                  <span className=" text-3xl text-black">{info.icon}</span>
                </div>
                <span className=" font-medium text-md text-white">
                  {info.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
