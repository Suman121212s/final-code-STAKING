import React, { useState } from "react";

//INTERNAL IMPORT
import ButtonCmp from "./RegularComp/ButtonCmp";
import InputField from "./RegularComp/InputField";
import ClickButton from "./RegularComp/ClickButton";
import Title from "./RegularComp/Title";

const Transfer = ({ poolDetails, transferToken, address, setLoader }) => {
  const [amount, setAmount] = useState();
  const [transferAddress, setTransferAddress] = useState();

  const CALLING_FUNCTION = async (amount, transferAddress) => {
    setLoader(true);
    const receipt = await transferToken(amount, transferAddress);
    if (receipt) {
      console.log(receipt);
      setLoader(false);
      window.location.reload();
    }
    setLoader(false);
  };

  return (
    <div className="tab-pane fade" id="tab-4" role="tabpanel">
      <div className="card card-spacious">
        <Title title="Token Transfer" icon="💸" />
        
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Navigation & Info */}
          <div className="lg:col-span-1">
            <div className="card">
              <h4 className="text-lg font-semibold text-primary mb-4">Transfer Info</h4>
              
              {/* Available Supply */}
              <div className="space-y-3 mb-6">
                <div className="p-3 bg-tertiary rounded-lg">
                  <div className="text-sm text-secondary">Available Supply</div>
                  <div className="text-lg font-bold text-primary font-mono">
                    {poolDetails?.contractTokenBalance?.toString().slice(0, 8)}
                  </div>
                  <div className="text-xs text-secondary">
                    {poolDetails?.depositToken.symbol}
                  </div>
                </div>
                
                <div className="p-3 bg-tertiary rounded-lg">
                  <div className="text-sm text-secondary">Your Balance</div>
                  <div className="text-lg font-bold text-primary font-mono">
                    {poolDetails?.depositToken.balance?.slice(0, 8)}
                  </div>
                  <div className="text-xs text-secondary">
                    {poolDetails?.depositToken.symbol}
                  </div>
                </div>
              </div>
              
              {/* Warning */}
              <div className="p-4 bg-tertiary rounded-xl border border-border-secondary">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <h5 className="font-semibold text-warning">Important</h5>
                    <p className="text-xs text-secondary">Double-check recipient address before transfer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="card">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💸</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Transfer Tokens</h3>
                  <p className="text-secondary">Send tokens to another wallet or contract</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Available Supply Display */}
                <InputField
                  size="12"
                  type="text"
                  title="Available Supply"
                  name="availableSupply"
                  disabled={true}
                  value={`${poolDetails?.contractTokenBalance?.toString().slice(0, 8)} ${poolDetails?.depositToken.symbol}`}
                  icon="🏦"
                />

                {/* Amount Input */}
                <InputField
                  size="12"
                  type="text"
                  title="Transfer Amount"
                  name="transferAmount"
                  placeholder="Enter amount to transfer"
                  handleChange={(e) => setAmount(e.target.value)}
                  icon="💰"
                />

                {/* Recipient Address */}
                <InputField
                  size="12"
                  type="text"
                  title="Recipient Address"
                  name="recipientAddress"
                  placeholder="0x... (wallet or contract address)"
                  handleChange={(e) => setTransferAddress(e.target.value)}
                  icon="📍"
                />

                {/* Transfer Summary */}
                {amount && transferAddress && (
                  <div className="p-4 bg-tertiary rounded-xl border border-border-secondary">
                    <h4 className="font-semibold text-primary mb-3">Transfer Summary</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-secondary">Amount:</span>
                        <span className="text-primary font-mono">{amount} {poolDetails?.depositToken.symbol}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary">To:</span>
                        <span className="text-primary font-mono">{transferAddress.slice(0, 10)}...{transferAddress.slice(-8)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary">Token:</span>
                        <span className="text-primary">{poolDetails?.depositToken.symbol}</span>
                      </div>
                    </div>
                  </div>
                )}

                <ClickButton
                  name={`Transfer ${poolDetails?.depositToken.symbol}`}
                  handleClick={() => CALLING_FUNCTION(amount, transferAddress)}
                  icon="💸"
                  gradient="from-primary-500 to-secondary-500"
                  disabled={!amount || !transferAddress}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;