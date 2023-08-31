"use client";

import { LiaAngleUpSolid } from "react-icons/lia";
import { useState, useEffect } from "react";
import Ripples from "react-ripples";

function ScrollToTop() {
  const [visibleButton, setVisibleButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, []);

  const handleScrollTop = () => {
    const scrollToTop = window.pageYOffset;
    const scrollThresholdButton = 400;
    setVisibleButton(scrollToTop <= scrollThresholdButton);
  };
  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Ripples>
      <button
        onClick={ScrollToTop}
        className={`h-[50px]  w-[50px] ${
          visibleButton ? "hidden" : "flex"
        } z-[999]  p-1  flex justify-center cursor-default md:cursor-pointer items-center active:hover:scale-110 rounded-full bg-blue-600 text-white  text-3xl  fixed lg:bottom-[50px] bottom-[90px] right-[20px]`}
      >
        <LiaAngleUpSolid />
      </button>
    </Ripples>
  );
}
export default ScrollToTop;
