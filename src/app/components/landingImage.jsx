import React from "react";
import Image from "next/image";
import cat from "../../../public/images/image.png";

export default function LandingImage() {
  return (
    <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 pl-12 pt-10 mt-6 mb-12 md:h-96 md:w-96">
      <Image src={cat} alt="cat" />
    </div>
  );
}
