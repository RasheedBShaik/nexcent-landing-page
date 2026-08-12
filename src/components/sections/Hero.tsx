import Container from "@/components/ui/Container";
import { heroData } from "@/data/hero";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="bg-[#F5F7FA]">
      <Container className="flex flex-col items-center">
        <div className="flex w-full flex-col items-center gap-12 py-4 sm:py-16 md:py-20 lg:flex-row lg:justify-between lg:gap-16 lg:py-24 ">
          {/* Content */}
          <div className="w-full max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl font-semibold leading-12 md:leading-19 text-[#4D4D4D] sm:text-5xl lg:text-[64px]">
              {heroData.title.first}{" "}
              <span className="text-[#4CAF4F]">
                {heroData.title.highlight}
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-[#717171] sm:mt-6 lg:mx-0">
              {heroData.description}
            </p>

            <Button className="mt-8" href="/register">Register</Button>

          </div>

          {/* Illustration */}
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-100">
            <img
              src={heroData.image}
              alt={heroData.title.first}
              className="h-101.75 w-full"
            />
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="flex items-center justify-center gap-2 pb-4">
          {heroData.indicators.map((indicator, index) => (
            <button
              key={indicator}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full ${
                index === 0 ? "bg-[#4CAF4F]" : "bg-[#C4C4C4]"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}