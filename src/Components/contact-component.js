import { useState, useEffect } from "react";

export const ContactComponent = () => {
  const [emailInput, setEmailInput] = useState({ email: "" });
  const [emailError, setEmailError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEmailInput({ ...emailInput, [name]: value });
  };

  const validate = (value) => {
    const error = {};
    if (!value.email) {
      error.email = "An email is required!";
    } else if (!emailRegex.test(value.email)) {
      error.email = "Whoops, make sure it's an email";
    }
    return error;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setEmailError(validate(emailInput));
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (Object.keys(emailInput).length === 0 && isSubmitted) {
      console.log(emailInput.email);
    }
  }, [emailError, emailInput, isSubmitted]);

  const { email } = emailInput;
  return (
    <div className="contact-div">
      <div className="contact-container">
        <p className="contact-paragraph">35,000+ already joined</p>
        <h2 className="contact-title">Stay up-to-date with what we're doing</h2>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="email"
            placeholder="Enter your email address"
            value={email}
            onChange={changeHandler}
          />
          {emailError.email && (
            <img src="images/icon-error.svg" alt="" className="img-error" />
          )}
          <p className={emailError.email ? "error-text" : "test-error"}>
            {emailError.email}
          </p>
          <button type="submit">Contact Us</button>
        </form>
      </div>
    </div>
  );
};
