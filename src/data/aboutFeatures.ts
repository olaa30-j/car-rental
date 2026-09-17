/* =========================================================
   Types
========================================================= */
export interface AboutFeature {
  id: number;
  title: string;
  description: string;
}

/* =========================================================
   Raw Data
========================================================= */
const rawFeatures: AboutFeature[] = [
  {
    id: 1,
    title: "Variety Brands",
    description:
      "Platea non auctor fermentum sollicitudin. Eget adipiscing augue sit quam natoque ornare cursus viverra odio",
  },
  {
    id: 2,
    title: "Maximum Freedom",
    description:
      "Diam quam gravida ultricies velit duis consequat integer. Est aliquam posuere vel rhoncus massa volutpat in",
  },
  {
    id: 3,
    title: "Awesome Suport",
    description:
      "Eget adipiscing augue sit quam natoque ornare cursus viverra odio. Diam quam gravida ultricies velit",
  },
  {
    id: 4,
    title: "Flexibility On The Go",
    description:
      "Vitae pretium nulla sed quam id nisl semper. Vel non in proin egestas dis.faucibus rhoncus. Iaculis dignissim aenean pellentesque nisl",
  },
];

/* =========================================================
   Exports
========================================================= */
export const aboutFeatures = rawFeatures;