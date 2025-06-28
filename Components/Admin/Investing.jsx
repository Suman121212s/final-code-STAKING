import React from "react";
import ButtonCmp from "./RegularComp/ButtonCmp";
import Notification from "./Notification";
import Title from "./RegularComp/Title";

const Investing = ({ poolDetails }) => {
  return (
    <div className="tab-pane fade" id="tab-2" role="tabpanel">
      <div className="card card-spacious">
        <Title title="Investment Activity" icon="💹" />
        
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Navigation */}
          <div className="lg:col-span-1">
            <div className="card">
              <h4 className="text-lg font-semibold text-primary mb-4">Status</h4>
              <ul className="space-y-2" role="tablist">
                <ButtonCmp 
                  name="Active Investments" 
                  tab="f1" 
                  icon="📈" 
                  styleClass="active" 
                />
              </ul>
              
              {/* Quick Stats */}
              <div className="mt-6 space-y-3">
                <div className="p-3 bg-tertiary rounded-lg">
                  <div className="text-sm text-secondary">Total Investments</div>
                  <div className="text-lg font-bold text-primary font-mono">
                    {poolDetails?.notifications?.length || 0}
                  </div>
                </div>
                <div className="p-3 bg-tertiary rounded-lg">
                  <div className="text-sm text-secondary">Active Pools</div>
                  <div className="text-lg font-bold text-primary font-mono">
                    {poolDetails?.poolInfoArray?.length || 0}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab-f1" role="tabpanel">
                <div className="space-y-6">
                  {poolDetails?.notifications?.length > 0 ? (
                    <div className="grid gap-6">
                      {poolDetails.notifications.map((notify, index) => (
                        <Notification
                          key={index}
                          index={index}
                          notify={notify}
                          poolDetails={poolDetails}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">📊</span>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">No Investment Activity</h3>
                      <p className="text-secondary">Investment notifications will appear here once users start staking.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investing;