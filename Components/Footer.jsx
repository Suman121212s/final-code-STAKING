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
    <footer className="relative bg-secondary border-t border-border-primary">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <span className="text-3xl font-bold gradient-text">MECOIN</span>
              </div>
              
              <p className="text-secondary leading-relaxed max-w-md">
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
                    className={`w-10 h-10 bg-tertiary rounded-lg flex items-center justify-center text-secondary transition-all hover:bg-glass ${social.color} hover:scale-110 hover:shadow-lg`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-primary">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-secondary hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-primary">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-secondary hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-lg font-semibold text-primary mt-8">Features</h3>
              <ul className="space-y-3">
                {footerLinks.features.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-secondary hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-primary">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-secondary hover:text-primary transition-colors"
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
        <div className="py-8 border-t border-border-primary">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary text-sm">
              © 2024 MECOIN. All rights reserved. Created by{" "}
              <a
                href="https://www.mecoin.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-300 transition-colors"
              >
                @mecoin.site
              </a>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-secondary">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
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