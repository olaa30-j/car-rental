import type { NumberedItemData } from "../components/home/sec_two/NumberedList";
import sectionTwoImage from "../assets/home/sec_two/image.png";

/* =========================================================
   Types
========================================================= */
export interface SectionTwoContent {
  image: string;
  imageAlt: string;
  items: NumberedItemData[];
}

/* =========================================================
   Content
========================================================= */
export const sectionTwoContent: SectionTwoContent = {
  image: sectionTwoImage,
  imageAlt: "Section Two",
  items: [
    {
      id: 1,
      title: "Erat at semper",
      description:
        "Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum...",
    },
    {
      id: 2,
      title: "Urna nec vivamus risus duis arcu",
      description:
        "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper",
    },
    {
      id: 3,
      title: "Lobortis euismod imperdiet tempus",
      description:
        "Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi",
    },
    {
      id: 4,
      title: "Cras nulla aliquet nam eleifend amet et",
      description:
        "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero",
    },
  ],
};