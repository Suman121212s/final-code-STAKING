import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
const CURRENCY = process.env.NEXT_PUBLIC_CURRENCY;

import { LOAD_TOKEN_ICO } from "../Context/constants";
import { TiTick } from "./ReactICON/index";

const HeroSection = ({ poolDetails, addTokenToMetaMask }) => {
  const { address } = useAccount();
  const [percentage, setPercentage] = useState(0);
  const [tokenDetails, setTokenDetails] = useState();

  useEffect(() => {
    if (address) {
      const loadToken = async () => {
        const token = await LOAD_TOKEN_ICO();
        setTokenDetails(token);
      };
      loadToken();
    }
  }, [address]);

  useEffect(() => {
    const calculatePercentage = () => {
      const tokenSold = tokenDetails?.soldTokens ?? 0;
      const tokenTotalSupply =
        tokenDetails?.soldTokens + Number(tokenDetails?.tokenBal) * 1 ?? 1;

      const percentageNew = (tokenSold / tokenTotalSupply) * 100;

      if (tokenTotalSupply === 0) {
        console.error(
          "Token sale balance is zero, cannot calculate percentage."
        );
      } else {
        setPercentage(percentageNew);
      }
    };

    const timer = setTimeout(calculatePercentage, 1000);

    return () => clearTimeout(timer);
  }, [tokenDetails]);

  return (
    <section id="home" className="hero relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full backdrop-blur-sm">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-green-400">Live on Polygon Network</span>
              </div>
              
              <h1 className="hero-title text-6xl lg:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  MECOIN
                </span>
                <br />
                <span className="text-white">DeFi Staking</span>
                <br />
                <span className="text-gray-300 text-5xl lg:text-6xl">Revolution</span>
              </h1>
              
              <p className="hero-subtitle text-xl text-gray-300 leading-relaxed">
                Experience the future of DeFi with our revolutionary staking platform. 
                Earn up to <span className="text-cyan-400 font-bold text-2xl">150% APY</span> with 
                military-grade security and instant rewards.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                data-bs-target="#modal-deposit1"
                type="button"
                data-bs-toggle="modal"
                className="btn btn-primary btn-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-2xl hover:shadow-blue-500/25 group"
              >
                <span>Buy {tokenDetails?.symbol || "MECOIN"} Token</span>
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <button
                onClick={() => addTokenToMetaMask()}
                className="btn btn-outline btn-xl border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
              >
                Add to MetaMask
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center group">
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent text-3xl font-black font-mono group-hover:scale-110 transition-transform">
                  $2.5M+
                </div>
                <div className="text-gray-400 text-sm font-medium mt-1">Total Value Locked</div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent text-3xl font-black font-mono group-hover:scale-110 transition-transform">
                  15K+
                </div>
                <div className="text-gray-400 text-sm font-medium mt-1">Active Stakers</div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-3xl font-black font-mono group-hover:scale-110 transition-transform">
                  150%
                </div>
                <div className="text-gray-400 text-sm font-medium mt-1">Max APY</div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced ICO Card */}
          <div className="animate-fade-in-right">
            <div className="relative group">
              {/* Enhanced Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              
              {/* Main Card */}
              <div className="relative bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-500/50 rounded-full">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold text-purple-300">ICO LIVE NOW</span>
                  </div>
                  <h3 className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {tokenDetails?.symbol || "MECOIN"} Token Sale
                  </h3>
                  <p className="text-gray-300">Secure your tokens at presale price</p>
                </div>

                {/* Enhanced Price Display */}
                <div className="text-center py-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
                  <div className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-mono">
                    {tokenDetails?.tokenPrice || "0.002"} {CURRENCY}
                  </div>
                  <div className="text-sm text-gray-400 mt-2">per {tokenDetails?.symbol || "MECOIN"}</div>
                </div>

                {/* Enhanced Progress */}
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">ICO Progress</span>
                    <span className="text-cyan-400 font-bold font-mono">{percentage?.toFixed(1) || 0}%</span>
                  </div>
                  
                  <div className="relative h-4 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                      style={{ width: `${percentage || 0}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Sold: <span className="text-green-400 font-mono">{tokenDetails?.soldTokens || 0}</span></span>
                    <span>Total: <span className="text-blue-400 font-mono">{Number(tokenDetails?.tokenBal || 0) + Number(tokenDetails?.soldTokens || 0)}</span></span>
                  </div>
                </div>

                {/* Enhanced Features */}
                <div className="space-y-4">
                  {[
                    "1.1% of deposit amount rewards",
                    `${tokenDetails?.supply || "1,000,000"} ${tokenDetails?.symbol || "MECOIN"} total supply`,
                    "Audited smart contracts"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-colors">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <TiTick className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Enhanced Remaining Tokens */}
                <div className="text-center p-6 bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="text-sm text-gray-400 mb-2">Tokens Remaining</div>
                  <div className="text-2xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-mono">
                    {tokenDetails?.tokenBal || "0"} {tokenDetails?.symbol || "MECOIN"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;