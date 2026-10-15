export type Review = {
  quote: string;
  name: string;
  /** Who travelled, e.g. "Couple". */
  party: string;
  /** Where the guest travelled from. */
  from: string;
};

// Guest reviews as published on amaltasvilla.com ("Stories From The Stay").
export const AMALTAS_REVIEWS: Review[] = [
  {
    quote: "Small, quiet, and looked after. The staff arranged our safari and the bonfire evening was the highlight of the trip.",
    name: "Priyanka & Arjun",
    party: "Couple",
    from: "Delhi",
  },
  {
    quote: "An unforgettable forest getaway! The rooms frame the jungle beautifully, and the food feels like home.",
    name: "Rohan & Family",
    party: "Family",
    from: "Chandigarh",
  },
  {
    quote: "Peaceful atmosphere, warm hospitality, and perfect location near Dhela gate. Highly recommended!",
    name: "Vikram & Friends",
    party: "Group",
    from: "Gurugram",
  },
  {
    quote: "The attention to detail, tranquil surroundings, and personalized hospitality made our holiday truly special.",
    name: "Ananya & Kabir",
    party: "Couple",
    from: "Noida",
  },
  {
    quote: "Delicious authentic Kumaoni meals and peaceful morning walks in nature right by our villa. A hidden gem!",
    name: "Meera & Rajesh",
    party: "Family",
    from: "Jaipur",
  },
  {
    quote: "Exceptional service, immaculate rooms, and great proximity to Jim Corbett safari zones. We will definitely return.",
    name: "Siddharth & Friends",
    party: "Group",
    from: "Mumbai",
  },
];

export const AMALTAS_RATING = { score: "5.0", source: "MakeMyTrip" } as const;
