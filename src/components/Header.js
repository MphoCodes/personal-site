import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  HomeIcon, 
  UserIcon, 
  BriefcaseIcon, 
  StarIcon, 
  AwardIcon, 
  GraduationCapIcon, 
  MailIcon, 
  MenuIcon, 
  XIcon, 
  LayersIcon,
  SparklesIcon
} from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headerRef = useRef(null);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: <HomeIcon className="w-5 h-5" /> },
    { path: "/about", label: "About", icon: <UserIcon className="w-5 h-5" /> },
    { path: "/experience", label: "Experience", icon: <BriefcaseIcon className="w-5 h-5" /> },
    { path: "/skills", label: "Skills", icon: <StarIcon className="w-5 h-5" /> },
    { path: "/certifications", label: "Certifications", icon: <AwardIcon className="w-5 h-5" /> },
    { path: "/education", label: "Education", icon: <GraduationCapIcon className="w-5 h-5" /> },
    { path: "/projects", label: "Projects", icon: <LayersIcon className="w-5 h-5" /> },
    { path: "/contact", label: "Contact", icon: <MailIcon className="w-5 h-5" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isMobileMenuOpen && !e.target.closest('.mobile-menu')) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMobileMenuOpen]);

  return (
    <header 
      ref={headerRef}
      className={`
        fixed w-full top-0 z-50 transition-all duration-500
        ${isScrolled ? 'backdrop-blur-lg bg-black/30' : 'bg-transparent'}
      `}
    >
      {/* Gradient border bottom */}
      <div className={`
        absolute bottom-0 left-0 right-0 h-[1px] 
        bg-gradient-to-r from-transparent via-blue-500 to-transparent
        transition-opacity duration-500
        ${isScrolled ? 'opacity-100' : 'opacity-0'}
      `} />

      {/* Interactive spotlight effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(
            circle 100px at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(59, 130, 246, 0.1),
            transparent
          )`
        }}
      />

      <div className="container mx-auto px-6">
        <div className="relative flex justify-between items-center py-4">
          {/* Logo with animated sparkles */}
          <h1 className="relative group">
            <Link 
              to="/" 
              className={`
                text-4xl font-black tracking-tight
                bg-clip-text text-transparent
                bg-gradient-to-r from-white via-blue-400 to-white
                transition-all duration-300 group-hover:scale-105 inline-block
                ${isScrolled ? 'text-3xl' : 'text-4xl'}
              `}
            >
              <span className="relative">
                Mpho Ndlela
                <SparklesIcon className="absolute -top-6 -right-6 w-6 h-6 text-blue-400 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </Link>
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={index}
                  to={item.path}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`
                    relative px-4 py-2 rounded-lg
                    flex items-center space-x-2
                    transition-all duration-300
                    hover:bg-white/10
                    ${isActive ? 'text-blue-400' : 'text-white/80'}
                    group
                  `}
                >
                  <span className={`
                    transition-transform duration-300
                    ${hoveredItem === index ? 'scale-110' : 'scale-100'}
                  `}>
                    {item.icon}
                  </span>
                  <span className={`
                    font-medium
                    ${hoveredItem === index ? 'text-blue-400' : ''}
                  `}>
                    {item.label}
                  </span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full" />
                  )}
                  
                  {/* Hover effect */}
                  {hoveredItem === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur animate-pulse" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="md:hidden relative group p-2"
            aria-label="Toggle Menu"
          >
            <div className="relative">
              {isMobileMenuOpen ? (
                <XIcon className="w-8 h-8 text-blue-400 transform transition-transform duration-300 rotate-90 group-hover:rotate-180" />
              ) : (
                <MenuIcon className="w-8 h-8 text-white transform transition-transform duration-300 group-hover:rotate-180" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`
          fixed inset-0 bg-black/80 backdrop-blur-lg
          transform transition-all duration-500 ease-in-out
          ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
          md:hidden z-40
        `}
      >
        <nav className="absolute right-0 top-0 h-full w-64 bg-gradient-to-b from-blue-900/90 to-black/90 p-8">
          <div className="space-y-2">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    flex items-center space-x-4 p-3
                    rounded-lg transition-all duration-300
                    ${isActive ? 
                      'bg-blue-600/20 text-blue-400' : 
                      'text-white/80 hover:bg-white/10'
                    }
                  `}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {isActive && (
                    <div className="absolute right-4 w-1 h-1 rounded-full bg-blue-400" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;