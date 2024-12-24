import React from "react";
import { motion } from "framer-motion";
import { Code, Laptop, Lightbulb, GraduationCap } from "lucide-react";
import Header from "../components/Header"; // Import Header
import Footer from "../components/Footer"; // Import Footer

const ExperienceCard = ({ title, company, description, bullets, icon: Icon }) => {
  return (
    <motion.div 
      className="bg-gray-800 bg-opacity-80 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="p-6 relative">
        <div className="absolute top-4 right-4 opacity-20">
          <Icon size={48} className="text-blue-400" />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-blue-300 flex items-center">
          {title}
        </h3>
        {company && <p className="text-sm text-gray-400 mb-4">{company}</p>}
        <p className="text-gray-300 mb-4">{description}</p>
        <ul className="space-y-2 text-gray-400 relative pl-4">
          {bullets.map((bullet, index) => (
            <li 
              key={index} 
              className="relative before:absolute before:left-[-15px] before:top-2 before:w-2 before:h-2 before:bg-blue-400 before:rounded-full"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Founder - MCN Digital",
      company: null,
      description: "As the founder of MCN Digital, I have spearheaded numerous projects, providing cutting-edge IT consulting, IoT solutions, and AI-driven technologies to clients.",
      bullets: [
        "Developed responsive websites for SMEs, enhancing their online presence and customer engagement.",
        "Designed and deployed IoT solutions to automate business processes and improve operational efficiency.",
        "Delivered AI-powered tools for data analysis, decision-making, and improved customer experiences.",
        "Built strong client relationships by providing tailored solutions and exceptional support."
      ],
      icon: Code
    },
    {
      title: "Web Developer for SMEs",
      company: null,
      description: "As a dedicated web developer, I have worked with various small and medium-sized enterprises (SMEs), creating modern, user-friendly websites tailored to their business goals.",
      bullets: [
        "Built dynamic and responsive websites using modern frameworks and technologies.",
        "Integrated e-commerce features, SEO strategies, and analytics to optimize business performance.",
        "Collaborated with designers and stakeholders to bring their vision to life.",
        "Provided ongoing support and training to clients for website management and updates."
      ],
      icon: Laptop
    },
    {
      title: "IoT and AI Specialist",
      company: null,
      description: "Leveraging my expertise in Internet of Things (IoT) and Artificial Intelligence (AI), I have developed innovative solutions that address complex challenges.",
      bullets: [
        "Implemented IoT systems to monitor and control industrial processes remotely.",
        "Developed AI algorithms to analyze large datasets and deliver actionable insights.",
        "Created smart home solutions, improving comfort and energy efficiency for clients.",
        "Collaborated with cross-functional teams to develop AI prototypes for predictive analytics."
      ],
      icon: Lightbulb
    },
    {
      title: "Academic and Personal Growth",
      company: "Completed in 2024",
      description: "My academic journey has been instrumental in shaping my career. Through coursework and practical projects, I gained a solid foundation in software engineering, IoT, and AI development.",
      bullets: [
        "Completed in-depth projects in IoT and AI applications during my studies.",
        "Engaged in self-paced learning to stay ahead in a rapidly evolving industry.",
        "Built a professional network by collaborating with peers and mentors."
      ],
      icon: GraduationCap
    }
  ];

  return (
    <>
      <Header /> {/* Add Header */}

      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Professional Journey
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>

      <Footer /> {/* Add Footer */}
    </>
  );
};

export default Experience;
