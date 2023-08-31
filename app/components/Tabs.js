"use client"
import { useState } from "react";
import Ripples from "react-ripples";

export default function Section3() {
  const tabItems = [
    "Overview",
    "Integration",
    "Billing",
    "Transactions",
    "Plans",
  ];

  const tabContent = [
    "Content for Overview tab",
    "Content for Integration tab",
    "Content for Billing tab",
    "Content for Transactions tab",
    "Content for Plans tab",
  ];

  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="px-4 md:px-8">
      <ul
        role="tablist"
        className="max-w-screen-xl mx-auto border-b flex items-center gap-x-3 overflow-x-auto text-sm"
      >
        {tabItems.map((item, idx) => (
          <li
            key={idx}
            className={`py-2 border-b-2 ${
              selectedItem === idx
                ? "border-indigo-600 text-indigo-600"
                : "border-none text-gray-500"
            }`}
          >
            <Ripples>
              <button
                role="tab"
                aria-selected={selectedItem === idx}
                aria-controls={`tabpanel-${idx + 1}`}
                className="py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
                onClick={() => setSelectedItem(idx)}
              >
                {item}
              </button>
            </Ripples>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        {/* Render the content associated with the active tab */}
        <div className={selectedItem === 0 ? "block" : "hidden"}>
          {tabContent[0]}
        </div>
        <div className={selectedItem === 1 ? "block" : "hidden"}>
          {tabContent[1]}
        </div>
        <div className={selectedItem === 2 ? "block" : "hidden"}>
          {tabContent[2]}
        </div>
        <div className={selectedItem === 3 ? "block" : "hidden"}>
          {tabContent[3]}
        </div>
        <div className={selectedItem === 4 ? "block" : "hidden"}>
          {tabContent[4]}
        </div>
      </div>
    </div>
  );
}
