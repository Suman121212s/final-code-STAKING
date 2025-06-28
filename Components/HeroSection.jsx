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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-300">Live on Polygon Network</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">MECOIN</span>
                <br />
                <span className="text-white">DeFi Staking</span>
                <br />
                <span className="text-gray-300 text-3xl lg:text-4xl">Platform</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                Stake your tokens and earn up to <span className="text-blue-400 font-bold">150% APY</span> with our 
                secure, audited smart contracts. Join thousands of users earning passive income.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                data-bs-target="#modal-deposit1"
                type="button"
                data-bs-toggle="modal"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
              >
                <span className="relative z-10">Buy {tokenDetails?.symbol || "MECOIN"} Token</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button
                onClick={() => addTokenToMetaMask()}
                className="px-8 py-4 border-2 border-gray-600 text-white rounded-xl font-semibold text-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
              >
                Add to MetaMask
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">$2.5M+</div>
                <div className="text-sm text-gray-400">Total Value Locked</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">15K+</div>
                <div className="text-sm text-gray-400">Active Stakers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">150%</div>
                <div className="text-sm text-gray-400">Max APY</div>
              </div>
            </div>
          </div>

          {/* Right Content - ICO Card */}
          <div className="animate-fade-in-right">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25"></div>
              
              {/* Main Card */}
              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 space-y-6">
                {/* Header */}
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/30 rounded-full">
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-pink-300">ICO LIVE</span>
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">
                    {tokenDetails?.symbol || "MECOIN"} Token Sale
                  </h3>
                  <p className="text-gray-400">Secure your tokens at presale price</p>
                </div>

                {/* Price */}
                <div className="text-center py-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                  <div className="text-3xl font-bold text-white">
                    {tokenDetails?.tokenPrice || "0.002"} {CURRENCY}
                  </div>
                  <div className="text-sm text-gray-400">per {tokenDetails?.symbol || "MECOIN"}</div>
                </div>

                {/* Progress */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">ICO Progress</span>
                    <span className="text-white font-medium">{percentage?.toFixed(1) || 0}%</span>
                  </div>
                  
                  <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${percentage || 0}%` }}
                    ></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Sold: {tokenDetails?.soldTokens || 0}</span>
                    <span>Total: {Number(tokenDetails?.tokenBal || 0) + Number(tokenDetails?.soldTokens || 0)}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <TiTick className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300">1.1% of deposit amount rewards</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <TiTick className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300">
                      {tokenDetails?.supply || "1,000,000"} {tokenDetails?.symbol || "MECOIN"} total supply
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <TiTick className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300">Audited smart contracts</span>
                  </div>
                </div>

                {/* Remaining Tokens */}
                <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                  <div className="text-sm text-gray-400 mb-1">Tokens Remaining</div>
                  <div className="text-xl font-bold text-white">
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