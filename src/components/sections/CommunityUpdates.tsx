import React from "react";
import Container from "../ui/Container";
import { CommunityUpdatesData } from "@/data/communityUpdates";

const CommunityUpdates = () => {
  return (
    <section className="pb-20 text-center sm:pb-[174.6px]">
      <Container>
        {/* Section heading */}
        <h2 className="text-[28px] font-semibold sm:text-[32px] lg:text-[36px]">
          Caring is the new marketing
        </h2>

        {/* Section description */}
        <p className="mx-auto max-w-157 pt-2 pb-10 text-sm leading-6 sm:pb-14">
          The Nexcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the
          community, read about how our community are increasing their
          membership income and lot's more.
        </p>

        {/* Community update cards */}
        <div className="flex flex-col items-center gap-24 md:flex-row md:items-start md:justify-between md:gap-6">
          {CommunityUpdatesData.map((communityUpdates) => (
            <div
              key={communityUpdates.backgroundImage}
              className="relative w-full max-w-92"
            >
              {/* Blog image - same size for every card */}
              <img
                className="h-71.5 w-full object-cover"
                src={communityUpdates.backgroundImage}
                alt=""
              />

              {/* Text card overlapping the bottom of the image */}
              <div className="absolute rounded-lg max-w-79.25 max-h-44 left-1/2 -bottom-20 w-[90%] -translate-x-1/2 bg-[#F5F7FA] px-4 py-4 shadow-md">
                {/* Description */}
                <h5 className="text-[14px] font-semibold leading-7 xl:text-[20px]">
                  {communityUpdates.description}
                </h5>

                {/* Read more */}
                <div className="mt-3 flex items-center justify-center gap-2">
                  <span className="text-[18px] font-semibold text-[#4CAF4F] sm:text-[20px]">
                    Readmore
                  </span>

                  <img
                    src="/Right.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CommunityUpdates;