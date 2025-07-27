import React from "react";

const Token = ({ poolDetails }) => {
  const tokenStats = [
    {
      label: "Total Supply",
      value: poolDetails?.depositToken?.totalSupply || "0",
      suffix: poolDetails?.depositToken?.symbol || "MECOIN",
      gradient: "from-blue-400 to-cyan-500",
      icon: "🪙",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      label: "Total Staked",
      value: poolDetails?.depositToken?.contractTokenBalance?.toString()?.slice(0, 10) || "0",
      suffix: poolDetails?.depositToken?.symbol || "MECOIN",
      gradient: "from-purple-400 to-pink-500",
      icon: "🔒",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      label: "Max Supply",
      value: poolDetails?.rewardToken?.totalSupply || "0",
      suffix: poolDetails?.rewardToken?.symbol || "MECOIN",
      gradient: "from-green-400 to-emerald-500",
      icon: "💎",
      bgGradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      label: "Token Price",
      value: "0.002",
      suffix: "POL",
      gradient: "from-yellow-400 to-orange-500",
      icon: "💰",
      bgGradient: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full backdrop-blur-sm">
            <span className="text-sm font-bold text-green-300">TOKENOMICS</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black">
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">MECOIN</span>
            <br />
            <span className="text-white">Token Stats</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            MECOIN is a next-generation meme-powered cryptocurrency with real-world utility. 
            Our ecosystem offers unique features such as NFTs, secure wallet, community airdrops, 
            play-to-earn gaming, and decentralized swap platform.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Enhanced Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-left">
            {tokenStats.map((stat, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Enhanced Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>
                
                {/* Main Card */}
                <div className={`relative bg-gray-900/90 backdrop-blur-xl border ${stat.borderColor} rounded-2xl p-6 text-center transition-all duration-500 group-hover:transform group-hover:scale-105`}>
                  
                  {/* Icon */}
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  
                  {/* Value */}
                  <div className={`text-2xl lg:text-3xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 font-mono`}>
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

          {/* Right Side - Enhanced Token Info Card */}
          <div className="relative animate-fade-in-right">
            {/* Enhanced Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30"></div>
            
            {/* Main Card */}
            <div className="relative bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-10 space-y-8">
              {/* Header */}
              <div className="text-center space-y-4">
                <h3 className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Token Information
                </h3>
                <p className="text-gray-300">Complete tokenomics and utility overview</p>
              </div>

              {/* Enhanced Token Details */}
              <div className="space-y-4">
                {[
                  { label: "Token Name", value: poolDetails?.depositToken?.name || "MECOIN" },
                  { label: "Symbol", value: poolDetails?.depositToken?.symbol || "MECOIN" },
                  { label: "Network", value: "Polygon" },
                  { label: "Contract Type", value: "ERC-20" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-colors">
                    <span className="text-gray-400">{item.label}</span>
                    <span className="text-white font-bold">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Enhanced Features */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>
                {[
                  "🎮 Play-to-Earn Gaming",
                  "🎨 NFT Marketplace",
                  "💰 Staking Rewards",
                  "🔄 Decentralized Swap",
                  "🎁 Community Airdrops",
                  "🔐 Secure Wallet"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-colors">
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Enhanced CTA */}
              <div className="pt-4">
                <button className="w-full btn btn-primary bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-4 text-lg font-bold rounded-2xl">
                  View on Explorer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Info */}
        <div className="mt-20 text-center animate-fade-in-up">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl backdrop-blur-sm">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 font-medium">Smart contracts audited by leading security firms</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token;