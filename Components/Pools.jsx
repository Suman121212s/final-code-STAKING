import React from "react";
import { MdOutlineAttachMoney, FaRegCopy } from "./ReactICON/index";

const Pools = ({
  setPoolID,
  poolDetails,
  setSelectedPool,
  setSelectedToken,
}) => {
  const poolArray = poolDetails?.poolInfoArray ?? [];

  const poolTypes = ["Premium", "Standard", "Basic"];
  const poolGradients = [
    "from-yellow-400 via-orange-500 to-red-500",
    "from-blue-400 via-purple-500 to-pink-500", 
    "from-green-400 via-cyan-500 to-blue-500"
  ];

  const poolIcons = ["💎", "⭐", "🚀"];

  return (
    <section id="staking" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
            <span className="text-sm font-bold text-blue-300">STAKING POOLS</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Maximize</span>
            <br />
            <span className="text-white">Your Returns</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Choose from our carefully crafted staking pools designed to maximize your returns 
            while maintaining military-grade security and complete flexibility.
          </p>
        </div>

        {/* Enhanced Pools Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {poolArray.slice(0, 3).map((pool, index) => (
            <div
              key={index}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Enhanced Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${poolGradients[index]} rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>
              
              {/* Main Card */}
              <div className="relative bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 h-full transition-all duration-500 group-hover:transform group-hover:scale-105">
                
                {/* Pool Type Badge */}
                <div className="flex justify-between items-start mb-8">
                  <div className={`inline-flex items-center space-x-3 px-4 py-2 bg-gradient-to-r ${poolGradients[index]} bg-opacity-20 border border-current/30 rounded-full`}>
                    <span className="text-2xl">{poolIcons[index]}</span>
                    <span className="text-sm font-bold text-white">{poolTypes[index]}</span>
                  </div>
                  <div className={`w-16 h-16 bg-gradient-to-r ${poolGradients[index]} rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500`}>
                    <MdOutlineAttachMoney className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Enhanced APY Display */}
                <div className="text-center mb-10">
                  <div className={`text-6xl font-black bg-gradient-to-r ${poolGradients[index]} bg-clip-text text-transparent mb-3 font-mono`}>
                    {pool.apy}%
                  </div>
                  <div className="text-gray-400 font-medium">Annual Percentage Yield</div>
                </div>

                {/* Enhanced Pool Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-800/50 p-4 rounded-2xl border border-gray-700/50 text-center group-hover:bg-gray-800/70 transition-colors">
                    <div className="text-2xl font-bold text-white font-mono mb-1">
                      {pool?.amount || "0"}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Your Stake</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-2xl border border-gray-700/50 text-center group-hover:bg-gray-800/70 transition-colors">
                    <div className="text-2xl font-bold text-green-400 font-mono mb-1">
                      {pool?.userReward || "0"}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Rewards</div>
                  </div>
                </div>

                {/* Pool Details */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-xl">
                    <span className="text-gray-400 text-sm">Lock Period</span>
                    <span className="text-white font-bold font-mono">{pool.lockDays} days</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-xl">
                    <span className="text-gray-400 text-sm">Total Deposited</span>
                    <span className="text-white font-bold font-mono">
                      {pool?.depositedAmount} {pool?.depositToken.symbol}
                    </span>
                  </div>
                </div>

                {/* Enhanced Token Details */}
                <div className="space-y-3 mb-8 p-4 bg-gray-800/30 rounded-2xl border border-gray-700/30">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Stake Token:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-bold font-mono">{pool?.depositToken.symbol}</span>
                      <button 
                        onClick={() => navigator.clipboard.writeText(pool?.depositTokenAddress)}
                        className="text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-gray-700/50"
                      >
                        <FaRegCopy className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Reward Token:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-bold font-mono">{pool?.rewardToken.symbol}</span>
                      <button 
                        onClick={() => navigator.clipboard.writeText(pool?.rewardTokenAddress)}
                        className="text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-gray-700/50"
                      >
                        <FaRegCopy className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Enhanced Action Button */}
                <button
                  className={`w-full btn btn-primary btn-lg bg-gradient-to-r ${poolGradients[index]} hover:shadow-2xl hover:shadow-current/25 font-bold text-lg py-4 rounded-2xl transition-all duration-300 group-hover:scale-105`}
                  data-bs-target="#modal-apool"
                  type="button"
                  data-bs-toggle="modal"
                  onClick={() => {
                    setPoolID(index);
                    setSelectedPool(pool);
                    setSelectedToken(pool);
                  }}
                >
                  Start Staking Now
                </button>

                {/* Popular Badge for middle pool */}
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-black shadow-2xl animate-pulse">
                      🔥 MOST POPULAR
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Additional Info */}
        <div className="mt-20 text-center animate-fade-in-up">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl backdrop-blur-sm">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 font-medium">All pools are secured by audited smart contracts</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pools;