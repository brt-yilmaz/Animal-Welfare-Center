import React from "react";

export default function Description() {
  return (
    <section>
      <h3 className="text-2xl py-1 dark:text-white"> Changing Animal Lives</h3>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        We are dedicated to providing{" "}
        <span className="text-teal-500">compassionate care</span>, safe shelter
        provision for animals in need and effective{" "}
        <span className="text-teal-500">rehabilitation</span>.
      </p>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        Animal welfare center offers adoption and wildlife conservation
        services, prioritizing well-being and natural habitat preservation.
      </p>
    </section>
  );
}
