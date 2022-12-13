import { useState } from "react";

import data from "../Data/accordion-data.json";

export const FAQComponent = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const clickHandler = (i) => {
    if (selectedItem === i) {
      return setSelectedItem(null);
    }
    setSelectedItem(i);
  };

  return (
    <section className="acc-section">
      <h1 className="acc-section-title">Frequently Asked Questions</h1>
      <p className="acc-section-paragraph">
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </p>
      <div className="accordion">
        {data.map((item, i) => (
          <div key={item.id} onClick={() => clickHandler(i)}>
            <div className="test">
              <p className="acc-title">{item.title}</p>
              <img src="images/icon-arrow.svg" alt="" />
            </div>
            <div
              className={`${selectedItem === i ? "content show" : "content"}`}
            >
              <p className="acc-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="acc-btn">More Info</button>
    </section>
  );
};
