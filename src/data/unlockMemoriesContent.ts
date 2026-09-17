import unlockMemoriesImage from "../assets/about/Img.png";
import type { NumberedItemData } from "../components/home/sec_two/NumberedList";

/* =========================================================
   Types
========================================================= */
export interface UnlockMemoriesContent {
    heading: string;
    subtext: string;
    image: string;
    imageAlt: string;
    items: NumberedItemData[];
}

/* =========================================================
   Content
========================================================= */
export const unlockMemoriesContent: UnlockMemoriesContent = {
    heading: "Unlock unforgettable memories on the road",
    subtext:
        "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper",
    image: unlockMemoriesImage,
    imageAlt: "Blurred abstract background of a road trip memory",
    items: [
        {
            id: 1,
            description: "Velit semper morbi. Purus non eu cursus porttitor tristique et gravida...",
        },
        {
            id: 2,
            description: "Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum",
        },
        {
            id: 3,
            description: "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor",
        },
        {
            id: 4,
            description: "Quis nunc interdum gravida ullamcorper",
        },
    ],
};