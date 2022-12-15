export const HeroComponent = () => {
  return (
    <div className="hero">
      <div className="blue-shape"></div>
      <div>
        <img src="images/illustration-hero.svg" alt="" className="img-hero" />
      </div>
      <div>
        <h1 className="hero-title">A Simple Bookmark Manager</h1>
        <p className="hero-paragraph">
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <button className="btn blue-btn">Get it on Chrome</button>
        <button className="btn white-btn">Get it on Firefox</button>
      </div>
    </div>
  );
};
