export const site = {
  name: "Intercontinental General Merchandise & Logistics Limited",
  shortName: "Intercontinental GML",
  registrationNumber: "9522004",
  description: "Reliable general merchandise sourcing, procurement and logistics support for businesses across Nigeria and beyond.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://toby-gg.github.io/intercontinental-merchandise-logistics",
  phone: process.env.NEXT_PUBLIC_PHONE || "+2340000000000",
  email: process.env.NEXT_PUBLIC_EMAIL || "hello@example.com",
  address: process.env.NEXT_PUBLIC_ADDRESS || "Nigeria",
};

export const services = [
  { number: "01", slug: "procurement-sourcing", title: "Procurement & Sourcing", text: "Dependable sourcing of quality goods from verified local and international suppliers, aligned with your specification, budget and timeline." },
  { number: "02", slug: "general-merchandise", title: "General Merchandise", text: "Flexible supply of commercial, industrial and everyday merchandise for retailers, institutions, projects and corporate buyers." },
  { number: "03", slug: "haulage-delivery", title: "Haulage & Delivery", text: "Coordinated movement of goods with clear communication, careful handling and practical delivery planning from pickup to destination." },
  { number: "04", slug: "warehousing-distribution", title: "Warehousing & Distribution", text: "Organised storage and onward distribution support designed to keep inventory visible, accessible and moving efficiently." },
  { number: "05", slug: "import-export-support", title: "Import & Export Support", text: "Structured coordination for cross-border trade, supplier communication and shipment documentation through trusted partners." },
  { number: "06", slug: "business-logistics", title: "Business Logistics", text: "Tailored logistics planning for recurring supply, multi-location delivery and project-based operational requirements." },
];
