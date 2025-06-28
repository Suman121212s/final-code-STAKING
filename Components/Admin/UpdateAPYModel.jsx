import React, { useState } from "react";

//INTERNAL IMPORT
import { IoMdClose } from "../ReactICON";

const UpdateModel = ({ poolDetails, setLoader, modifyPool, modifyPoolID }) => {
  const [amount, setAmount] = useState();

  const CALLING_FUNCTION_MODIFY_POOL = async (modifyPoolID, amount) => {
    setLoader(true);
    const receipt = await modifyPool(modifyPoolID, amount);
    if (receipt) {
      console.log(receipt);
      setLoader(false);
      window.location.reload();
    }
    setLoader(false);
  };

  return (
    <div
      className="modal modal--auto fade"
      id="modal-apool"
      tabIndex={-1}
      aria-labelledby="modal-apool"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal__content">
            <button
              className="modal__close"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="ti ti-x">
                <IoMdClose />
              </i>
            </button>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="text-2xl font-bold text-primary">Update Pool APY</h4>
              <p className="text-secondary">
                Modify the Annual Percentage Yield for staking pool #{String(modifyPoolID).padStart(2, '0')}
              </p>
            </div>

            <div className="space-y-6">
              {/* Current Pool Info */}
              <div className="p-4 bg-tertiary rounded-xl border border-border-secondary">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-secondary">Current APY</div>
                    <div className="text-lg font-bold text-primary font-mono">
                      {poolDetails?.poolInfoArray?.[modifyPoolID]?.apy || 0}%
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-secondary">Pool ID</div>
                    <div className="text-lg font-bold text-primary font-mono">
                      #{String(modifyPoolID).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Input Field */}
              <div className="form-group">
                <label htmlFor="apyAmount" className="form-label flex items-center space-x-2">
                  <span>📈</span>
                  <span>New APY Percentage</span>
                </label>
                <input
                  id="apyAmount"
                  type="text"
                  name="apyAmount"
                  className="form-control"
                  placeholder="Enter new APY percentage (e.g., 15)"
                  onChange={(e) => setAmount(e.target.value)}
                />
                <div className="text-xs text-muted mt-2">
                  Enter the new APY percentage (without % symbol)
                </div>
              </div>

              {/* Preview */}
              {amount && (
                <div className="p-4 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-secondary">New APY will be:</span>
                    <span className="text-2xl font-bold gradient-text font-mono">{amount}%</span>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <button
                onClick={() => CALLING_FUNCTION_MODIFY_POOL(modifyPoolID, amount)}
                className="w-full btn btn-primary btn-lg bg-gradient-to-r from-primary-500 to-secondary-500 group"
                disabled={!amount}
              >
                <span>📈</span>
                <span>Update APY</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModel;