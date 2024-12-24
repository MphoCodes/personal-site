import React, { useState, useEffect, useRef } from "react";
import { 
  FileTextIcon, 
  CodeIcon, 
  MailIcon, 
  DownloadIcon,
  SparklesIcon,
  GithubIcon,
  LinkedinIcon,
  Instagram,  
  MessageCircle 
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const containerRef = useRef(null);
  const fullText = "Hi There! I'm Mpho Ndlela";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 300);

    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });

        const rotationX = ((y - rect.height / 2) / rect.height) * 20;
        const rotationY = ((x - rect.width / 2) / rect.width) * 20;
        setRotation({ x: rotationX, y: rotationY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const generateRandomPoints = (count) => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 3 + 2
    }));
  };

  const backgroundPoints = generateRandomPoints(50);

  const PhotoFrame = () => (
    <div className="relative group perspective-1000 w-full max-w-md mx-auto">
      {/* Animated gradient border */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 rounded-lg animate-gradient-move opacity-75" />
      
      {/* Glow effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
      
      {/* Main frame */}
      <div className="relative bg-black/80 p-3 rounded-lg transform transition-transform duration-500 group-hover:scale-102">
        <div className="relative overflow-hidden rounded-lg">
          {/* Corner decorations */}
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute w-10 h-10 border-2 border-purple-500/80 opacity-75"
              style={{
                top: i < 2 ? -5 : 'auto',
                bottom: i >= 2 ? -5 : 'auto',
                left: i % 2 === 0 ? -5 : 'auto',
                right: i % 2 === 1 ? -5 : 'auto',
                transform: `rotate(${i * 90}deg)`,
              }}
            />
          ))}
          
          <img 
            src="/certificates/my photo.png"
            alt="Profile"
            className="w-full h-auto object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            srcSet="/certificates/my photo.png 300w,
                    /certificates/my photo.png 600w,
                    /certificates/my photo.png 900w"
            sizes="(max-width: 640px) 100vw,
                   (max-width: 1024px) 50vw,
                   33vw"
          />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </div>
  );

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-black text-white overflow-hidden perspective-1000"
      style={{ background: "linear-gradient(to bottom, #000000, #1a1a2e)" }}
    >
      {/* Background effects */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#000 2px, transparent 2px),
                             linear-gradient(90deg, #000 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
            animation: "gridMove 20s linear infinite",
            transform: `rotate3d(1, 0, 1, ${rotation.x}deg)`
          }}
        />
      </div>

      {backgroundPoints.map((point, index) => (
        <div
          key={index}
          className="absolute rounded-full animate-pulse-random"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            width: `${point.size}px`,
            height: `${point.size}px`,
            background: `radial-gradient(circle at center, 
              ${index % 2 ? "#4f46e5" : "#7c3aed"}, 
              transparent)`,
            filter: "blur(2px)",
            animation: `float ${point.duration}s infinite ease-in-out`
          }}
        />
      ))}

      {/* Mouse interaction effect */}
      <div 
        className="fixed inset-0 opacity-40 pointer-events-none"
        style={{
          background: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(123, 97, 255, 0.15), 
            transparent 60%)`
        }}
      />

      {/* Main content container */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Typing animation */}
        <div className="text-center mb-8 pt-8">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 typing-cursor inline-block">
            {typedText}
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
          {/* Photo section */}
          <div className="mb-12">
            <PhotoFrame />
          </div>

          {/* Name and title section */}
          <div 
            className={`text-center transform transition-all duration-1000 
              ${isAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
            `}
          >
            <div className="relative inline-block group">
              {[...Array(8)].map((_, i) => (
                <SparklesIcon
                  key={i}
                  className="absolute w-6 h-6 text-yellow-400 animate-sparkle"
                  style={{
                    top: `${Math.sin(i * (Math.PI / 4)) * 100}%`,
                    left: `${Math.cos(i * (Math.PI / 4)) * 100}%`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6">
                <span className="relative inline-block group-hover:scale-110 transition-transform duration-300">
                  <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 animate-gradient-x blur-lg">
                    Mpho Ndlela
                  </span>
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    Mpho Ndlela
                  </span>
                </span>
              </h1>
            </div>

            <div className="relative mt-6 mb-12">
              <p className="text-2xl md:text-3xl font-bold tracking-wider animate-fade-in">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Crafting Digital
                </span>
                {" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    Experiences
                  </span>
                  <span className="absolute inset-0 animate-pulse blur-lg opacity-50 bg-gradient-to-r from-purple-400 to-pink-500" />
                </span>
              </p>
            </div>
          </div>

          {/* Bio section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xl text-gray-300 leading-relaxed">
              As a dedicated and adaptable technical professional, I am eager to contribute my skills to a dynamic team. 
              My experience in web development, IoT solutions, and digital marketing has equipped me with a versatile skill set 
              that I am eager to apply to new challenges.
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {[
              { label: "Skills", icon: <CodeIcon className="w-6 h-6" />, link: "/skills", color: "from-cyan-500 to-blue-500" },
              { label: "Certificates", icon: <FileTextIcon className="w-6 h-6" />, link: "/certifications", color: "from-blue-500 to-purple-500" },
              { label: "Projects", icon: <DownloadIcon className="w-6 h-6" />, link: "/Projects", color: "from-purple-500 to-pink-500" },
              { label: "Contact Me!", icon: <MailIcon className="w-6 h-6" />, link: "/contact", color: "from-pink-500 to-rose-500" }
            ].map((button, index) => (
              <Link
                key={index}
                to={button.link}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200 animate-tilt" />
                <button className="relative px-6 py-3 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                  <span className="flex items-center space-x-3">
                    {button.icon}
                    <span className={`text-lg font-semibold bg-gradient-to-r bg-clip-text text-transparent pr-6 ${button.color}`}>
                      {button.label}
                    </span>
                  </span>
                </button>
              </Link>
            ))}
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-8">
            {[
              {
                icon: <GithubIcon className="w-8 h-8" />,
                link: "https://github.com/MphoNdlela16",
                label: "GitHub",
                color: "hover:text-purple-400",
              },
              {
                icon: <LinkedinIcon className="w-8 h-8" />,
                link: "https://www.linkedin.com/in/mpho-ndlela?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                label: "LinkedIn",
                color: "hover:text-blue-400",
              },
              {
                icon: <Instagram className="w-8 h-8" />,
                link: "https://www.instagram.com/mcn_zn/profilecard/?igsh=MXFuaXVwcm0wNzJzag==",
                label: "Instagram",
                color: "hover:text-pink-400",
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                link: "https://wa.me/qr/YKKF6H7RICOQP1",
                label: "WhatsApp",
                color: "hover:text-green-400",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative group ${social.color} transform hover:scale-125 transition-all duration-300`}
                aria-label={social.label}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-200" />
                <div className="relative">{social.icon}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
        @keyframes sparkle {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 3s linear infinite;
        }
        .                  .animate-gradient-move {
                    background-size: 200% 200%;
                    animation: gradient-move 3s linear infinite;
                  }
                `}</style>
              </div>
            );
        };
        
        export default Home;