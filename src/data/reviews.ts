/* =========================================================
   Import Icons
========================================================= */
import quoteIcon from "../assets/about/quote.png";

/* =========================================================
   Import Avatars
========================================================= */
import avatar1 from "../assets/about/avatars/avatar-1.png";
import avatar2 from "../assets/about/avatars/avatar-2.png";
import avatar3 from "../assets/about/avatars/avatar-3.png";

/* =========================================================
   Icon Map  
========================================================= */
const reviewIconMap: Record<string, string> = {
  quote: quoteIcon,
};

/* =========================================================
   Image Map  
========================================================= */
const reviewImageMap: Record<string, string> = {
  "avatar-1.png": avatar1,
  "avatar-2.png": avatar2,
  "avatar-3.png": avatar3,
};

/* =========================================================
   Types
========================================================= */
export interface Review {
  id: number;
  quoteIcon: string;
  text: string;
  avatar: string;
  company: string;
  name: string;
}

/* =========================================================
   Raw Data (from JSON)
========================================================= */
const rawReviews = [
  {
    id: 1,
    quoteIcon: "quote",
    text: "Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque",
    avatar: "avatar-1.png",
    company: "Kuphal LLC",
    name: "Emanuel Boyle",
  },
  {
    id: 2,
    quoteIcon: "quote",
    text: "Purus consectetur varius quis urna phasellus enim mattis. Sem tincidunt tortor nunc egestas amet adipiscing ligula",
    avatar: "avatar-2.png",
    company: "Glover - Orn",
    name: "River Graves",
  },
  {
    id: 3,
    quoteIcon: "quote",
    text: "Quam neque odio urna euismod felis. Sit egestas magna in quisque famesdapibus quis sapien magna. Nisl non eget sit pellentesque tristique et",
    avatar: "avatar-3.png",
    company: "Haag LLC",
    name: "Ryder Malone",
  },
  {
    id: 4,
    quoteIcon: "quote",
    text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec velit neque auctor sit amet aliquam vel",
    avatar: "avatar-1.png",
    company: "Kihn Group",
    name: "Sofia Bennett",
  },
  {
    id: 5,
    quoteIcon: "quote",
    text: "Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Nisl suscipit adipiscing bibendum est ultricies integer quis",
    avatar: "avatar-2.png",
    company: "Bode - Walsh",
    name: "Marcus Hayes",
  },
  {
    id: 6,
    quoteIcon: "quote",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula",
    avatar: "avatar-3.png",
    company: "Renner Inc",
    name: "Ava Sullivan",
  },
];

/* =========================================================
   Transform: string → actual paths (icons + avatars)
========================================================= */
export const reviews: Review[] = rawReviews.map((review) => ({
  ...review,
  quoteIcon: reviewIconMap[review.quoteIcon] ?? quoteIcon,
  avatar: reviewImageMap[review.avatar] ?? avatar1,
}));