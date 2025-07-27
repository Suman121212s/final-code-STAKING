import React from "react";

const Ask = ({ setContactUs }) => {
  return (
    <section id="ask" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center">
          <div className="relative inline-block">
            {/* Enhanced Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30"></div>
            
            {/* Main Card */}
            <div className="relative bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-12 max-w-3xl mx-auto">
              <div className="space-y-8">
                {/* Icon */}
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <span className="text-3xl">💬</span>
                </div>

                {/* Title */}
                <h2 className="text-4xl lg:text-5xl font-black">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Any questions?
                  </span>
                </h2>

                {/* Description */}
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Our support team is always on call, and ready to help with all
                  your questions. Get instant support and expert guidance.
                  <br />
                  <span className="text-cyan-400 font-bold">Connect: mcon@mecoin.site</span>
                </p>

                {/* CTA Button */}
                <button
                  className="btn btn-primary btn-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-2xl hover:shadow-blue-500/25 group"
                  onClick={() => setContactUs(true)}
                >
                  <span>Contact Us Now</span>
                  <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ask;