import Link from "next/link";

export default function Icons({ location, position, icons, iconName }) {
  return (
    <div
      className={` z-[9999] ${position} flex gap-2 items-center justify-end  px-5`}
    >
      <span className=" text-white text-sm">{iconName}</span>
      <Link href={` ${location}`} prefetch={false}>
        <span className=" dark:bg-slate-800 text-xl my-2 bg-white rounded-full h-[40px] w-[40px] flex items-center justify-center shadow-md">
          {icons}
        </span>
      </Link>
    </div>
  );
}
