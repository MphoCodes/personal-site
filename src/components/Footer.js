import React from "react";
import { LinkedinIcon, GithubIcon, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <LinkedinIcon className="w-6 h-6 text-blue-500 hover:text-blue-400" />,
      href: "https://www.linkedin.com/in/mpho-ndlela?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      icon: <GithubIcon className="w-6 h-6 text-gray-400 hover:text-gray-300" />,
      href: "https://github.com/MphoNdlela16",
    },
    {
      icon: <Instagram className="w-6 h-6 text-pink-500 hover:text-pink-400" />,
      href: "https://www.instagram.com/mcn_zn/profilecard/?igsh=MXFuaXVwcm0wNzJzag==",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-green-500 hover:text-green-400" />,
      href: "https://wa.me/qr/YKKF6H7RICOQP1",
    },
  ];

  return (
    <footer className="bg-black py-10">
      <div className="container mx-auto text-center">
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-400">
          © 2024 Mpho Ndlela | Crafting Digital Experiences
        </p>
      </div>
    </footer>
  );
};

export default Footer;
