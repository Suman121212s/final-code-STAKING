import React from "react";

const Ask = ({ setContactUs }) => {
  return (
    <section id="ask" className="py-20 relative">
      <div className="container">
        <div className="text-center">
          <div className="relative inline-block">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-2xl blur opacity-25"></div>
            
            {/* Main Card */}
            <div className="relative card card-spacious max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold gradient-text mb-4">Any questions?</h2>
              <p className="text-secondary mb-6 text-lg">
                Our support team is always on call, and ready to help with all
                your questions.
                Connect:- mcon@mecoin.site
              </p>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => setContactUs(true)}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ask;