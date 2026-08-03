import { useState } from "react";
import { motion } from "framer-motion";

import SectionTitle from "../Shared/SectionTitle";
import CertificationCard from "./CertificationCard";
import CertificateModal from "./CertificateModal";

import certifications from "../../data/certifications";

function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <>
      <section
        id="certifications"
        className="bg-black px-8 py-28"
      >
        <div className="mx-auto max-w-7xl">

          <SectionTitle
            number="03"
            title="Certifications & Achievements"
            subtitle="A collection of certifications, conference participations, and milestones that reflect my continuous learning journey."
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
          >
            {certifications.map((certificate) => (
              <CertificationCard
                key={certificate.id}
                certification={certificate}
                onClick={setSelectedCertificate}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </>
  );
}

export default Certifications;