import React from "react";

//INTERNAL IMPORT
import AdminNav from "./AdminNav";
import AdminCard from "./AdminCard";
import Token from "./Token";
import Investing from "./Investing";
import Transfer from "./Transfer";
import Pool from "./Pool";
import Staking from "./Staking";
import ICOToken from "./ICOToken";

const Admin = ({
  poolDetails,
  transferToken,
  address,
  setLoader,
  createPool,
  sweep,
  setModifyPoolID,
}) => {
  return (
    <section className="py-20 relative">
      <div className="container">
        <div className="grid lg:grid-cols-4 gap-8">
          <AdminNav />

          <div className="lg:col-span-3">
            <div className="tab-content space-y-8">
              <div
                className="tab-pane fade show active"
                id="tab-1"
                role="tabpanel"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                  {poolDetails?.poolInfoArray.map((pool, index) => (
                    <AdminCard
                      key={index}
                      name={`Current APY: ${pool.apy}%`}
                      value={`${pool.depositedAmount} ${pool.depositToken.symbol}`}
                      icon="📈"
                      gradient="from-primary-500 to-secondary-500"
                    />
                  ))}
                  <AdminCard
                    name="Total Stake"
                    value={`${poolDetails?.totalDepositAmount} ${poolDetails?.depositToken.symbol}`}
                    icon="💰"
                    gradient="from-accent-500 to-primary-500"
                  />
                  <AdminCard
                    name="Your Balance"
                    value={`${poolDetails?.depositToken.balance.slice(0, 8)} ${poolDetails?.depositToken.symbol}`}
                    icon="👛"
                    gradient="from-secondary-500 to-accent-500"
                  />
                  <AdminCard
                    name="Available Supply"
                    value={`${poolDetails?.contractTokenBalance
                      .toString()
                      .slice(0, 8)} ${poolDetails?.depositToken.symbol}`}
                    icon="🏦"
                    gradient="from-warning to-error"
                  />
                </div>

                <Token token={poolDetails?.depositToken} />
              </div>

              <Investing poolDetails={poolDetails} />

              <Staking
                sweep={sweep}
                setLoader={setLoader}
                poolDetails={poolDetails}
              />

              <Transfer
                poolDetails={poolDetails}
                transferToken={transferToken}
                address={address}
                setLoader={setLoader}
              />

              <Pool
                poolDetails={poolDetails}
                createPool={createPool}
                setLoader={setLoader}
                setModifyPoolID={setModifyPoolID}
              />
              
              <ICOToken setLoader={setLoader} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;