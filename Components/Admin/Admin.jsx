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
    <div className="section">
      <div className="container">
        <div className="row">
          <AdminNav />

          <div className="col-12 col-lg-9">
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="tab-1"
                role="tabpanel"
              >
                <div className="row">
                  {poolDetails?.poolInfoArray.map((pool, index) => (
                    <AdminCard
                      key={index}
                      name={`Current APY: ${pool.apy} %`}
                      value={`${pool.depositedAmount} 
                  ${pool.depositToken.symbol}`}
                    />
                  ))}
                  <AdminCard
                    name={`Total Stake`}
                    value={`${poolDetails?.totalDepositAmount}
                ${poolDetails?.depositToken.symbol}`}
                  />
                  <AdminCard
                    name={`Your Balance`}
                    value={`${poolDetails?.depositToken.balance.slice(0, 8)}
                ${poolDetails?.depositToken.symbol}`}
                  />
                  <AdminCard
                    name={`Available Supply`}
                    value={`${poolDetails?.contractTokenBalance
                      .toString()
                      .slice(0, 8)} 
                ${poolDetails?.depositToken.symbol}`}
                  />

                  <Token token={poolDetails?.depositToken} />
                </div>
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
    </div>
  );
};

export default Admin;