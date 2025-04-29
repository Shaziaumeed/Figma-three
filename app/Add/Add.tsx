"use client";
import { useState } from "react";
import { RiSubtractFill } from "react-icons/ri";
import { TiPlus } from "react-icons/ti";
export default function Add() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
        <h2 className="text-center font-bold text-5xl max-md:text-2xl">Frequently Asked Questions</h2>
    <div className="max-w-3xl mx-auto my-10 border  rounded shadow-md p-5">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold text-[#9B37AE]">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2>
        {isOpen ? (
          <RiSubtractFill className="w-5 h-5 text-gray-700" />
        ) : (
            <TiPlus  className="w-5 h-5 text-gray-700" />
        )}
      </div>
      {isOpen && (
        <p className="mt-3 text-gray-600 transition-all duration-300">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      )}
    </div>
    <div className="max-w-3xl mx-auto my-6 border rounded shadow-md p-5">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold text-[#9B37AE]">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2>
        {isOpen ? (
          <RiSubtractFill className="w-5 h-5 text-gray-700" />
        ) : (
            <TiPlus  className="w-5 h-5 text-gray-700" />
        )}
      </div>
      {isOpen && (
        <p className="mt-3 text-gray-600 transition-all duration-300">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      )}
    </div>
    <div className="max-w-3xl mx-auto my-6 border  rounded shadow-md p-5">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold text-[#9B37AE]">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2>
        {isOpen ? (
          <RiSubtractFill className="w-5 h-5 text-gray-700" />
        ) : (
            <TiPlus  className="w-5 h-5 text-gray-700" />
        )}
      </div>
      {isOpen && (
        <p className="mt-3 text-gray-600 transition-all duration-300">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      )}
    </div>
    </div>
  );
}
