export const NavComponent = ({ showMobileMenu, setShowMobileMenu }) => {
  return (
    <nav className="nav">
      <div className="nav-flex">
        <div>
          <img src="images/logo-bookmark.svg" alt="" />
        </div>
        <div className="desktop-menu">
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li className="desktop-menu-login">Login</li>
          </ul>
        </div>
        <div className="mobile-menu">
          <img
            src="images/icon-hamburger.svg"
            alt=""
            onClick={setShowMobileMenu}
          />
        </div>
      </div>
      {showMobileMenu && (
        <div className="mobile-menu-bg">
          <div className="mobile-menu-container">
            <div className="mobile-menu-row">
              <div>
                <img
                  src="images/logo-bookmark.svg"
                  alt=""
                  className="mobile-menu-logo"
                />
              </div>
              <div>
                <img
                  src="images/icon-close.svg"
                  alt=""
                  onClick={setShowMobileMenu}
                />
              </div>
            </div>
            <div className="mobile-menu-items">
              <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Contact</li>
                <li className="login-item">Login</li>
              </ul>
            </div>
            <div className="mobile-menu-socials">
              <img src="images/icon-facebook.svg" alt="" />
              <img src="images/icon-twitter.svg" alt="" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
