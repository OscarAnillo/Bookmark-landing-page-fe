import { useState } from "react";

export const ContactComponent = () => {
  const [emailInput, setEmailInput] = useState({
    email: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEmailInput({ ...emailInput, [name]: value });
  };

  const { email } = emailInput;
  return (
    <div className="contact-div">
      <div className="contact-container">
        <p className="contact-paragraph">35,000+ already joined</p>
        <h2 className="contact-title">Stay up-to-date with what we're doing</h2>
        <form>
          <input
            type="text"
            placeholder="Enter your email address"
            name="email"
            value={email}
            onChange={changeHandler}
          />
          <button type="submit">Contact Us</button>
        </form>
      </div>
    </div>
  );
};
