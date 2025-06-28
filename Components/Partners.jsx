import React from "react";

const Partners = () => {
  const partners = [
    {
      name: "Polygon",
      image: "/img/partners/polygon.svg",
      url: "https://polygon.technology/",
      description: "Layer 2 Scaling Solution"
    },
    {
      name: "Chainlink",
      image: "/img/partners/chainlink.svg", 
      url: "https://chain.link/",
      description: "Decentralized Oracle Network"
    },
    {
      name: "OpenZeppelin",
      image: "/img/partners/openzeppelin.svg",
      url: "https://openzeppelin.com/",
      description: "Smart Contract Security"
    },
    {
      name: "Uniswap",
      image: "/img/partners/uniswap.svg",
      url: "https://uniswap.org/",
      description: "Decentralized Exchange"
    },
    {
      name: "MetaMask",
      image: "/img/partners/metamask.svg",
      url: "https://metamask.io/",
      description: "Web3 Wallet"
    },
    {
      name: "IPFS",
      image: "/img/partners/ipfs.svg",
      url: "https://ipfs.io/",
      description: "Distributed Storage"
    },
    {
      name: "The Graph",
      image: "/img/partners/thegraph.svg",
      url: "https://thegraph.com/",
      description: "Indexing Protocol"
    },
    {
      name: "Ethereum",
      image: "/img/partners/ethereum.svg",
      url: "https://ethereum.org/",
      description: "Blockchain Platform"
    }
  ];

  return (
    <section id="partners" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full">
            <span className="text-sm font-medium text-purple-300">ECOSYSTEM</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="gradient-text">Trusted</span> Partners
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We take pride in collaborating with industry-leading partners who help us provide 
            the best DeFi services to our community. Together, we're building the future of finance.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-500"></div>
              
              {/* Main Card */}
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 text-center transition-all duration-300 group-hover:border-gray-600 group-hover:transform group-hover:scale-105"
              >
                {/* Partner Logo Placeholder */}
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                
                {/* Partner Name */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {partner.name}
                </h3>
                
                {/* Partner Description */}
                <p className="text-sm text-gray-400">
                  {partner.description}
                </p>
              </a>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="mt-16 text-center space-y-6">
          <div className="relative inline-block">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25"></div>
            
            {/* Main Card */}
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 max-w-2xl">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Become a Partner
              </h3>
              <p className="text-gray-300 mb-6">
                Join our growing ecosystem of partners and help shape the future of DeFi. 
                We're always looking for innovative projects to collaborate with.
              </p>
              <a
                href="#ask"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <span>Contact Us</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700">
            <div className="text-3xl mb-2">🔒</div>
            <div className="text-lg font-semibold text-white mb-2">Audited</div>
            <div className="text-sm text-gray-400">Smart contracts audited by leading security firms</div>
          </div>
          
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700">
            <div className="text-3xl mb-2">🌐</div>
            <div className="text-lg font-semibold text-white mb-2">Decentralized</div>
            <div className="text-sm text-gray-400">Built on secure blockchain infrastructure</div>
          </div>
          
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-lg font-semibold text-white mb-2">Fast</div>
            <div className="text-sm text-gray-400">Lightning-fast transactions on Layer 2</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;