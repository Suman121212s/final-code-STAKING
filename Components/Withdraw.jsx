import React from "react";
import { MdOutlineAttachMoney, FaRegCopy } from "./ReactICON/index";

const Withdraw = ({ setWithdrawPoolID, poolDetails }) => {
  const poolArray = poolDetails?.poolInfoArray ?? [];
  
  const poolGradients = [
    "from-green-400 to-emerald-500",
    "from-blue-400 to-cyan-500", 
    "from-purple-400 to-pink-500"
  ];

  const poolIcons = ["💰", "🎯", "⚡"];

  return (
    <section id="crypto" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full backdrop-blur-sm">
            <span className="text-sm font-bold text-green-300">REWARDS</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black">
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-500 bg-clip-text text-transparent">Claim</span>
            <br />
            <span className="text-white">Your Rewards</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Withdraw your staked tokens and claim accumulated rewards from our secure staking pools. 
            Your earnings are ready to be claimed anytime with instant processing.
          </p>
        </div>

        {/* Enhanced Rewards Grid */}
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
                
                {/* Enhanced Header */}
                <div className="flex justify-between items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${poolGradients[index]} rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500`}>
                    <span className="text-2xl">{poolIcons[index]}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Pool #{index + 1}</div>
                    <div className="text-xl font-black text-white font-mono">{pool.lockDays} Days</div>
                  </div>
                </div>

                {/* Enhanced Staked Amount */}
                <div className="text-center mb-10">
                  <div className={`text-5xl font-black bg-gradient-to-r ${poolGradients[index]} bg-clip-text text-transparent mb-3 font-mono`}>
                    {pool.amount || "0"}
                  </div>
                  <div className="text-gray-400 font-medium">{pool?.rewardToken.symbol} Staked</div>
                </div>

                {/* Enhanced Rewards Display */}
                <div className="text-center mb-10 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl backdrop-blur-sm">
                  <div className="text-sm text-green-300 mb-2 font-medium">Available Rewards</div>
                  <div className="text-4xl font-black text-green-400 font-mono">
                    {pool?.userReward || "0"} {pool?.rewardToken.symbol}
                  </div>
                  <div className="mt-2 text-xs text-green-300/70">Ready to claim instantly</div>
                </div>

                {/* Enhanced Pool Details */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-xl">
                    <span className="text-gray-400 text-sm">APY:</span>
                    <span className="text-white font-bold font-mono">{pool?.apy}%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-xl">
                    <span className="text-gray-400 text-sm">Last Reward:</span>
                    <span className="text-white font-bold font-mono">
                      {pool?.lastRewardAt} {pool?.rewardToken.symbol}
                    </span>
                  </div>
                </div>

                {/* Enhanced Token Addresses */}
                <div className="space-y-3 mb-8 p-4 bg-gray-800/30 rounded-2xl border border-gray-700/30">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Stake Token:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-mono bg-gray-700/50 px-2 py-1 rounded">
                        {pool?.depositToken.address.slice(0, 6)}...{pool?.depositToken.address.slice(-4)}
                      </span>
                      <button 
                        onClick={() => navigator.clipboard.writeText(pool?.depositTokenAddress)}
                        className="text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-gray-700/50"
                      >
                        <FaRegCopy className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Reward Token:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-mono bg-gray-700/50 px-2 py-1 rounded">
                        {pool?.rewardToken.address.slice(0, 6)}...{pool?.rewardToken.address.slice(-4)}
                      </span>
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

        {/* Enhanced Additional Info */}
        <div className="mt-20 text-center space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl backdrop-blur-sm">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 font-medium">Instant withdrawals available after lock period</span>
          </div>
          
          <div className="text-sm text-gray-400 max-w-3xl mx-auto bg-gray-800/30 p-6 rounded-2xl border border-gray-700/30">
            <strong className="text-yellow-400">⚠️ Important:</strong> Withdrawing before the lock period ends may result in penalty fees. 
            Rewards can be claimed at any time without penalties.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Withdraw;