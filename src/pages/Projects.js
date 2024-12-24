import React from "react";
import Footer from "../components/Footer";
import { ExternalLinkIcon } from "lucide-react";

const projects = [
  {
    title: "Titan Toilet Hire Website",
    description:
      "This website was created for Titan Toilet Hire, a company specializing in portable toilet solutions. The site provides easy-to-use features for booking and inquiries.",
    link: "https://titantoilethire.co.za/",
    image: "https://titantoilethire.co.za/wp-content/uploads/2024/09/cropped-titamtoilet.png"
  },
  {
    title: "Titan Logistix Website",
    description:
      "A logistics and supply chain website created for Titan Logistix, offering tracking, information services, and booking features.",
    link: "https://titanlogistix.co.za/",
    image: "https://titanlogistix.co.za/wp-content/uploads/2023/12/LOGO-1.png"
  },
  {
    title: "PMB Medical Centre Website",
    description:
      "A clean and professional website built for PMB Medical Centre. It ensures patients can easily book appointments and learn about available services.",
    link: "https://pmbmedcentre.co.za/",
    image: "https://pmbmedcentre.co.za/wp-content/uploads/2024/02/cropped-MedCentre-logo.png"
  },
  {
    title: "MCN-Digital Website",
    description:
      "This website was created for MCN-Digital to showcase their services and portfolio. Built with cutting-edge technologies to enhance online presence.",
    link: "https://mcn-digital.co.za/",
    image: "https://mcn-digital.co.za/wp-content/uploads/2024/01/Circle-Web-Logo.png"
  },
  {
    title: "AceTimeTracker App",
    description:
      "A productivity app designed to help individuals and teams track their tasks and manage time efficiently. Open-source project hosted on GitHub.",
    link: "https://github.com/MphoCodes/AceTimeTracker",
    image: "https://github.com/MphoCodes/AceTimeTracker/blob/main/acelogo.png?raw=true"
  },
  {
    title: "MyFarmer WebApp",
    description:
      "A web app to assist farmers with real-time tracking and management of their crops and equipment. Open-source project available on GitHub.",
    link: "https://github.com/MphoCodes/MyFarmerWebApp",
    image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  }
];

const Projects = () => {
  return (
    <>
      <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            My Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </a>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                  >
                    <ExternalLinkIcon className="w-5 h-5 mr-2" />
                    Visit Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
