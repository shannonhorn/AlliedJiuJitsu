import { useForm, ValidationError } from "@formspree/react";
import styles from "../styles/Newsletter.module.css";

const Newsletter = () => {
  const [state, handleSubmit] = useForm("xqkwgrwj");
  return (
    <section
      aria-label="newsletter subscription"
      className={`${styles.newsletter} flow`}
    >
      <svg
        className="icon"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 9L12 12.5L17 9" />
        <path d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z" />
      </svg>
      <h3 className="headline">NEWSLETTER</h3>
      <form
        onSubmit={handleSubmit}
        className={`${styles.newsletter_form} flow`}
      >
        <label htmlFor="email">
          Get updates about news, events and seminars.
        </label>
        <div className={styles.container_input_button}>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="JOE@KARATE.COM*"
            required=""
            title="Provide a valid email address."
            pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <div
          className={`message—confirmation hide ${
            state.succeeded ? "show" : ""
          }`}
        >
          You&apos;re all signed up, thank you!
        </div>
      </form>
    </section>
  );
};

export default Newsletter;
