import Container from "../ui/Container";
import { clientData } from "@/data/clients";

const Clients = () => {
  return (
    <section className="text-center py-10">
      <Container>

        {/* Section heading */}
        <h2 className="text-[36px] font-semibold">Clients</h2>

        {/* Section description */}
        <p className="pb-4">
          We have been working with some Fortune 500+ clients
        </p>

        {/* Responsive grid for client logos */}
        <div className="grid grid-cols-4 gap-6 md:grid-cols-5 lg:grid-cols-7">

          {/* Render each client logo from clientData */}
          {clientData.map((img) => {
            return (
              <div
                key={img.image}
                className="flex h-20 items-center justify-center"
              >
                {/* Client logo */}
                <img
                  className="h-12 w-12 object-contain"
                  src={img.image}
                  alt="Client logo"
                />
              </div>
            );
          })}

        </div>
      </Container>
    </section>
  );
};

export default Clients;