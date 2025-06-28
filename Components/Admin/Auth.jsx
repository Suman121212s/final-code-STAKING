import React from "react";

const Auth = () => {
  return (
    <div className="new-loader-wrapper-admin">
      <div className="modal--auto">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal__content text-center space-y-6">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-r from-error to-warning rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl">🚫</span>
              </div>
              
              {/* Title */}
              <h4 className="text-2xl font-bold text-primary">Access Denied</h4>
              
              {/* Message */}
              <div className="space-y-3">
                <p className="text-secondary text-lg">
                  Sorry, you are <span className="text-error font-semibold">not authorized</span> to access the admin panel.
                </p>
                <p className="text-muted text-sm">
                  This area is restricted to administrators only. Please contact support if you believe this is an error.
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <a 
                  href="/" 
                  className="btn btn-primary btn-lg group"
                >
                  <span>🏠</span>
                  <span>Go Home</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              
              {/* Additional Info */}
              <div className="text-xs text-muted border-t border-border-primary pt-4">
                If you need admin access, please contact the system administrator
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;