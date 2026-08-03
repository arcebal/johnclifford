import ibmData from "../assets/certifications/ibm-data.jpg";
import ucCongress from "../assets/certifications/uc-ict-congress.jpg";
import cebuCongress from "../assets/certifications/cebu-ict-congress.jpg";
import pitching from "../assets/certifications/pitching-second-place.jpg";

const certifications = [
  {
    id: 1,
    title: "IBM Data Fundamentals Badge",
    issuer: "IBM",
    year: "2025",
    category: "Certification",
    image: ibmData,
  },

  {
    id: 2,
    title: "12th UC CCS ICT Congress",
    issuer: "University of Cebu",
    year: "2026",
    category: "Conference",
    image: ucCongress,
  },

  {
    id: 3,
    title: "Cebu ICT Student Congress",
    issuer: "Cebu ICT Student Congress",
    year: "2026",
    category: "Conference",
    image: cebuCongress,
  },

  {
    id: 4,
    title: "Pitching Competition - Second Place",
    issuer: "University of Cebu Lapu-Lapu Mandaue",
    year: "2026",
    category: "Achievement",
    image: pitching,
  },
];

export default certifications;