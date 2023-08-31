"use client";
// import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Themeswitch from "./Themeswitch";
import Link from "next/link";

export default function Navbar() {
  // const [opennav, setOpenNav] = useState(false);
  // const MenuRef = useRef();
  // const IconRef = useRef();
  const pathname = usePathname();
  const isActive = pathname;

  // useEffect(() => {
  //   const handleNavbarClick = (event) => {
  //     if (
  //       MenuRef.current &&
  //       !MenuRef.current.contains(event.target) &&
  //       IconRef.current &&
  //       !IconRef.current.contains(event.target)
  //     ) {
  //       setOpenNav(false);
  //     }
  //   };
  //   window.addEventListener("click", handleNavbarClick);
  //   return () => {
  //     window.removeEventListener("click", handleNavbarClick);
  //   };
  // }, []);

  const Menuitems = [
    { list: "Home", url: "/" },
    { list: "About", url: "/about" }, // Adjust the URLs accordingly
    { list: "Store", url: "/store" },
    { list: "Contact", url: "/contact" },
  ];

  return (
    <div className="flex w-full flex-col justify-center items-center py-8">
      <header className="flex  justify-between lg:w-[70%] xl:w-[60%] 2xl:w-[70%]  w-[93%] rounded-full items-center dark:bg-slate-900 bg-white shadow-lg py-2 px-5">
        <Logo />
        <ul className="gap-4 hidden md:flex">
          {Menuitems.map((item, index) => (
            <li key={index} className={`link  py-2 px-2  rounded-md`}>
              <Link
                href={item.url}
                className={` ${
                  isActive === item.url
                    ? " text-white  bg-blue-700"
                    : " text-black dark:text-white"
                } py-2 px-2  hover:text-white  hover:bg-blue-500  rounded-md`}
                prefetch={false}
              >
                {item.list}
              </Link>
            </li>
          ))}
        </ul>
        <Themeswitch />
      </header>
      {/* <Search/> */}
    </div>
  );
}
