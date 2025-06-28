import React from "react";

const Token = ({ poolDetails }) => {
  const tokenStats = [
    {
      label: "Total Supply",
      value: poolDetails?.depositToken?.totalSupply || "0",
      suffix: poolDetails?.depositToken?.symbol || "MECOIN",
      gradient: "from-primary-500 to-secondary-500",
      icon: "🪙"
    },
    {
      label: "Total Staked",
      value: poolDetails?.depositToken?.contractTokenBalance?.toString()?.slice(0, 10) || "0",
      suffix: poolDetails?.depositToken?.symbol || "MECOIN",
      gradient: "from-accent-500 to-primary-500",
      icon: "🔒"
    },
    {
      label: "Max Supply",
      value: poolDetails?.rewardToken?.totalSupply || "0",
      suffix: poolDetails?.rewardToken?.symbol || "MECOIN",
      gradient: "from-secondary-500 to-accent-500",
      icon: "💎"
    },
    {
      label: "Token Price",
      value: "0.002",
      suffix: "POL",
      gradient: "from-warning to-error",
      icon: "💰"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full">
            <span className="text-sm font-medium text-primary-300">TOKENOMICS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="gradient-text">MECOIN</span> Token Stats
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            MECOIN is a next-generation meme-powered cryptocurrency with real-world utility. 
            Our ecosystem offers unique features such as NFTs, secure wallet, community airdrops, 
            play-to-earn gaming, and decentralized swap platform.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-left">
            {tokenStats.map((stat, index) => (
              <div
                key={index}
                className="stat-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="text-3xl mb-3">{stat.icon}</div>
                
                {/* Value */}
                <div className={`text-xl lg:text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 font-mono`}>
                  {parseFloat(stat.value).toLocaleString()}
                  <span className="text-sm ml-1">{stat.suffix}</span>
                </div>
                
                {/* Label */}
                <div className="stat-label">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Token Info Card */}
          <div className="relative animate-fade-in-right">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-2xl blur opacity-25"></div>
            
            {/* Main Card */}
            <div className="relative card card-spacious space-y-6">
              {/* Header */}
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold gradient-text">Token Information</h3>
                <p className="text-secondary">Complete tokenomics and utility overview</p>
              </div>

              {/* Token Details */}
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-tertiary rounded-xl">
                  <span className="text-secondary">Token Name</span>
                  <span className="text-primary font-semibold">{poolDetails?.depositToken?.name || "MECOIN"}</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-tertiary rounded-xl">
                  <span className="text-secondary">Symbol</span>
                  <span className="text-primary font-semibold font-mono">{poolDetails?.depositToken?.symbol || "MECOIN"}</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-tertiary rounded-xl">
                  <span className="text-secondary">Network</span>
                  <span className="text-primary font-semibold">Polygon</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-tertiary rounded-xl">
                  <span className="text-secondary">Contract Type</span>
                  <span className="text-primary font-semibold">ERC-20</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-primary mb-3">Key Features</h4>
                {[
                  "🎮 Play-to-Earn Gaming",
                  "🎨 NFT Marketplace",
                  "💰 Staking Rewards",
                  "🔄 Decentralized Swap",
                  "🎁 Community Airdrops",
                  "🔐 Secure Wallet"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 text-secondary">
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4">
                <button className="w-full btn btn-primary">
                  View on Explorer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="inline-flex items-center space-x-4 px-6 py-3 glass rounded-xl">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-secondary">Smart contracts audited by leading security firms</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token;