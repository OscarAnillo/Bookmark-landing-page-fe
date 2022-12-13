import data from "../Data/extension-data.json";

export const ExtensionComponent = () => {
  return (
    <section className="extension-section">
      <h1 className="extension-title">Download the extension</h1>
      <p className="extension-paragraph">
        We've got more browsers in the pipeline. Please do let us know if you've
        got a favorite you'd like us to prioritize.
      </p>
      <div className="extension-div">
        {data.map((item) => (
          <div key={item.id} className="extension-map-div">
            <img src={item.logo} alt="" />
            <h2>{item.title}</h2>
            <p>{item.version}</p>
            <div className="border-div"></div>
            <button className="extension-btn">Add & Install Extension</button>
          </div>
        ))}
      </div>
    </section>
  );
};
