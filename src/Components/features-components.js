import { useState } from "react";
import data from "../Data/features-data.json";

export const FeaturesComponents = () => {
  const [firstTabInfo, setFirstTabInfo] = useState({
    image: data[0].image,
    title: data[0].title,
    paragraph: data[0].text,
  });

  const { image, title, paragraph } = firstTabInfo;
  return (
    <section className="features">
      <h1 className="features-title">Features</h1>
      <p className="features-paragraph">
        Our aim is to make it quick and easy for you to access your favorite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <div>
        {data.map((item) => (
          <div key={item.id} className="map-div-features">
            <ul>
              <li
                onClick={() =>
                  setFirstTabInfo({
                    image: item.image,
                    title: item.title,
                    paragraph: item.text,
                  })
                }
              >
                {item.name}
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div className="flex-features">
        <div className="blue-shape-features"></div>
        <img src={image} alt="" className="image-features" />
        <div>
          <h2 className="title-features">{title}</h2>
          <p className="paragraph-features">{paragraph}</p>
          <button className="features-btn">More Info</button>
        </div>
      </div>
    </section>
  );
};
