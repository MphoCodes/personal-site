import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  FaAward,
  FaSearch,
  FaBuilding,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";
import certifications from "../data/certificationsData";
import Footer from "../components/Footer";

const CertificationCard = ({ certification, onClick }) => {
  return (
    <Tilt options={{ max: 15, scale: 1.05 }}>
      <motion.div
        className="group relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 rounded-lg"
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <LazyLoadImage
            src={certification.image.src}
            alt={certification.image.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <span className="absolute top-4 right-4 bg-blue-500/90 hover:bg-blue-600 text-white text-sm px-2 py-1 rounded">
            {certification.category}
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
            {certification.title}
          </h3>
          <div className="space-y-3 text-gray-400">
            <div className="flex items-center">
              <FaBuilding className="w-4 h-4 mr-2" />
              {certification.issuedBy}
            </div>
            <div className="flex items-center">
              <FaCalendarAlt className="w-4 h-4 mr-2" />
              {certification.issueDate}
            </div>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCert, setSelectedCert] = useState(null);

  const categories = ["All", ...new Set(certifications.map((cert) => cert.category))];

  const filteredCerts = certifications.filter((cert) => {
    const matchesCategory = selectedCategory === "All" || cert.category === selectedCategory;
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 animate-gradient bg-300%">
                Professional Certifications
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A showcase of certifications and achievements that reflect my skills and continuous learning.
            </p>
          </div>

          <div className="mb-12 space-y-6">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 transition-colors duration-300 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  <FaAward className="inline-block w-4 h-4 mr-2" />
                  {category}
                </button>
              ))}
            </div>

            <div className="max-w-md mx-auto relative">
              <FaSearch
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search certifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded focus:border-blue-500 focus:ring-blue-500 text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCerts.map((cert) => (
              <CertificationCard
                key={cert.id}
                certification={cert}
                onClick={() => setSelectedCert(cert)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="relative bg-gray-800 border border-gray-700 max-w-2xl w-full mx-auto rounded-lg shadow-lg p-6">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
              onClick={() => setSelectedCert(null)}
            >
              <FaTimes size={24} />
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedCert.title}</h3>
            <LazyLoadImage
              src={selectedCert.image.src}
              alt={selectedCert.image.alt}
              className="w-full rounded-lg mb-6 shadow-xl"
            />
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center">
                <FaBuilding className="w-5 h-5 mr-2 text-blue-400" />
                <span>Issued by {selectedCert.issuedBy}</span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="w-5 h-5 mr-2 text-blue-400" />
                <span>{selectedCert.issueDate}</span>
              </div>
              {selectedCert.link ? (
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition-all duration-300"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  View Certificate
                </a>
              ) : (
                <span className="text-red-500">Certificate link is unavailable.</span>
              )}
            </div>
          </div>
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setSelectedCert(null)}
          />
        </div>
      )}

      <Footer />

      <style jsx global>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </div>
  );
};

export default Certifications;
