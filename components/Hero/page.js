import React from "react";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
// @ts-ignore
import hero from "@assets/images/hero.png";

const Hero = () => {
  return (
    <div className=" px-24 py-20 min-h-screen w-full flex justify-between">
      <div className="flex flex-col gap-8 py-16">
        <div className="flex flex-col gap-2">
          <h1 className="text-[5rem] font-bold text-green-500">Namaskar</h1>
          <h2 className="text-[2.5rem] font-semibold text-black">
            Welcome to Hotel{" "}
            <span className=" font-bold">
              Go<span className="text-green-500">Green</span>
            </span>
          </h2>

          <span className="text-2xl capitalize text-green-500 font-style: italic  ">
            "Explore Nature with us"
          </span>
          <span className="text-md text-black ">
            We are here to provide you top qualily services on affordable price
          </span>
        </div>
        <button className="button hero-button">Make Reservations</button>
      </div>
      <div className="flex flex-col justify-between items-end">
        <Image src={hero} alt="hero" width={450} />
        <div className="hero-right">
          <div className="flex gap-20 text-2xl text-green-500">
            <a href="/" className="icons text-2xl">
              <FaInstagram />
            </a>

            <a href="/" className="icons">
              <FaFacebook />
            </a>

            <a href="/" className="icons">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
