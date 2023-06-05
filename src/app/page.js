"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import Image from "next/image";
import cat from "../../public/images/image.png";
import dog from "../../public/images/dog.png";
import rabbit from "../../public/images/rabbit.png";
import elephant from "../../public/images/elephant.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 pb-4 dark:bg-gray-900 md:px-20 lg:px-40">
        <section>
          <nav className="py-6 mb-2 flex justify-between dark:text-white">
            <h1 className="text-2xl font-medium">Pawsome</h1>
            <ul>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
          <div className="text-center p-6 pt-1 ">
            <h2 className="text-4xl py-2 mb-2 text-teal-600 font-medium dark:text-teal-300 md:text-6xl">
              Happy Havens
            </h2>
            <h3 className="text-xl py-2 md:text-3xl dark:text-white">
              Care and Protection
            </h3>
            <p className="text-lg pt-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-xl mx-auto">
              We provide fair, compassionate, and comprehensive care.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-10 py-1 text-gray-600 dark:text-gray-400">
            <AiFillTwitterCircle />
            <AiFillYoutube />
            <AiFillInstagram />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 pl-12 pt-10 mt-6 mb-12 md:h-96 md:w-96">
            <Image src={cat} alt="cat" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-2xl py-1 dark:text-white">
              {" "}
              Changing Animal Lives
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              We are dedicated to providing{" "}
              <span className="text-teal-500">compassionate care</span>, safe
              shelter provision for animals in need and effective{" "}
              <span className="text-teal-500">rehabilitation</span>.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Animal welfare center offers adoption and wildlife conservation
              services, prioritizing well-being and natural habitat
              preservation.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-400 dark:shadow-slate-500 dark:shadow-md">
              <Image
                src={dog}
                alt="dog"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Bringing Joyful Moments
              </h3>
              <p className="py-2 max-w-prose">
                We create a nurturing environment where every animal experiences
                love, care, and happiness.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-teal-300 font-medium">
                Methods for Animal Happiness
              </h4>

              <p className="text-gray-900 py-1 ">Enrichment Programs</p>
              <p className="text-gray-900 py-1">Reinforcement Training</p>
              <p className="text-gray-900 py-1">Socialization Opportunities </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-400 dark:shadow-slate-500 dark:shadow-md">
              <Image
                src={rabbit}
                alt="dog"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Quality Nutrition and Care
              </h3>
              <p className="py-2">
                Ensuring optimal health and well-being through proper nutrition
                and attentive care.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-teal-300 font-medium">
                Training for Positive Behavior
              </h4>
              <p className="text-gray-900 py-1">Promoting education.</p>
              <p className="text-gray-900 py-1">Raising awareness.</p>
              <p className="text-gray-900 py-1">Building connections.</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-400 dark:shadow-slate-500 dark:shadow-md">
              <Image
                src={elephant}
                alt="dog"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Rescuing and Rehabilitating
              </h3>
              <p className="py-2">
                Saving and rehabilitating animals in need, giving them a second
                chance at life.
              </p>
              <h4 className="py-4 text-teal-600 font-medium dark:text-teal-300">
                Community Education and Outreach
              </h4>
              <p className="text-gray-900 py-1">Promoting awareness.</p>
              <p className="text-gray-900 py-1">Organizing events.</p>
              <p className="text-gray-900 py-1">Connecting with people.</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3></h3>
          </div>
        </section>
      </main>
    </div>
  );
}
