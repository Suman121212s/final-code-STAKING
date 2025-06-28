import React, { useState } from "react";

//INTERNAL IMPORT
import { FaRegCopy, FaEdit } from "../ReactICON";
import { SHORTEN_ADDRESS, copyAddress } from "../../Context/index";

import ButtonCmp from "./RegularComp/ButtonCmp";
import InputField from "./RegularComp/InputField";
import ClickButton from "./RegularComp/ClickButton";
import Title from "./RegularComp/Title";

const Pool = ({ poolDetails, createPool, setLoader, setModifyPoolID }) => {
  const [pool, setPool] = useState({
    _depositToken: "",
    _rewardToken: "",
    _apy: "",
    _lockDays: "",
  });

  const poolArray = poolDetails?.poolInfoArray ?? [];

  const CALLING_FUNCTION = async (pool) => {
    setLoader(true);
    console.log(pool);
    const receipt = await createPool(pool);
    if (receipt) {
      console.log(receipt);
      setLoader(false);
      window.location.reload();
    }
    setLoader(false);
  };

  const tabItems = [
    { name: "Add Pool", tab: "f6", icon: "➕", active: true },
    { name: "Pool List", tab: "f7", icon: "📋" },
  ];

  return (
    <div className="tab-pane fade" id="tab-5" role="tabpanel">
      <div className="card card-spacious">
        <Title title="Pool Management" icon="🏊‍♂️" />
        
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
              
              {/* Pool Stats */}
              <div className="mt-6 space-y-3">
                <div className="p-3 bg-tertiary rounded-lg">
                  <div className="text-sm text-secondary">Total Pools</div>
                  <div className="text-lg font-bold text-primary font-mono">
                    {poolArray.length}
                  </div>
                </div>
                <div className="p-3 bg-tertiary rounded-lg">
                  <div className="text-sm text-secondary">Total Staked</div>
                  <div className="text-lg font-bold text-primary font-mono">
                    {poolDetails?.totalDepositAmount || 0}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="tab-content space-y-8">
              {/* Add Pool */}
              <div className="tab-pane fade show active" id="tab-f6" role="tabpanel">
                <div className="card">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">➕</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">Create New Pool</h3>
                      <p className="text-secondary">Provide pool details to create a new staking pool</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <InputField
                      size="12"
                      type="text"
                      title="Stake Token Address"
                      name="depositToken"
                      placeholder="0x..."
                      handleChange={(e) =>
                        setPool({ ...pool, _depositToken: e.target.value })
                      }
                      icon="🪙"
                    />
                    
                    <InputField
                      size="12"
                      type="text"
                      title="Reward Token Address"
                      name="rewardToken"
                      placeholder="0x..."
                      handleChange={(e) =>
                        setPool({ ...pool, _rewardToken: e.target.value })
                      }
                      icon="🎁"
                    />
                    
                    <InputField
                      size="12"
                      type="text"
                      title="APY Percentage"
                      name="apy"
                      placeholder="15"
                      handleChange={(e) =>
                        setPool({ ...pool, _apy: e.target.value })
                      }
                      icon="📈"
                    />
                    
                    <InputField
                      size="12"
                      type="text"
                      title="Lock Days"
                      name="lockDays"
                      placeholder="30"
                      handleChange={(e) =>
                        setPool({ ...pool, _lockDays: e.target.value })
                      }
                      icon="🔒"
                    />
                  </div>

                  <div className="mt-8">
                    <ClickButton
                      name="Create Pool"
                      handleClick={() => CALLING_FUNCTION(pool)}
                      icon="➕"
                      gradient="from-primary-500 to-secondary-500"
                    />
                  </div>
                </div>
              </div>

              {/* Pool List */}
              <div className="tab-pane fade" id="tab-f7" role="tabpanel">
                <div className="card">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">📋</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">All Pools</h3>
                      <p className="text-secondary">Manage existing staking pools</p>
                    </div>
                  </div>

                  <div className="overflow-x-auto scrollable-div">
                    <table className="table w-full">
                      <thead>
                        <tr>
                          <th>Stake Token</th>
                          <th>Reward Token</th>
                          <th>Deposited</th>
                          <th>APY</th>
                          <th>Lock Days</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {poolArray.map((pool, index) => (
                          <tr key={index} className="hover:bg-glass">
                            <td>
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">
                                    {pool.depositToken.symbol?.charAt(0)}
                                  </span>
                                </div>
                                <div>
                                  <div className="font-medium text-primary">
                                    {SHORTEN_ADDRESS(pool.depositTokenAddress)}
                                  </div>
                                  <div className="text-sm text-secondary">
                                    {pool.depositToken.symbol}
                                  </div>
                                </div>
                                <button
                                  onClick={() => copyAddress(pool.depositTokenAddress)}
                                  className="text-secondary hover:text-primary transition-colors"
                                >
                                  <FaRegCopy className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                            
                            <td>
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">
                                    {pool.rewardToken.symbol?.charAt(0)}
                                  </span>
                                </div>
                                <div>
                                  <div className="font-medium text-primary">
                                    {SHORTEN_ADDRESS(pool.rewardTokenAddress)}
                                  </div>
                                  <div className="text-sm text-secondary">
                                    {pool.rewardToken.symbol}
                                  </div>
                                </div>
                                <button
                                  onClick={() => copyAddress(pool.rewardTokenAddress)}
                                  className="text-secondary hover:text-primary transition-colors"
                                >
                                  <FaRegCopy className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                            
                            <td>
                              <div className="font-mono text-success font-semibold">
                                {pool.depositedAmount} {pool.depositToken.symbol}
                              </div>
                            </td>
                            
                            <td>
                              <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-success/20 to-accent-500/20 border border-success/30 rounded-full">
                                <span className="text-success font-semibold font-mono">
                                  {pool.apy}%
                                </span>
                              </div>
                            </td>
                            
                            <td>
                              <div className="font-mono text-primary">
                                {pool.lockDays} days
                              </div>
                            </td>
                            
                            <td>
                              <button
                                className="btn btn-ghost btn-sm"
                                data-bs-target="#modal-apool"
                                type="button"
                                data-bs-toggle="modal"
                                onClick={() => setModifyPoolID(index)}
                              >
                                <FaEdit className="w-4 h-4" />
                                <span>Update APY</span>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default Pool;