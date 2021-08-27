import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "../styles/Newsletter.module.css";

const Newsletter = () => {
  const [state, handleSubmit] = useForm("xqkwgrwj");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <section className={`${styles.newsletter} flow`}>
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 9L12 12.5L17 9" />
        <path d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z" />
      </svg>
      <div className={styles.headline}>NEWSLETTER</div>
      <form onSubmit={handleSubmit} className="flow">
        <label htmlFor="email">
          Get updates about news, events and seminars.
        </label>
        <div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="EMAIL ADDRESS*"
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </form>
    </section>
  );
};

export default Newsletter;
