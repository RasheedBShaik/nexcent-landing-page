import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { articles } from "@/data/articles";
import Achievements from "./Achievements";

const ArticleCard = () => {
  return (
    <section>
      {/* First article */}
      <Container>
        <div>
          <div className="flex flex-col py-12 md:flex-row">
            <img
              src={articles[0].image}
              alt={articles[0].heading}
            />

            <div className="max-w-150.25">
              <h2 className="text-[28px] font-semibold leading-tight sm:text-[32px] lg:text-[36px]">
                {articles[0].heading}
              </h2>

              <p className="pt-4 pb-8 text-sm leading-6 text-gray-600">
                {articles[0].description}
              </p>

              <Button href="/learn-more">Learn More</Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Achievements */}
      <Container className="bg-[#F5F7FA]">
      <Achievements />
      </Container>

      {/* second articles */}
      <Container>
        {articles.slice(1).map((article) => (
          <div key={article.heading}>
            <div className="flex flex-col py-12 md:flex-row">
              <img
                src={article.image}
                alt={article.heading}
              />

              <div className="max-w-150.25">
                <h2 className="text-[28px] font-semibold leading-tight sm:text-[32px] lg:text-[36px]">
                  {article.heading}
                </h2>

                <p className="pt-4 pb-8 text-sm leading-6 text-gray-600">
                  {article.description}
                </p>

                <Button href="/learn-more">Learn More</Button>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default ArticleCard;