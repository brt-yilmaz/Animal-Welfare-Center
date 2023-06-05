import React from "react";
import Image from "next/image";

const Card = ({ imageSrc, altText, title, description, highlights }) => {
  return (
    <div className="text-center lg:basis-80 lg:grow shadow-lg p-10 rounded-xl my-10 dark:bg-gray-400 dark:shadow-slate-500 dark:shadow-md ">
      <div>
        <Image
          src={imageSrc}
          alt={altText}
          className="mx-auto"
          width={100}
          height={100}
        />
      </div>
      <h3 className="text-lg font-medium pt-8 pb-2">{title}</h3>
      <p className="py-2 max-w-sm mx-auto">{description}</p>
      <h4 className="py-4 text-teal-600 dark:text-teal-300 font-medium">
        Highlights
      </h4>
      {highlights.map((highlight, index) => (
        <p key={index} className="text-gray-900 py-1">
          {highlight}
        </p>
      ))}
    </div>
  );
};

export default Card;
