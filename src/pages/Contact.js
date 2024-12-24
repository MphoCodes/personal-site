import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Globe, 
  Send, 
  CheckCircle 
} from "lucide-react";
import Footer from "../components/Footer";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactDetails = [
    {
      icon: Phone,
      label: "Phone",
      value: "0621711265",
      link: "tel:0621711265"
    },
    {
      icon: Mail,
      label: "Email",
      value: "mpho.c.ndlela@gmail.com",
      link: "mailto:mpho.c.ndlela@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/mpho-ndlela",
      link: "https://linkedin.com/in/mpho-ndlela"
    },
    {
      icon: Globe,
      label: "Portfolio",
      value: "MCN Digital Portfolio",
      link: "https://mcn-digital.co.za/our-portfolio/"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xvgoqdrv", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <>
      <section 
        id="contact" 
        className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center"
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Get in Touch
              </h2>
              <p className="text-gray-300 mb-8">
                Feel free to reach out. I'm always open to discussing new projects, opportunities, or just having a chat about technology.
              </p>
              
              <div className="space-y-6">
                {contactDetails.map((detail, index) => {
                  const IconComponent = detail.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-center space-x-4 group"
                    >
                      <div className="
                        w-16 h-16 
                        bg-gray-800 
                        rounded-full 
                        flex items-center 
                        justify-center
                        transform 
                        transition-all 
                        group-hover:scale-110
                        group-hover:bg-blue-600
                      ">
                        <IconComponent 
                          className="text-blue-400 group-hover:text-white" 
                          size={24} 
                        />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{detail.label}</p>
                        <a 
                          href={detail.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="
                            text-lg 
                            font-semibold 
                            text-blue-300 
                            hover:text-blue-200
                            transition-colors
                          "
                        >
                          {detail.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="
              bg-gray-800 
              bg-opacity-70 
              backdrop-blur-lg 
              rounded-2xl 
              p-8 
              border 
              border-gray-700 
              shadow-2xl
            ">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { 
                      name: 'name', 
                      label: 'Name', 
                      type: 'text',
                      placeholder: 'Your Full Name'
                    },
                    { 
                      name: 'email', 
                      label: 'Email', 
                      type: 'email',
                      placeholder: 'your.email@example.com'
                    }
                  ].map((field) => (
                    <div key={field.name}>
                      <label 
                        htmlFor={field.name} 
                        className="block text-sm font-medium text-gray-400 mb-2"
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        placeholder={field.placeholder}
                        required
                        value={formData[field.name]}
                        onChange={(e) => setFormData({
                          ...formData, 
                          [field.name]: e.target.value
                        })}
                        className="
                          w-full 
                          px-4 py-3 
                          bg-gray-900 
                          border border-gray-700 
                          rounded-lg 
                          text-white 
                          focus:outline-none 
                          focus:ring-2 
                          focus:ring-blue-500
                          transition-all
                        "
                      />
                    </div>
                  ))}

                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium text-gray-400 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="How can I help you?"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({
                        ...formData, 
                        message: e.target.value
                      })}
                      className="
                        w-full 
                        px-4 py-3 
                        bg-gray-900 
                        border border-gray-700 
                        rounded-lg 
                        text-white 
                        focus:outline-none 
                        focus:ring-2 
                        focus:ring-blue-500
                        transition-all
                      "
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="
                      w-full 
                      py-3 
                      bg-blue-600 
                      hover:bg-blue-700 
                      text-white 
                      font-bold 
                      rounded-lg 
                      shadow-lg 
                      focus:outline-none
                      flex 
                      items-center 
                      justify-center 
                      space-x-2
                      transition-all
                      group
                    "
                  >
                    <Send 
                      className="group-hover:translate-x-1 transition-transform" 
                      size={20} 
                    />
                    <span>Send Message</span>
                  </button>
                </form>
              ) : (
                <div className="text-center space-y-6">
                  <CheckCircle 
                    className="mx-auto text-green-500" 
                    size={64} 
                  />
                  <h3 className="text-2xl font-bold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="
                      mx-auto 
                      px-6 py-3 
                      bg-blue-600 
                      hover:bg-blue-700 
                      text-white 
                      rounded-lg 
                      transition-colors
                    "
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;