import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";

import { LOAD_TOKEN_ICO } from "../../Context/constants";
import {
  UPDATE_TOKEN,
  UPDATE_TOKEN_PRICE,
  TOKEN_WITHDRAW,
} from "../../Context/index";

import ButtonCmp from "./RegularComp/ButtonCmp";
import InputField from "./RegularComp/InputField";
import ClickButton from "./RegularComp/ClickButton";
import Title from "./RegularComp/Title";

const CURRENCY = process.env.NEXT_PUBLIC_CURRENCY;
const ADMIN_ADDRESS = process.env.NEXT_PUBLIC_ADMIN_ADDRESS;

const ICOToken = ({ setLoader }) => {
  const { address } = useAccount();
  const [tokenDetails, setTokenDetails] = useState();
  const [updateToken, setUpdateToken] = useState();
  const [updatePrice, setUpdatePrice] = useState();

  useEffect(() => {
    const loadToken = async () => {
      const token = await LOAD_TOKEN_ICO();
      setTokenDetails(token);
      console.log(token);
    };

    loadToken();
  }, [address]);

  const CALLING_FUNCTION_UPDATE_TOKEN = async (updateToken) => {
    setLoader(true);
    const receipt = await UPDATE_TOKEN(updateToken);
    if (receipt) {
      setLoader(false);
      window.location.reload();
    }
    setLoader(false);
  };

  const CALLING_FUNCTION_UPDATE_PRICE = async (updatePrice) => {
    setLoader(true);
    const receipt = await UPDATE_TOKEN_PRICE(updatePrice);
    if (receipt) {
      setLoader(false);
      window.location.reload();
    }
    setLoader(false);
  };

  const CALLING_FUNCTION_TOKEN_WITHDRAW = async () => {
    setLoader(true);
    const receipt = await TOKEN_WITHDRAW();
    if (receipt) {
      setLoader(false);
      window.location.reload();
    }
    setLoader(false);
  };

  const tabItems = [
    { name: "Update Token", tab: "f9", icon: "🔄", active: true },
    { name: "Update Token Price", tab: "f10", icon: "💰" },
    { name: "Withdraw Token", tab: "f11", icon: "💸" },
  ];

  return (
    <div className="tab-pane fade" id="tab-6" role="tabpanel">
      <div className="card card-spacious">
        <Title title="ICO Token Management" icon="🪙" />
        
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Navigation */}
          <div className="lg:col-span-1">
            <div className="card">
              <h4 className="text-lg font-semibold text-primary mb-4">Actions</h4>
              <ul className="space-y-2" role="tablist">
                {tabItems.map((item, index) => (
                  <ButtonCmp
                    key={index}
                    name={item.name}
                    tab={item.tab}
                    icon={item.icon}
                    styleClass={item.active ? "active" : ""}
                  />
                ))}
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="tab-content space-y-8">
              {/* Update Token */}
              <div className="tab-pane fade show active" id="tab-f9" role="tabpanel">
                <div className="card">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🔄</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">Update Token Address</h3>
                      <p className="text-secondary">Modify the token address in ICO contract</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <InputField
                      size="12"
                      type="text"
                      title="Token Address"
                      name="tokenAddress"
                      placeholder={`${tokenDetails?.token.symbol} ${tokenDetails?.token.name}` || "Enter token address"}
                      handleChange={(e) => setUpdateToken(e.target.value)}
                      icon="🏷️"
                    />

                    <ClickButton
                      name="Update Token Address"
                      handleClick={() => CALLING_FUNCTION_UPDATE_TOKEN(updateToken)}
                      icon="🔄"
                      gradient="from-primary-500 to-secondary-500"
                    />
                  </div>
                </div>
              </div>

              {/* Update Price */}
              <div className="tab-pane fade" id="tab-f10" role="tabpanel">
                <div className="card">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">Update Token Price</h3>
                      <p className="text-secondary">Set new price for ICO token sale</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <InputField
                      size="12"
                      type="text"
                      title="Token Price"
                      name="tokenPrice"
                      placeholder={`${tokenDetails?.tokenPrice} ${CURRENCY}` || "Enter price"}
                      handleChange={(e) => setUpdatePrice(e.target.value)}
                      icon="💰"
                    />

                    <ClickButton
                      name="Update Price"
                      handleClick={() => CALLING_FUNCTION_UPDATE_PRICE(updatePrice)}
                      icon="💰"
                      gradient="from-accent-500 to-primary-500"
                    />
                  </div>
                </div>
              </div>

              {/* Withdraw Token */}
              <div className="tab-pane fade" id="tab-f11" role="tabpanel">
                <div className="card">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-warning to-error rounded-xl flex items-center justify-center">
                      <span className="text-2xl">💸</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">Withdraw Tokens</h3>
                      <p className="text-secondary">Withdraw all tokens from ICO contract</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 bg-tertiary rounded-xl border border-border-secondary">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-2xl">⚠️</span>
                        <div>
                          <h4 className="font-semibold text-warning">Warning</h4>
                          <p className="text-sm text-secondary">This action will withdraw all remaining tokens from the ICO contract.</p>
                        </div>
                      </div>
                    </div>

                    <ClickButton
                      name="Withdraw All Tokens"
                      handleClick={() => CALLING_FUNCTION_TOKEN_WITHDRAW()}
                      icon="💸"
                      gradient="from-warning to-error"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ICOToken;