import { useState, useEffect } from "react";

/* Components */
import { NavComponent } from "./Components/nav-component";
import { HeroComponent } from "./Components/hero-component";
import { FeaturesComponents } from "./Components/features-components";
import { ExtensionComponent } from "./Components/extension-component";
import { FAQComponent } from "./Components/faq-component";
import { ContactComponent } from "./Components/contact-component";
import { FooterComponent } from "./Components/footer-component";

import "./App.css";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const clickHandler = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMobileMenu]);

  return (
    <div className="App">
      <div className="container">
        <NavComponent
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={clickHandler}
        />
        <HeroComponent />
        <FeaturesComponents />
        <ExtensionComponent />
        <FAQComponent />
      </div>
      <ContactComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
