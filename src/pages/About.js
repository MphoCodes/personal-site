import React, { useState, useEffect, useRef } from "react";
import { 
  Code, 
  Award, 
  Globe, 
  Star,
  ArrowUpRight
} from "lucide-react";
import Footer from "../components/Footer";

const About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeHighlight, setActiveHighlight] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const position = sectionRef.current.getBoundingClientRect().top;
        setScrollPosition(position);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const keyHighlights = [
    {
      icon: Code,
      title: "Technical Expertise",
      description: "Proficient in IoT, AI-driven solutions, and digital transformation strategies",
      color: "text-blue-400"
    },
    {
      icon: Award,
      title: "Professional Achievement",
      description: "Founder of MCN Digital, delivering innovative IT consulting solutions",
      color: "text-green-400"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Committed to leveraging technology for meaningful societal impact",
      color: "text-purple-400"
    },
    {
      icon: Star,
      title: "Continuous Learning",
      description: "Passionate about staying ahead of emerging technologies and trends",
      color: "text-yellow-400"
    }
  ];

  return (
    <>
      <section 
        ref={sectionRef}
        className="relative min-h-screen py-20 bg-gradient-to-r from-gray-900 via-gray-900 to-black text-white overflow-hidden flex items-center"
      >
        {/* Animated Background */}
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            transform: `translateY(${scrollPosition * 0.2}px)`,
            backgroundImage: 'radial-gradient(circle at center, rgba(79, 70, 229, 0.1) 0%, transparent 70%)',
            backgroundSize: '200% 200%',
            animation: 'moveGradient 15s ease infinite'
          }}
        />

        <div className="container mx-auto relative z-10">
          <div 
            className="
              bg-gray-800/60 
              rounded-3xl 
              backdrop-blur-xl 
              border border-gray-700 
              shadow-2xl 
              p-12 
              transition-all 
              hover:shadow-4xl
            "
          >
            <h2 
              className="
                text-5xl font-bold mb-12 
                text-transparent bg-clip-text 
                bg-gradient-to-r from-blue-500 to-purple-500
                text-center
                tracking-tight
              "
            >
              About Me
            </h2>

            {/* Personal Introduction */}
            <div className="space-y-6 mb-16">
              {[
                "I am Mpho Ndlela, founder of MCN Digital, specializing in IT consulting, IoT, and AI-driven solutions. I have a strong passion for using technology to solve real-world problems and improve the lives of others.",
                "I have worked on developing modern and user-friendly websites for small and medium-sized enterprises (SMEs), empowering businesses to achieve their digital transformation goals. Completing my studies in 2024, I am equipped with the skills and knowledge to tackle challenging projects and deliver exceptional results.",
                "I am deeply committed to personal and professional growth, continually striving to stay ahead of industry trends and advancements. My focus remains on innovation, collaboration, and providing solutions that make a meaningful impact on both organizations and society as a whole."
              ].map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-lg text-gray-300 leading-relaxed opacity-90 hover:opacity-100 transition-opacity"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Highlights Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {keyHighlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                const isActive = activeHighlight === index;

                return (
                  <div 
                    key={index}
                    onMouseEnter={() => setActiveHighlight(index)}
                    onMouseLeave={() => setActiveHighlight(null)}
                    className={`
                      relative
                      bg-gray-900/50 
                      p-6 
                      rounded-2xl 
                      border 
                      transition-all 
                      duration-300
                      group
                      ${isActive 
                        ? 'border-blue-600 scale-105 shadow-lg' 
                        : 'border-transparent'
                      }
                      flex items-center space-x-6
                    `}
                  >
                    <div className={`
                      w-20 h-20 
                      flex items-center justify-center 
                      rounded-full 
                      transition-all 
                      ${highlight.color} 
                      ${isActive 
                        ? 'bg-white/10 scale-110' 
                        : 'bg-transparent'
                      }
                    `}>
                      <IconComponent 
                        className={`
                          ${highlight.color} 
                          transition-all 
                          ${isActive ? 'w-14 h-14' : 'w-12 h-12'}
                        `} 
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className={`
                        text-xl font-bold mb-2 
                        transition-colors
                        ${isActive ? 'text-white' : 'text-gray-200'}
                      `}>
                        {highlight.title}
                      </h3>
                      <p className={`
                        text-gray-400 
                        transition-all
                        ${isActive ? 'opacity-100' : 'opacity-70'}
                      `}>
                        {highlight.description}
                      </p>
                    </div>
                    {isActive && (
                      <ArrowUpRight 
                        className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity" 
                        size={20} 
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes moveGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </section>

      <Footer />
    </>
  );
};

export default About;