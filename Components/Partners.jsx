import React from "react";

const Partners = () => {
  const partners = [
    {
      name: "Polygon",
      description: "Layer 2 Scaling Solution",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Chainlink",
      description: "Decentralized Oracle Network",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "OpenZeppelin",
      description: "Smart Contract Security",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "Uniswap",
      description: "Decentralized Exchange",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      name: "MetaMask",
      description: "Web3 Wallet",
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "IPFS",
      description: "Distributed Storage",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      name: "The Graph",
      description: "Indexing Protocol",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      name: "Ethereum",
      description: "Blockchain Platform",
      gradient: "from-gray-500 to-slate-500"
    }
  ];

  return (
    <section id="partners" className="py-20 relative">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full">
            <span className="text-sm font-medium text-secondary-300">ECOSYSTEM</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="gradient-text">Trusted</span> Partners
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            We take pride in collaborating with industry-leading partners who help us provide 
            the best DeFi services to our community. Together, we're building the future of finance.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="card group hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Partner Logo Placeholder */}
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${partner.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                <span className="text-2xl font-bold text-white">
                  {partner.name.charAt(0)}
                </span>
              </div>
              
              {/* Partner Name */}
              <h3 className="text-lg font-semibold text-primary mb-2 text-center">
                {partner.name}
              </h3>
              
              {/* Partner Description */}
              <p className="text-sm text-secondary text-center">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="mt-16 text-center space-y-6 animate-fade-in-up">
          <div className="relative inline-block">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-2xl blur opacity-25"></div>
            
            {/* Main Card */}
            <div className="relative card card-spacious max-w-2xl">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Become a Partner
              </h3>
              <p className="text-secondary mb-6">
                Join our growing ecosystem of partners and help shape the future of DeFi. 
                We're always looking for innovative projects to collaborate with.
              </p>
              <a
                href="#ask"
                className="btn btn-primary group"
              >
                <span>Contact Us</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="card text-center">
            <div className="text-4xl mb-3">🔒</div>
            <div className="text-lg font-semibold text-primary mb-2">Audited</div>
            <div className="text-sm text-secondary">Smart contracts audited by leading security firms</div>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-3">🌐</div>
            <div className="text-lg font-semibold text-primary mb-2">Decentralized</div>
            <div className="text-sm text-secondary">Built on secure blockchain infrastructure</div>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-3">⚡</div>
            <div className="text-lg font-semibold text-primary mb-2">Fast</div>
            <div className="text-sm text-secondary">Lightning-fast transactions on Layer 2</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;