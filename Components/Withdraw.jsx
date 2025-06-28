import React from "react";
import { MdOutlineAttachMoney, FaRegCopy } from "./ReactICON/index";

const Withdraw = ({ setWithdrawPoolID, poolDetails }) => {
  const poolArray = poolDetails?.poolInfoArray ?? [];
  
  const poolColors = ["blue", "purple", "emerald"];
  const poolGradients = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500", 
    "from-emerald-500 to-teal-500"
  ];

  return (
    <section id="crypto" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-full">
            <span className="text-sm font-medium text-emerald-300">REWARDS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="gradient-text">Claim</span> Your Rewards
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Withdraw your staked tokens and claim accumulated rewards from our secure staking pools. 
            Your earnings are ready to be claimed anytime.
          </p>
        </div>

        {/* Rewards Grid */}
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
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${poolGradients[index]} rounded-xl flex items-center justify-center`}>
                    <MdOutlineAttachMoney className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Pool #{index + 1}</div>
                    <div className="text-lg font-bold text-white">{pool.lockDays} Days</div>
                  </div>
                </div>

                {/* Staked Amount */}
                <div className="text-center mb-8">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {pool.amount || "0"}
                  </div>
                  <div className="text-gray-400">{pool?.rewardToken.symbol} Staked</div>
                </div>

                {/* Rewards Display */}
                <div className="text-center mb-8 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                  <div className="text-sm text-gray-400 mb-1">Available Rewards</div>
                  <div className="text-2xl font-bold text-green-400">
                    {pool?.userReward || "0"} {pool?.rewardToken.symbol}
                  </div>
                </div>

                {/* Pool Details */}
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">APY:</span>
                    <span className="text-white font-medium">{pool?.apy}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Last Reward:</span>
                    <span className="text-white font-medium">
                      {pool?.lastRewardAt} {pool?.rewardToken.symbol}
                    </span>
                  </div>
                </div>

                {/* Token Addresses */}
                <div className="space-y-2 mb-8 p-4 bg-gray-800/30 rounded-xl">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Stake Token:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-mono">
                        {pool?.depositToken.address.slice(0, 6)}...{pool?.depositToken.address.slice(-4)}
                      </span>
                      <button 
                        onClick={() => navigator.clipboard.writeText(pool?.depositTokenAddress)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FaRegCopy className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Reward Token:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-mono">
                        {pool?.rewardToken.address.slice(0, 6)}...{pool?.rewardToken.address.slice(-4)}
                      </span>
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
                  data-bs-target="#modal-node"
                  type="button"
                  data-bs-toggle="modal"
                  onClick={() => setWithdrawPoolID(index)}
                >
                  Withdraw / Claim
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center space-y-4">
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-xl">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300">Instant withdrawals available after lock period</span>
          </div>
          
          <div className="text-sm text-gray-400 max-w-2xl mx-auto">
            Note: Withdrawing before the lock period ends may result in penalty fees. 
            Rewards can be claimed at any time without penalties.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Withdraw;