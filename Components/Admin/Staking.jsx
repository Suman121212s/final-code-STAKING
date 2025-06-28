import React, { useState } from "react";

//INTERNAL IMPORT
import ButtonCmp from "./RegularComp/ButtonCmp";
import InputField from "./RegularComp/InputField";
import ClickButton from "./RegularComp/ClickButton";
import Title from "./RegularComp/Title";

const Staking = ({ sweep, setLoader, poolDetails }) => {
  const [token, setToken] = useState({
    token: "",
    amount: "",
  });

  const CALLING_FUNCTION_SWEEP = async (token) => {
    setLoader(true);
    const receipt = await sweep(token);
    if (receipt) {
      console.log(receipt);
      setLoader(false);
      window.location.reload();
    }
    setLoader(false);
  };

  return (
    <div className="tab-pane fade" id="tab-3" role="tabpanel">
      <div className="card card-spacious">
        <Title title="Staking Management" icon="🔒" />
        
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Navigation */}
          <div className="lg:col-span-1">
            <div className="card">
              <h4 className="text-lg font-semibold text-primary mb-4">Actions</h4>
              <ul className="space-y-2" role="tablist">
                <ButtonCmp 
                  name="Sweep Tokens" 
                  tab="f4" 
                  icon="🧹" 
                  styleClass="active" 
                />
              </ul>
              
              {/* Info */}
              <div className="mt-6 p-4 bg-tertiary rounded-xl border border-border-secondary">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <h5 className="font-semibold text-warning">Warning</h5>
                    <p className="text-xs text-secondary">Sweep function withdraws tokens from contract</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab-f4" role="tabpanel">
                <div className="card">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-warning to-error rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🧹</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">Sweep Tokens</h3>
                      <p className="text-secondary">Withdraw staking tokens from the contract</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <InputField
                      size="12"
                      type="text"
                      title="Token Address"
                      name="tokenAddress"
                      placeholder="0x..."
                      handleChange={(e) =>
                        setToken({ ...token, token: e.target.value })
                      }
                      icon="🏷️"
                    />

                    <InputField
                      size="12"
                      type="text"
                      title="Amount"
                      name="amount"
                      placeholder={`${poolDetails?.contractTokenBalance} ${poolDetails?.depositToken.symbol}`}
                      handleChange={(e) =>
                        setToken({ ...token, amount: e.target.value })
                      }
                      icon="💰"
                    />
                  </div>

                  {/* Contract Balance Info */}
                  <div className="mb-6 p-4 bg-tertiary rounded-xl border border-border-secondary">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-primary">Contract Balance</h4>
                        <p className="text-sm text-secondary">Available tokens in contract</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary font-mono">
                          {poolDetails?.contractTokenBalance?.toString().slice(0, 8)}
                        </div>
                        <div className="text-sm text-secondary">
                          {poolDetails?.depositToken.symbol}
                        </div>
                      </div>
                    </div>
                  </div>

                  <ClickButton
                    name="Sweep Tokens"
                    handleClick={() => CALLING_FUNCTION_SWEEP(token)}
                    icon="🧹"
                    gradient="from-warning to-error"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staking;