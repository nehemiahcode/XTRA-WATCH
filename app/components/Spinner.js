import { ImSpinner10 } from "react-icons/im";

export default function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <span className=" text-4xl animate-spin text-black">
        <ImSpinner10 />
      </span>
    </div>
  );
}
