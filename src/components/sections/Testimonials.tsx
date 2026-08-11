import Container from "../ui/Container";
import { testimonialData,logos} from "@/data/testimonial";


const Testimonials = () => {
  return (
    <section className="py-10">
      <Container className="bg-[#F5F7FA] py-8">
        {/* Render each testimonial */}
        {testimonialData.map((testimonial) => (
          <div
            key={testimonial.image}
            className="flex flex-col gap-8 md:flex-row md:gap-12 lg:gap-19.5 "
          >
            {/* Testimonial person's image */}
            <div className="shrink-0">
              <img
                className="mx-auto h-64 w-64 object-cover sm:h-72 sm:w-72 md:h-81.5 md:w-81.5 rounded-lg"
                src={testimonial.image}
                alt={testimonial.author}
              />
            </div>

            {/* Testimonial content */}
            <div className="flex flex-col justify-center">
              {/* Testimonial description */}
              <p className="text-[#000000]!">
                {testimonial.decription}
              </p>

              {/* Author information */}
              <div className="gap-2 pt-4 pb-10">
                <h5 className="text-[20px] font-semibold text-[#4CAF4F]!">
                  {testimonial.author}
                </h5>

                <p>{testimonial.association}</p>
              </div>

              {/* Client logos */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-10.25">
                {logos.map((logo) => (
                  <img
                    key={logo.logo}
                    className="h-10 w-10 object-contain sm:h-12 sm:w-12"
                    src={logo.logo}
                    alt="Testimonial logo"
                    />
                ))}
                <div className="flex items-center gap-2"> <span className="text-[#4CAF4F] text-[20px] font-semibold">Meet all customers</span><img src="/Right.png" alt="" /></div>

              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Testimonials;