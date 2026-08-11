import { communityData } from "@/data/community";
import Container from "../ui/Container";

const Community = () => {
  return (
    <section className="py-10 text-center">
      <Container>
        {/* Main section heading */}
        <h2 className="text-[28px] font-semibold leading-tight sm:text-[32px] lg:text-[36px]">
          Manage your entire community in a single system
        </h2>

        {/* Section subtitle */}
        <p className="pb-10 pt-2">
          Who is Nextcent suitable for?
        </p>

        {/* Responsive grid: 1 column → 2 columns → 3 columns */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-24">
          {communityData.map((card) => (
            <div
              key={card.image}
              className="flex flex-col items-center rounded-lg bg-white p-6 shadow-[0px_2px_4px_0px_#ABBED133]"
            >
              {/* Community icon */}
              <div className="flex h-16 items-center justify-center">
                <img
                  src={card.image}
                  alt={card.heading}
                  className="max-h-full w-auto object-contain"
                />
              </div>

              {/* Card heading */}
              <h2 className="w-50 pt-4 pb-2 text-2xl font-bold leading-tight">
                {card.heading}
              </h2>

              {/* Card description */}
              <p className="max-w-xs text-sm leading-6 text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Community;