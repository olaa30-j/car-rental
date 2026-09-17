import { sectionTwoContent } from "../../../data/sectionTwo";
import NumberedList from "./NumberedList";

const SectionTwo = () => {
  const { image, imageAlt, items } = sectionTwoContent;

  return (
    <section className="container">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        
        {/* =====================================================
            Left — Image
        ===================================================== */}
        <div className="lg:w-full md:w-2/3 w-full mx-auto">
          <img
            src={image}
            alt={imageAlt}
            className="
              aspect-square w-full
              object-cover
            "
          />
        </div>

        {/* =====================================================
            Right — Numbered List
        ===================================================== */}
        <NumberedList items={items} className="lg:px-0 md:px-16 px-0 mx-auto"/>
      </div>
    </section>
  );
};

export default SectionTwo;