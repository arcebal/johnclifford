import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

function CertificateModal({ certificate, onClose }) {
  useEffect(() => {
    if (!certificate) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Lock background scroll
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [certificate, onClose]);

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[999] overflow-y-auto bg-black/80"
          onClick={onClose}
        >
          {/* Fixed Close Button */}
          <button
            onClick={onClose}
            aria-label="Close certificate"
            className="fixed right-6 top-6 z-[1000] rounded-full border border-red-500/40 bg-zinc-900/90 p-3 text-red-500 shadow-xl backdrop-blur-md transition duration-300 hover:scale-110 hover:bg-red-600 hover:text-white"
          >
            <X size={22} />
          </button>

          {/* Content */}
          <div
            className="flex min-h-screen justify-center px-6 py-20"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 30 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-5xl overflow-hidden rounded-3xl border border-red-900/30 bg-zinc-950 shadow-2xl"
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full object-contain"
              />

              <div className="border-t border-red-900/20 p-6">
                <h2 className="text-2xl font-bold text-white">
                  {certificate.title}
                </h2>

                <p className="mt-2 text-gray-400">
                  {certificate.issuer}
                </p>

                <p className="mt-1 text-red-500">
                  {certificate.year}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CertificateModal;