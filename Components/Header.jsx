import React, { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import toast, { Toaster } from "react-hot-toast";

//INTERNAL IMPORT
import {
  FaWallet,
  MdAdminPanelSettings,
  MdGeneratingTokens,
} from "../Components/ReactICON/index";
import ThemeToggle from "./ThemeToggle";

const ADMIN_ADDRESS = process.env.NEXT_PUBLIC_ADMIN_ADDRESS;

const Header = ({ page }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { address } = useAccount();

  const navigation = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Staking",
      link: "#staking",
    },
    {
      name: "Analytics",
      link: "#crypto",
    },
    {
      name: "Rewards",
      link: "#partners",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`navbar ${isScrolled ? 'shadow-xl' : ''}`}>
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <a href="/" className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-xl">
                  <span className="text-white font-black text-xl">M</span>
                </div>
                <span className="navbar-brand text-3xl">MECOIN</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigation.map((item, index) => (
                <a
                  key={index}
                  href={
                    page === "activity"
                      ? "/"
                      : page === "admin"
                      ? "/"
                      : `${item.link}`
                  }
                  className="nav-link relative px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* ICO Button */}
              <button
                data-bs-target="#modal-deposit1"
                type="button"
                data-bs-toggle="modal"
                className="hidden sm:flex btn btn-secondary btn-sm bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30 hover:from-purple-500/30 hover:to-pink-500/30"
              >
                <MdGeneratingTokens className="w-4 h-4" />
                <span>MECOIN ICO</span>
              </button>

              {/* Connect Wallet */}
              <div className="connect-wallet-wrapper">
                <ConnectButton.Custom>
                  {({
                    account,
                    chain,
                    openAccountModal,
                    openChainModal,
                    openConnectModal,
                    authenticationStatus,
                    mounted,
                  }) => {
                    const ready = mounted && authenticationStatus !== 'loading';
                    const connected =
                      ready &&
                      account &&
                      chain &&
                      (!authenticationStatus ||
                        authenticationStatus === 'authenticated');

                    return (
                      <div
                        {...(!ready && {
                          'aria-hidden': true,
                          'style': {
                            opacity: 0,
                            pointerEvents: 'none',
                            userSelect: 'none',
                          },
                        })}
                      >
                        {(() => {
                          if (!connected) {
                            return (
                              <button
                                onClick={openConnectModal}
                                type="button"
                                className="btn btn-primary bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
                              >
                                <FaWallet className="w-4 h-4" />
                                <span>Connect Wallet</span>
                              </button>
                            );
                          }

                          if (chain.unsupported) {
                            return (
                              <button
                                onClick={openChainModal}
                                type="button"
                                className="btn bg-red-500 text-white hover:bg-red-600 shadow-lg"
                              >
                                Wrong network
                              </button>
                            );
                          }

                          return (
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={openChainModal}
                                type="button"
                                className="btn btn-ghost btn-sm bg-gray-500/10 hover:bg-gray-500/20 border border-gray-500/20"
                              >
                                {chain.hasIcon && (
                                  <div className="w-4 h-4">
                                    {chain.iconUrl && (
                                      <img
                                        alt={chain.name ?? 'Chain icon'}
                                        src={chain.iconUrl}
                                        className="w-4 h-4 rounded"
                                      />
                                    )}
                                  </div>
                                )}
                                {chain.name}
                              </button>

                              <button
                                onClick={openAccountModal}
                                type="button"
                                className="btn btn-secondary btn-sm font-mono bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-500/30"
                              >
                                {account.displayName}
                                {account.displayBalance
                                  ? ` (${account.displayBalance})`
                                  : ''}
                              </button>
                            </div>
                          );
                        })()}
                      </div>
                    );
                  }}
                </ConnectButton.Custom>
              </div>

              {/* Admin Panel Link */}
              {address?.toLowerCase() === ADMIN_ADDRESS?.toLowerCase() && (
                <a
                  href="/admin"
                  className="btn btn-outline btn-sm bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-500/30 hover:from-orange-500/30 hover:to-red-500/30"
                >
                  <MdAdminPanelSettings className="w-4 h-4" />
                  <span className="hidden sm:inline">Admin</span>
                </a>
              )}

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden btn btn-ghost btn-sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-500/20">
              <nav className="flex flex-col space-y-2 mt-4">
                {navigation.map((item, index) => (
                  <a
                    key={index}
                    href={
                      page === "activity"
                        ? "/"
                        : page === "admin"
                        ? "/"
                        : `${item.link}`
                    }
                    className="nav-link px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <button
                  data-bs-target="#modal-deposit1"
                  type="button"
                  data-bs-toggle="modal"
                  className="btn btn-secondary btn-sm mt-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MdGeneratingTokens className="w-4 h-4" />
                  <span>MECOIN ICO</span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;