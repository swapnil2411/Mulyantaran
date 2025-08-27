export const traders = [
  {
    name: "Alexander Reynolds",
    role: "CEO & Founder",
    img: "/avatars/alexander.png", // replace with real image paths
  },
  {
    name: "Sophia Zhang",
    role: "CTO",
    img: "/avatars/sophia.png",
  },
  {
    name: "Marcus Johnson",
    role: "COO",
    img: "/avatars/marcus.png",
  },
  {
    name: "Olivia Patel",
    role: "Head of Product",
    img: "/avatars/olivia.png",
  },
];

export const plans = [
  {
    name: "Starter Plan",
    price: "$19",
    description: "Billed monthly",
    features: [
      "5 trading pairs",
      "Basic market analysis",
      "Email notifications",
      "Advanced analytics",
    ],
    highlighted: false,
  },
  {
    name: "Pro Plan",
    price: "$49",
    description: "Billed monthly",
    features: [
      "20 trading pairs",
      "Advanced market analysis",
      "Real-time notifications",
      "Basic analytics dashboard",
    ],
    highlighted: true, // middle plan highlighted
  },
  {
    name: "Business Plan",
    price: "$99",
    description: "Billed monthly",
    features: [
      "50 trading pairs",
      "Premium market analysis",
      "Priority notifications",
      "Full analytics suite",
    ],
    highlighted: false,
  },
  {
    name: "Enterprise Plan",
    price: "$199",
    description: "Billed monthly",
    features: [
      "Unlimited trading pairs",
      "Enterprise-grade analytics",
      "Dedicated account manager",
      "Custom API integration",
    ],
    highlighted: false,
  },
];

export const stats = [
  { value: "$5.2B+", label: "Total Trading Volume" },
  { value: "150K+", label: "Active Users" },
  { value: "15%", label: "Avg. Monthly Return" },
  { value: "99.9%", label: "Success Rate" },
];

export const subscriptionPlans: PricingPlan[] = [
  {
    name: "Starter Plan",
    price: 19,
    features: [
      { text: "5 trading pairs", included: true },
      { text: "Basic market analysis", included: true },
      { text: "Email notifications", included: true },
      { text: "Advanced analytics", included: false },
    ],
  },
  {
    name: "Pro Plan",
    price: 49,
    isHighlighted: true,
    features: [
      { text: "20 trading pairs", included: true },
      { text: "Advanced market analysis", included: true },
      { text: "Real-time notifications", included: true },
      { text: "Basic analytics dashboard", included: true },
    ],
  },
  {
    name: "Business Plan",
    price: 99,
    features: [
      { text: "50 trading pairs", included: true },
      { text: "Premium market analysis", included: true },
      { text: "Priority notifications", included: true },
      { text: "Full analytics suite", included: true },
    ],
  },
  {
    name: "Enterprise Plan",
    price: 199,
    features: [
      { text: "Unlimited trading pairs", included: true },
      { text: "Enterprise-grade analysis", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Custom API integration", included: true },
    ],
  },
];
