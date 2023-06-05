import React from "react";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const socialIcons = [AiFillInstagram, AiFillYoutube, AiFillTwitterCircle];

export default function SocialIcons() {
  return (
    <div className="text-5xl flex justify-center gap-10 py-1 text-gray-600 dark:text-gray-400">
      {socialIcons.map((Icon, index) => (
        <Icon key={index} />
      ))}
    </div>
  );
}
