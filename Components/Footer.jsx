import React from "react";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialLinkedin,
} from "./ReactICON/index";

const Footer = () => {
  const socialLinks = [
    {
      name: "Twitter",
      url: "https://x.com/mecoinen",
      icon: <TiSocialTwitter className="w-5 h-5" />,
      color: "hover:text-blue-400"
    },
    {
      name: "Facebook", 
      url: "https://www.facebook.com/people/Mecoin/61566317977775/",
      icon: <TiSocialFacebook className="w-5 h-5" />,
      color: "hover:text-blue-600"
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: <TiSocialLinkedin className="w-5 h-5" />,
      color: "hover:text-blue-500"
    }
  ];

  const footerLinks = {
    company: [
      { name: "About MECOIN", url: "https://info.mecoin.site/getting-started/publish-your-docs" },
      { name: "Our News", url: "#" },
      { name: "License", url: "#" },
      { name: "Contact", url: "#" }
    ],
    services: [
      { name: "Invest", url: "https://info.mecoin.site/getting-started/publish-your-docs" },
      { name: "Token", url: "https://info.mecoin.site/project/markdown" },
      { name: "Affiliate", url: "#" },
      { name: "Contest", url: "#" }
    ],
    features: [
      { name: "Safety", url: "#" },
      { name: "Automation", url: "https://info.mecoin.site/getting-started/quickstart" },
      { name: "Analytics", url: "#" },
      { name: "Reports", url: "#" }
    ],
    support: [
      { name: "Help Center", url: "#" },
      { name: "How it Works", url: "https://info.mecoin.site/project/editor" },
      { name: "Privacy Policy", url: "#" },
      { name: "Terms & Conditions", url: "#" }
    ]
  };

  return (
    <footer className="relative bg-gray-900/50 border-t border-gray-800">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <span className="text-3xl font-bold gradient-text">MECOIN</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                Join the future of cryptocurrency with MECOIN: NFTs, GameFi, Wallet, Swap, and more. 
                With MECOIN, you're not just investing in a token – you're joining a movement.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-gray-700 ${social.color} hover:scale-110`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-lg font-semibold text-white mt-8">Features</h3>
              <ul className="space-y-3">
                {footerLinks.features.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 MECOIN. All rights reserved. Created by{" "}
              <a
                href="https://www.mecoin.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                @mecoin.site
              </a>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;