"use client";
import { FaHome } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import { BsCart3 } from "react-icons/bs";
import Ripples from "react-ripples";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();
  const router = useRouter();
  const active = pathname;
  const Navigation = [
    { icon: <FaHome />, text: "Home", url: "/" },
    { icon: <HiUsers />, text: "About", url: "/about" },
    { icon: <BsCart3 />, text: "Store", url: "/store" },
    { icon: <IoMdCall />, text: "Contact", url: "/contact", margin: true },
  ];
  return (
    <div
      className={
        " fixed z-[99999] flex items-center  justify-center md:hidden bottom-0 bg-white sm:left-[10%]  w-full sm:w-[80%] rounded-t-md sm:px-2   dark:bg-slate-900 shadow-2xl  px-1 "
      }
    >
      <div className="flex w-full justify-between items-center px-1 py-1">
        {Navigation.map((items, index) => (
          <div
            key={index}
            className=" group relative px-2 cursor-default md:cursor-pointer"
          >
            <Ripples className="relative  active:scale-110 ">
              <span
               onClick={() => router.push(items.url)}
                className={` ${
                  active === items.url
                    ? " text-blue-600 border-t-2 border-blue-600 dark:border-white"
                    : "text-black dark:text-white"
                } text-2xl duration-200 cursor-default md:cursor-pointer  group-hover:text-blue-700  flex flex-col gap-1 items-center  p-3  `}
              >
                {items.icon}
                <span
                  className={`  ${
                    active === items.url
                      ? " text-blue-600"
                      : "text-black dark:text-white"
                  }   font-normal group-hover:text-blue-600     text-sm`}
                >
                  {items.text}
                </span>
              </span>
            </Ripples>
            <span
              className={` absolute ${
                items.margin && " mr-1"
              } top-[-35px] invisible text-white dark:text-black  group-hover:visible left-[6px] z-[99] bg-[rgba(0,0,0,0.8)]  dark:bg-[rgba(255,255,255,0.9)] rounded px-3 text-sm py-1`}
            >
              {items.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
