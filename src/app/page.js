import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import Image from "next/image";
import cat from "../../public/images/image.png";

export default function Home() {
  return (
    <div>
      <main className="bg-white px-10 ">
        <section className="h-screen">
          <nav className="py-6 mb-2 flex justify-between ">
            <h1 className="text-2xl font-medium">Pawsome</h1>
            <ul>
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
            </ul>
          </nav>
          <div className="text-center p-6 pt-1 ">
            <h2 className="text-3xl py-1 text-teal-600 font-medium">
              Happy Havens
            </h2>
            <h3 className="text-xl py-2">Careful Care and Protection</h3>
            <p className="text-md pt-5 leading-8 text-gray-800">
              We provide fair, compassionate, and comprehensive care .
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-10 py-1 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillYoutube />
            <AiFillInstagram />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 pl-12 pt-10 mt-6 ">
            <Image src={cat} />
          </div>
        </section>
      </main>
    </div>
  );
}
