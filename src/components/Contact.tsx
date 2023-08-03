import { useState, FormEvent } from "react";
import { FormStateType } from "../types";

const Contact = () => {
  const initalFormState: FormStateType = {
    name: "",
    email: "",
    message: "",
  };

  const [formState, setFormState] = useState(initalFormState);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    console.log(formState);
    setFormState(initalFormState);
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact</h2>
      <div className="contact-subcontainer">
        <div>Contact Left Side Content</div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-form-group contact-form-name">
            <label
              htmlFor="contact-form-name"
              className="contact-form-label"
              hidden
            >
              Name:
            </label>
            <input
              type="text"
              id="contact-form-name"
              className="contact-form-name-input"
              placeholder="Your Name"
              value={formState.name}
              onChange={(event) =>
                setFormState({ ...formState, name: event.target.value })
              }
            />
          </div>
          <div className="contact-form-group contact-form-email">
            <label
              htmlFor="contact-form-email"
              className="contact-form-label"
              hidden
            >
              Email:
            </label>
            <input
              type="text"
              id="contact-form-email"
              className="contact-form-email-input"
              placeholder="Your Email"
              value={formState.email}
              onChange={(event) =>
                setFormState({ ...formState, email: event.target.value })
              }
            />
          </div>
          <div className="contact-form-group contact-form-message">
            <label
              htmlFor="contact-form-message"
              className="contact-form-label"
              hidden
            >
              Message:
            </label>
            <textarea
              rows={4}
              id="contact-form-message"
              className="contact-form-textarea"
              placeholder="Your Message"
              value={formState.message}
              onChange={(event) =>
                setFormState({ ...formState, message: event.target.value })
              }
            />
          </div>
          <button type="submit" className="contact-form-submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
