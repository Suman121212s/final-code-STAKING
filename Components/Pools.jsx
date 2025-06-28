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
  const poolColors = ["blue", "purple", "emerald"];
  const poolGradients = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500", 
    "from-emerald-500 to-teal-500"
  ];

  return (
    <section id="staking" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full">
            <span className="text-sm font-medium text-blue-300">STAKING POOLS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="gradient-text">Maximize</span> Your Returns
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our carefully crafted staking pools designed to maximize your returns 
            while maintaining security and flexibility.
          </p>
        </div>

        {/* Pools Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {poolArray.slice(0, 3).map((pool, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${poolGradients[index]} rounded-2xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-500`}></div>
              
              {/* Main Card */}
              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-gray-600 group-hover:transform group-hover:scale-105">
                
                {/* Pool Type Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 bg-gradient-to-r ${poolGradients[index]} bg-opacity-20 border border-${poolColors[index]}-500/30 rounded-full`}>
                    <span className="text-sm font-medium text-white">{poolTypes[index]}</span>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${poolGradients[index]} rounded-xl flex items-center justify-center`}>
                    <MdOutlineAttachMoney className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* APY Display */}
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {pool.apy}%
                  </div>
                  <div className="text-gray-400">Annual Percentage Yield</div>
                </div>

                {/* Pool Stats */}
                <div className="space-y-6 mb-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                      <div className="text-lg font-bold text-white">
                        {pool?.amount || "0"}
                      </div>
                      <div className="text-sm text-gray-400">Your Stake</div>
                    </div>
                    <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                      <div className="text-lg font-bold text-green-400">
                        {pool?.userReward || "0"}
                      </div>
                      <div className="text-sm text-gray-400">Rewards</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Lock Period</span>
                      <span className="text-white font-medium">{pool.lockDays} days</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Total Deposited</span>
                      <span className="text-white font-medium">
                        {pool?.depositedAmount} {pool?.depositToken.symbol}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Token Details */}
                <div className="space-y-3 mb-8 p-4 bg-gray-800/30 rounded-xl">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Stake Token:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium">{pool?.depositToken.symbol}</span>
                      <button 
                        onClick={() => navigator.clipboard.writeText(pool?.depositTokenAddress)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FaRegCopy className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Reward Token:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium">{pool?.rewardToken.symbol}</span>
                      <button 
                        onClick={() => navigator.clipboard.writeText(pool?.rewardTokenAddress)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FaRegCopy className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  className={`w-full py-4 bg-gradient-to-r ${poolGradients[index]} text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-${poolColors[index]}-500/25 hover:scale-105`}
                  data-bs-target="#modal-apool"
                  type="button"
                  data-bs-toggle="modal"
                  onClick={() => {
                    setPoolID(index);
                    setSelectedPool(pool);
                    setSelectedToken(pool);
                  }}
                >
                  Start Staking
                </button>

                {/* Popular Badge for middle pool */}
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-xl">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300">All pools are secured by audited smart contracts</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pools;