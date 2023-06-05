"use client";
import LandingPage from "./components/landingPage";
import Description from "./components/description";
import CardWrapper from "./components/cardWrapper";

import { useSelector } from "react-redux";

export default function Home() {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <main className="bg-white px-10 pb-4 dark:bg-gray-900 md:px-20 lg:px-40">
      <div className={darkMode ? "dark" : ""}>
        <LandingPage />
        <Description />
        <CardWrapper />
      </div>
    </main>
  );
}
