export const NavComponent = () => {
  return (
    <nav className="nav">
      <div className="nav-flex">
        <div>
          <img src="images/logo-bookmark.svg" alt="" />
        </div>
        <div className="desktop-menu">
          <ul>
            <li>Features</li>
            <li>Procing</li>
            <li>Contact</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="mobile-menu">
          <img src="images/icon-hamburger.svg" alt="" />
        </div>
      </div>
    </nav>
  );
};
