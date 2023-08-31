import Link from "next/link";
import { PiWatchFill } from "react-icons/pi";

export default function Logo() {
  return (
    <Link prefetch={false} href="/">
      <div className=" flex items-center gap-1">
        <span className="text-5xl text-black dark:text-white">
          <PiWatchFill />
        </span>
        <span className=" text-black dark:text-white text-lg lg:text-2xl font-medium">
          XTRA <span className="  text-base lg:text-xl font-normal">Watch</span>
        </span>
      </div>
    </Link>
  );
}
