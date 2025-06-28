import React from "react";

const Token = ({ poolDetails }) => {
  const tokenStats = [
    {
      label: "Total Supply",
      value: poolDetails?.depositToken?.totalSupply || "0",
      suffix: poolDetails?.depositToken?.symbol || "MECOIN",
      color: "from-blue-500 to-cyan-500",
      icon: "🪙"
    },
    {
      label: "Total Staked",
      value: poolDetails?.depositToken?.contractTokenBalance?.toString()?.slice(0, 10) || "0",
      suffix: poolDetails?.depositToken?.symbol || "MECOIN",
      color: "from-emerald-500 to-teal-500",
      icon: "🔒"
    },
    {
      label: "Max Supply",
      value: poolDetails?.rewardToken?.totalSupply || "0",
      suffix: poolDetails?.rewardToken?.symbol || "MECOIN",
      color: "from-purple-500 to-pink-500",
      icon: "💎"
    },
    {
      label: "Token Price",
      value: "0.002",
      suffix: "POL",
      color: "from-orange-500 to-red-500",
      icon: "💰"
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full">
            <span className="text-sm font-medium text-blue-300">TOKENOMICS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="gradient-text">MECOIN</span> Token Stats
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            MECOIN is a next-generation meme-powered cryptocurrency with real-world utility. 
            Our ecosystem offers unique features such as NFTs, secure wallet, community airdrops, 
            play-to-earn gaming, and decentralized swap platform.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {tokenStats.map((stat, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-500`}></div>
                
                {/* Main Card */}
                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 text-center transition-all duration-300 group-hover:border-gray-600 group-hover:transform group-hover:scale-105">
                  {/* Icon */}
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  
                  {/* Value */}
                  <div className={`text-xl lg:text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {parseFloat(stat.value).toLocaleString()}
                    <span className="text-sm ml-1">{stat.suffix}</span>
                  </div>
                  
                  {/* Label */}
                  <div className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Token Info Card */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25"></div>
            
            {/* Main Card */}
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 space-y-6">
              {/* Header */}
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold gradient-text">Token Information</h3>
                <p className="text-gray-400">Complete tokenomics and utility overview</p>
              </div>

              {/* Token Details */}
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-xl">
                  <span className="text-gray-400">Token Name</span>
                  <span className="text-white font-semibold">{poolDetails?.depositToken?.name || "MECOIN"}</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-xl">
                  <span className="text-gray-400">Symbol</span>
                  <span className="text-white font-semibold">{poolDetails?.depositToken?.symbol || "MECOIN"}</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-xl">
                  <span className="text-gray-400">Network</span>
                  <span className="text-white font-semibold">Polygon</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-xl">
                  <span className="text-gray-400">Contract Type</span>
                  <span className="text-white font-semibold">ERC-20</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                {[
                  "🎮 Play-to-Earn Gaming",
                  "🎨 NFT Marketplace",
                  "💰 Staking Rewards",
                  "🔄 Decentralized Swap",
                  "🎁 Community Airdrops",
                  "🔐 Secure Wallet"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-300">
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4">
                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                  View on Explorer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-xl">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300">Smart contracts audited by leading security firms</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token;