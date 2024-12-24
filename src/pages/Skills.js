import React, { useState } from 'react';
import { 
  CodeIcon, 
  DatabaseIcon, 
  TargetIcon, 
  BrushIcon, 
  StarIcon, 
  GlobeIcon 
} from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toolkit = [
    { name: "VSCode", icon: "https://img.icons8.com/ios-filled/100/000000/visual-studio.png", category: "Development" },
    { name: "Android Studio", icon: "https://img.icons8.com/ios-filled/100/000000/android-os.png", category: "Mobile" },
    { name: "Python", icon: "https://img.icons8.com/ios-filled/100/000000/python.png", category: "Programming" },
    { name: "Java", icon: "https://img.icons8.com/ios-filled/100/000000/java-coffee-cup-logo.png", category: "Programming" },
    { name: "Git", icon: "https://img.icons8.com/ios-filled/100/000000/git.png", category: "Tools" },
    { name: "HTML", icon: "https://img.icons8.com/ios-filled/100/000000/html-5.png", category: "Web" },
    { name: "PHP", icon: "https://img.icons8.com/ios-filled/100/000000/php.png", category: "Web" },
    { name: "C#", icon: "https://img.icons8.com/ios-filled/100/000000/c-sharp-logo.png", category: "Programming" },
  ];

  const skillCategories = [
    {
      title: "Web Development",
      description: "Crafting responsive, intuitive web experiences with modern technologies.",
      icon: <CodeIcon className="w-12 h-12 text-blue-400" />,
      skills: ["HTML", "CSS", "PHP", "Responsive Design"]
    },
    {
      title: "Software Development",
      description: "Building robust, scalable applications with best practices.",
      icon: <DatabaseIcon className="w-12 h-12 text-green-400" />,
      skills: ["Java", "Python", "C#", "Android Development"]
    },
    {
      title: "Technical Fundamentals",
      description: "Deep understanding of core engineering and development principles.",
      icon: <TargetIcon className="w-12 h-12 text-purple-400" />,
      skills: ["SDLC", "Network Engineering", "Database Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Animated Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
            Mpho Ndlela
          </h1>
          <p className="text-2xl text-gray-300 max-w-2xl mx-auto">
            Software Engineer & Technology Enthusiast
          </p>
        </div>

        {/* Skill Categories with Interactive Hover */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`
                bg-gray-800 p-6 rounded-2xl shadow-lg transition-all duration-300
                transform hover:scale-105 hover:shadow-2xl cursor-pointer
                ${activeCategory === index ? 'ring-4 ring-blue-500' : ''}
              `}
              onMouseEnter={() => setActiveCategory(index)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h2 className="text-2xl font-bold ml-4">{category.title}</h2>
              </div>
              <p className="text-gray-400 mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Toolkit with Categorization */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            My Tech Toolkit
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {toolkit.map((tool, index) => (
              <div
                key={index}
                className="
                  flex flex-col items-center 
                  bg-gray-800 p-6 rounded-2xl 
                  shadow-md hover:shadow-2xl 
                  transition transform hover:scale-110
                  group
                "
              >
                <img 
                  src={tool.icon} 
                  alt={tool.name} 
                  className="w-20 h-20 mb-4 group-hover:scale-110 transition" 
                />
                <h3 className="text-lg font-bold">{tool.name}</h3>
                <span className="text-sm text-gray-500 mt-2">{tool.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Beyond Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <StarIcon className="w-12 h-12 text-yellow-400" />, title: "Problem Solving", description: "Analytical thinking and creative solution development" },
              { icon: <GlobeIcon className="w-12 h-12 text-green-400" />, title: "Bilingual", description: "Effective communication across language barriers" },
              { icon: <BrushIcon className="w-12 h-12 text-blue-400" />, title: "Project Management", description: "Coordinating teams and delivering results" }
            ].map((skill, index) => (
              <div 
                key={index} 
                className="bg-gray-800 p-6 rounded-2xl flex flex-col items-center hover:bg-gray-700 transition"
              >
                {skill.icon}
                <h3 className="text-2xl font-bold mt-4 mb-2">{skill.title}</h3>
                <p className="text-gray-400 text-center">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center py-8 border-t border-gray-700">
          <p className="text-gray-500">© 2024 Mpho Ndlela | Crafting Digital Experiences</p>
        </footer>
      </div>
    </div>
  );
};

export default Skills;