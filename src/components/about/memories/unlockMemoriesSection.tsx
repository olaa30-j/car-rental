import { unlockMemoriesContent } from "../../../data/unlockMemoriesContent";
import NumberedList from "../../home/sec_two/NumberedList";

const UnlockMemoriesSection = () => {
  const { heading, subtext, image, imageAlt, items } = unlockMemoriesContent;

  return (
    <section className="container">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

        {/* =====================================================
            Left — Heading, Subtext & Numbered List
        ===================================================== */}
        <div className="lg:px-0 md:px-16 px-0 mx-auto w-full lg:w-[55%]">
          <h2 className="leading-tight tracking-tight">
            {heading}
          </h2>

          <p className="mt-6 text-blur-text leading-relaxed">
            {subtext}
          </p>

          <NumberedList
            items={items}
            variant="check"
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6"
          />
        </div>

        {/* =====================================================
            Right — Image
        ===================================================== */}
        <div className="lg:w-[55%] md:w-2/3 w-full mx-auto">
          <img
            src={image}
            alt={imageAlt}
            className="
              aspect-square w-full
              object-cover
              rounded-2xl
            "
          />
        </div>
      </div>
    </section>
  );
};

export default UnlockMemoriesSection;