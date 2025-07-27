import React from "react";

const Partners = () => {
  const partners = [
    {
      name: "Polygon",
      description: "Layer 2 Scaling Solution",
      gradient: "from-purple-500 to-pink-500",
      icon: "🔷"
    },
    {
      name: "Chainlink",
      description: "Decentralized Oracle Network",
      gradient: "from-blue-500 to-cyan-500",
      icon: "🔗"
    },
    {
      name: "OpenZeppelin",
      description: "Smart Contract Security",
      gradient: "from-green-500 to-emerald-500",
      icon: "🛡️"
    },
    {
      name: "Uniswap",
      description: "Decentralized Exchange",
      gradient: "from-pink-500 to-rose-500",
      icon: "🦄"
    },
    {
      name: "MetaMask",
      description: "Web3 Wallet",
      gradient: "from-orange-500 to-red-500",
      icon: "🦊"
    },
    {
      name: "IPFS",
      description: "Distributed Storage",
      gradient: "from-indigo-500 to-purple-500",
      icon: "📁"
    },
    {
      name: "The Graph",
      description: "Indexing Protocol",
      gradient: "from-teal-500 to-cyan-500",
      icon: "📊"
    },
    {
      name: "Ethereum",
      description: "Blockchain Platform",
      gradient: "from-gray-500 to-slate-500",
      icon: "⟠"
    }
  ];

  return (
    <section id="partners" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm">
            <span className="text-sm font-bold text-purple-300">ECOSYSTEM</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Trusted</span>
            <br />
            <span className="text-white">Partners</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We take pride in collaborating with industry-leading partners who help us provide 
            the best DeFi services to our community. Together, we're building the future of finance.
          </p>
        </div>

        {/* Enhanced Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Enhanced Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${partner.gradient} rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>
              
              {/* Main Card */}
              <div className="relative bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 text-center transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:rotate-1">
                
                {/* Enhanced Partner Logo */}
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${partner.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500`}>
                  <span className="text-3xl">
                    {partner.icon}
                  </span>
                </div>
                
                {/* Partner Name */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {partner.name}
                </h3>
                
                {/* Partner Description */}
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {partner.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${partner.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Partnership CTA */}
        <div className="mt-20 text-center space-y-8 animate-fade-in-up">
          <div className="relative inline-block">
            {/* Enhanced Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30"></div>
            
            {/* Main Card */}
            <div className="relative bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-10 max-w-2xl">
              <h3 className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
                Become a Partner
              </h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Join our growing ecosystem of partners and help shape the future of DeFi. 
                We're always looking for innovative projects to collaborate with.
              </p>
              <a
                href="#ask"
                className="btn btn-primary btn-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-2xl hover:shadow-blue-500/25 group"
              >
                <span>Contact Us</span>
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { icon: "🔒", title: "Audited", desc: "Smart contracts audited by leading security firms" },
            { icon: "🌐", title: "Decentralized", desc: "Built on secure blockchain infrastructure" },
            { icon: "⚡", title: "Fast", desc: "Lightning-fast transactions on Layer 2" }
          ].map((item, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 text-center transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <div className="text-xl font-bold text-white mb-3">{item.title}</div>
                <div className="text-sm text-gray-400">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;