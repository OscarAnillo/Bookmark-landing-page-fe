import { NavComponent } from "./Components/nav-component";
import { HeroComponent } from "./Components/hero-component";
import { FeaturesComponents } from "./Components/features-components";
import { ExtensionComponent } from "./Components/extension-component";
import { FAQComponent } from "./Components/faq-component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <NavComponent />
        <HeroComponent />
        <FeaturesComponents />
        <ExtensionComponent />
        <FAQComponent />
      </div>
    </div>
  );
}

export default App;
