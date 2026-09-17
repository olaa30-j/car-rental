/* =========================================================
   Types
========================================================= */
export interface FaqItemData {
  id: number;
  question: string;
  answer: string;
}

export interface FaqContent {
  heading: string;
  items: FaqItemData[];
}

/* =========================================================
   Content
========================================================= */
export const faqContent: FaqContent = {
  heading: "Top Car Rental Questions",
  items: [
    {
      id: 1,
      question: "How does it works?",
      answer:
        "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut. Pellentesque id nibh sed nulla non nulla",
    },
    {
      id: 2,
      question: "Can I rent a car without a credit card?",
      answer:
        "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna.",
    },
    {
      id: 3,
      question: "What are the requirements for renting a car?",
      answer:
        "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum.",
    },
    {
      id: 4,
      question:
        "Does Car Rental allow me to tow with or attach a hitch to the rental vehicle?",
      answer:
        "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna.",
    },
    {
      id: 5,
      question:
        "Does Car Rental offer coverage products for purchase with my rental?",
      answer:
        "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna.",
    },
  ],
};