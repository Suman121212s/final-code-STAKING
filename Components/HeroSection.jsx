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
    <section id="home" className="hero">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-secondary">Live on Polygon Network</span>
              </div>
              
              <h1 className="hero-title">
                <span className="gradient-text">MECOIN</span>
                <br />
                <span className="text-primary">DeFi Staking</span>
                <br />
                <span className="text-secondary text-4xl lg:text-5xl">Platform</span>
              </h1>
              
              <p className="hero-subtitle">
                Stake your tokens and earn up to <span className="text-info font-bold">150% APY</span> with our 
                secure, audited smart contracts. Join thousands of users earning passive income.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                data-bs-target="#modal-deposit1"
                type="button"
                data-bs-toggle="modal"
                className="btn btn-primary btn-lg group"
              >
                <span>Buy {tokenDetails?.symbol || "MECOIN"} Token</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <button
                onClick={() => addTokenToMetaMask()}
                className="btn btn-outline btn-lg"
              >
                Add to MetaMask
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="stat-value text-2xl">$2.5M+</div>
                <div className="stat-label">Total Value Locked</div>
              </div>
              <div className="text-center">
                <div className="stat-value text-2xl">15K+</div>
                <div className="stat-label">Active Stakers</div>
              </div>
              <div className="text-center">
                <div className="stat-value text-2xl">150%</div>
                <div className="stat-label">Max APY</div>
              </div>
            </div>
          </div>

          {/* Right Content - ICO Card */}
          <div className="animate-fade-in-right">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-2xl blur opacity-25"></div>
              
              {/* Main Card */}
              <div className="relative card card-spacious space-y-6">
                {/* Header */}
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-secondary-500/20 to-accent-500/20 border border-secondary-500/30 rounded-full">
                    <div className="w-2 h-2 bg-secondary-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-secondary-300">ICO LIVE</span>
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">
                    {tokenDetails?.symbol || "MECOIN"} Token Sale
                  </h3>
                  <p className="text-secondary">Secure your tokens at presale price</p>
                </div>

                {/* Price */}
                <div className="text-center py-6 glass rounded-xl border border-primary-500/20">
                  <div className="text-4xl font-bold text-primary font-mono">
                    {tokenDetails?.tokenPrice || "0.002"} {CURRENCY}
                  </div>
                  <div className="text-sm text-secondary mt-1">per {tokenDetails?.symbol || "MECOIN"}</div>
                </div>

                {/* Progress */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary">ICO Progress</span>
                    <span className="text-primary font-medium font-mono">{percentage?.toFixed(1) || 0}%</span>
                  </div>
                  
                  <div className="progress">
                    <div 
                      className="progress-bar"
                      style={{ width: `${percentage || 0}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-secondary">
                    <span>Sold: {tokenDetails?.soldTokens || 0}</span>
                    <span>Total: {Number(tokenDetails?.tokenBal || 0) + Number(tokenDetails?.soldTokens || 0)}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center">
                      <TiTick className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-secondary">1.1% of deposit amount rewards</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center">
                      <TiTick className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-secondary">
                      {tokenDetails?.supply || "1,000,000"} {tokenDetails?.symbol || "MECOIN"} total supply
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center">
                      <TiTick className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-secondary">Audited smart contracts</span>
                  </div>
                </div>

                {/* Remaining Tokens */}
                <div className="text-center p-4 bg-tertiary rounded-xl border border-border-secondary">
                  <div className="text-sm text-secondary mb-1">Tokens Remaining</div>
                  <div className="text-xl font-bold text-primary font-mono">
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