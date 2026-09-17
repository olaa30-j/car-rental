import { faqContent } from "../../../data/faqContent";
import FaqAccordion from "./FaqAccordion";

const FaqSection = () => {
  const { heading, items } = faqContent;

  return (
    <section className="container">
      {/* Heading */}
      <h2 className="text-center tracking-tight mb-12 lg:mb-16">
        {heading}
      </h2>

      {/* Accordion */}
      <FaqAccordion
        items={items}
        defaultOpenId={1}
        className="max-w-5xl mx-auto"
      />
    </section>
  );
};

export default FaqSection;