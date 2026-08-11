import { achievements } from "@/data/achievements";
import React from "react";

const Achievements = () => {
  return (
    // Main achievements section
    <section className="flex flex-col items-center gap-10 py-16 md:flex-row">

      {/* Left side - heading and description */}
      <div className="w-full md:w-1/2">
        <h2 className="text-[28px] font-semibold leading-tight sm:text-[32px] lg:text-[36px]">
          Helping a local <br />
          <span className="text-[#4CAF4F]">
            business reinvent itself
          </span>
        </h2>

        {/* Short description */}
        <p className="text-[#18191F]">
          We reached here with our hard work and dedication
        </p>
      </div>

      {/* Right side - achievements grid */}
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:w-1/2 md:gap-7.5">

        {/* Render each achievement */}
        {achievements.map((a) => (
          <div
            key={a.image}
            className="flex items-center gap-4"
          >

            {/* Achievement icon */}
            <img
              className="h-12 w-12 shrink-0"
              src={a.image}
              alt=""
            />

            {/* Achievement number and label */}
            <div className="flex flex-col">
              <h2 className=" text-[22px] lg:text-[28px] font-bold">
                {a.number}
              </h2>

              <p>{a.label}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;