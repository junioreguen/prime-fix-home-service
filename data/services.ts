import { LucideIcon } from "lucide-react";

export interface Service {
  number: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  image: string;
  problems: readonly string[];
  whatToExpect: readonly string[];
}

export const services = [
  {
    number: "01",
    slug: "plumbing",
    title: "Plumbing",
    shortDescription:
      "Leaks, blocked drains, faulty taps, toilets and common household plumbing issues.",
    description:
      "PrimeFix helps with everyday residential plumbing problems that need practical attention, from leaks and blocked drains to faulty fixtures and toilet issues.",
    icon: "Droplets",
    image: "/images/services/primefix-plumbing.webp",
    problems: [
      "Leaking taps and fixtures",
      "Blocked drains",
      "Toilet problems",
      "Pipe leaks",
      "Low water flow",
    ],
    whatToExpect: [
      "Tell us what is happening",
      "We confirm the details",
      "A technician assesses the issue",
      "The repair or next step is discussed",
    ],
  },
  {
    number: "02",
    slug: "electrical",
    title: "Electrical",
    shortDescription:
      "Sockets, switches, lighting, minor electrical repairs and household electrical issues.",
    description:
      "From faulty sockets and switches to lighting problems, PrimeFix helps address common residential electrical maintenance needs safely and practically.",
    icon: "Zap",
    image: "/images/services/primefix-electrical.webp",
    problems: [
      "Faulty sockets",
      "Switch problems",
      "Lighting issues",
      "Minor household electrical repairs",
      "Electrical fixture problems",
    ],
    whatToExpect: [
      "Describe the electrical issue",
      "We confirm the relevant details",
      "A technician assesses the installation",
      "The appropriate repair or next step is discussed",
    ],
  },
  {
    number: "03",
    slug: "air-conditioning",
    title: "Air Conditioning",
    shortDescription:
      "AC servicing, cleaning, inspection and common cooling problems.",
    description:
      "PrimeFix provides practical residential AC servicing and maintenance for homeowners who need their cooling systems inspected, cleaned or serviced.",
    icon: "Wind",
    image: "/images/services/primefix-air-conditioning.webp",
    problems: [
      "AC servicing",
      "Dirty indoor units",
      "Reduced cooling",
      "Routine inspection",
      "Common AC maintenance issues",
    ],
    whatToExpect: [
      "Tell us what the AC is doing",
      "We confirm the unit details",
      "A technician inspects the system",
      "The required service or next step is discussed",
    ],
  },
  {
    number: "04",
    slug: "carpentry-fixtures",
    title: "Carpentry & Fixtures",
    shortDescription:
      "Doors, handles, shelves, fittings and everyday woodwork repairs.",
    description:
      "PrimeFix handles practical residential fixture and woodwork jobs, including doors, handles, shelves, cabinets and everyday fittings.",
    icon: "Hammer",
    image: "/images/services/primefix-carpentry.webp",
    problems: [
      "Loose handles",
      "Door adjustments",
      "Shelf repairs",
      "Cabinet issues",
      "Everyday fixture repairs",
    ],
    whatToExpect: [
      "Describe the fixture or fitting issue",
      "We confirm the job details",
      "A technician assesses the work",
      "The repair or required next step is discussed",
    ],
  },
  {
    number: "05",
    slug: "painting-wall-repairs",
    title: "Painting & Wall Repairs",
    shortDescription:
      "Minor wall damage, touch-ups, repainting and finishing work.",
    description:
      "For everyday wall maintenance, PrimeFix can help with minor damage, touch-ups, repainting and straightforward finishing work.",
    icon: "Paintbrush",
    image: "/images/services/primefix-painting.webp",
    problems: [
      "Minor wall damage",
      "Paint touch-ups",
      "Small areas requiring repainting",
      "Surface finishing",
      "Everyday wall maintenance",
    ],
    whatToExpect: [
      "Tell us what needs attention",
      "We confirm the affected area",
      "A technician assesses the surface",
      "The appropriate repair or finishing work is discussed",
    ],
  },
  {
    number: "06",
    slug: "general-maintenance",
    title: "General Maintenance",
    shortDescription:
      "Jobs around the house that need a reliable pair of hands.",
    description:
      "Some home jobs do not fit neatly into one category. PrimeFix provides practical general maintenance support for everyday residential tasks.",
    icon: "Settings",
    image: "/images/services/primefix-general-maintenance.webp",
    problems: [
      "Minor household repairs",
      "Fittings and adjustments",
      "Everyday maintenance jobs",
      "Small fixture issues",
      "Practical household tasks",
    ],
    whatToExpect: [
      "Describe what needs doing",
      "We confirm the details",
      "A technician assesses the job",
      "The work or next step is discussed",
    ],
  },
] as const;