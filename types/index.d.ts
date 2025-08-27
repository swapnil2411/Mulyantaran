
  interface Feature {
    text: string;
    included: boolean;
  }

  interface PricingPlan {
    name: string;
    price: number;
    features: Feature[];
    isHighlighted?: boolean;
  }