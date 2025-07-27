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
      icon: <TiSocialTwitter className="w-6 h-6" />,
      color: "hover:text-blue-400",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Facebook", 
      url: "https://www.facebook.com/people/Mecoin/61566317977775/",
      icon: <TiSocialFacebook className="w-6 h-6" />,
      color: "hover:text-blue-600",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: <TiSocialLinkedin className="w-6 h-6" />,
      color: "hover:text-blue-500",
      gradient: "from-blue-500 to-indigo-600"
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
    <footer className="relative bg-gray-900/95 border-t border-gray-700/50 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Enhanced Brand Section */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
                  <span className="text-white font-black text-2xl">M</span>
                </div>
                <span className="text-4xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">MECOIN</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-md text-lg">
                Join the future of cryptocurrency with MECOIN: NFTs, GameFi, Wallet, Swap, and more. 
                With MECOIN, you're not just investing in a token – you're joining a revolution.
              </p>

              {/* Enhanced Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                  >
                    <div className={`absolute -inset-1 bg-gradient-to-r ${social.gradient} rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity`}></div>
                    <div className="relative w-12 h-12 bg-gray-800/80 backdrop-blur-xl rounded-xl flex items-center justify-center text-gray-400 transition-all hover:text-white hover:scale-110 border border-gray-700/50 group-hover:border-current/30">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Enhanced Links Sections */}
            <div className="space-y-8">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Company</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Services</h3>
              <ul className="space-y-4">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mt-12">Features</h3>
              <ul className="space-y-4">
                {footerLinks.features.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Support</h3>
              <ul className="space-y-4">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="py-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 MECOIN. All rights reserved. Created by{" "}
              <a
                href="https://www.mecoin.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text hover:from-purple-500 hover:to-pink-500 transition-all duration-300 font-medium"
              >
                @mecoin.site
              </a>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors hover:translate-y-[-2px] transform duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors hover:translate-y-[-2px] transform duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors hover:translate-y-[-2px] transform duration-200">
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