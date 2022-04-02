import React, { useState } from "react";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import Header from "../controls/header";
import Footer from "../controls/footer";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("xpzbqdkq");
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header
          hamburgerMenuOpen={hamburgerMenuOpen}
          setHamburgerMenuOpen={setHamburgerMenuOpen}
        />
        <section aria-label="marquee" className={styles.marquee}>
          <div className={styles.marquee_copy}>
            <h2
              className={`${styles.title} ${styles.headline} ${styles.animatePopIn}`}
            >
              CONTACT
            </h2>
            <h2
              className={`${styles.headline} ${styles.headline_sub} ${styles.animatePopIn}`}
            >
              We&apos;ll get right back to you!
            </h2>
          </div>
        </section>
        <section
          aria-label="contact"
          className={`${styles.contact} ${styles.animatePopIn} flow`}
        >
          <svg
            className="icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="3.25"></circle>
            <path d="M12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C18.8125 4.75 19.25 9.125 19.25 12V13.25C19.25 14.3546 18.3546 15.25 17.25 15.25V15.25C16.1454 15.25 15.25 14.3546 15.25 13.25V8.75"></path>
          </svg>
          <h3 className="headline">GET IN TOUCH</h3>
          <form
            onSubmit={handleSubmit}
            className={`${styles.contact_form} flow`}
          >
            <label htmlFor="name">Name</label>
            <input
              className={styles.form_input}
              id="name"
              type="text"
              name="name"
              placeholder="KARATE JOE*"
              required="required"
              title="Provide your name."
              disabled={state.succeeded}
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <label htmlFor="email">Email Address</label>
            <input
              className={styles.form_input}
              id="email"
              type="email"
              name="email"
              placeholder="JOE@KARATE.COM*"
              required="required"
              title="Provide a valid email address."
              pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
              disabled={state.succeeded}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="email">Phone Number</label>
            <input
              className={styles.form_input}
              type="phone"
              id="phone"
              name="phone"
              placeholder="(623) 123-4567*"
              title="Provide a valid phone number."
              disabled={state.succeeded}
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
            <label htmlFor="email">Message</label>
            <textarea
              className={styles.form_input}
              name="message"
              id="message"
              rows="8"
              placeholder="Please sign me up right away!"
              disabled={state.succeeded}
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting || state.succeeded}
            >
              Submit
            </button>
            <div
              className={`message—confirmation hide ${
                state.succeeded ? "show" : ""
              }`}
            >
              Thank you! We&apos;ll be in touch.
            </div>
          </form>
          <section className={styles.contact_below}>
            <div className={styles.contact_below_block}>
              <div className={styles.contact_below_icon}>
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z"></path>
                </svg>
              </div>
              <div
                className={`${styles.headline} ${styles.headline_sub} ${styles.title} ${styles.animatePopIn}`}
              >
                Say Hello
              </div>
              <div>
                <Link href="mailto:shannon@alliedjiujitsu.com?subject=Reaching out through the website">
                  <a>Email: shannon@alliedjiujitsu.com</a>
                </Link>
              </div>
              <div>
                <Link href="tel:6027033067">
                  <a>Phone: (602) 703-3067</a>
                </Link>
              </div>
            </div>
            <div className={styles.contact_below_block}>
              <div className={styles.contact_below_icon}>
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.25 11C18.25 15 12 19.25 12 19.25C12 19.25 5.75 15 5.75 11C5.75 7.5 8.68629 4.75 12 4.75C15.3137 4.75 18.25 7.5 18.25 11Z"></path>
                  <circle cx="12" cy="11" r="2.25"></circle>
                </svg>
              </div>
              <div
                className={`${styles.headline} ${styles.headline_sub} ${styles.title} ${styles.animatePopIn}`}
              >
                Where To Meet
              </div>
              <Link href="https://g.page/r/CfrXh7y4tklzEAo">
                <a target="_blank">
                  <div>10100 West Lake Pleasant Parkway</div>
                  <div>Suite 1300</div>
                  <div>Peoria, AZ. 85383</div>
                </a>
              </Link>
            </div>
          </section>
        </section>
        <Footer />
      </main>
    </div>
  );
};

Contact.title = "Get in touch, we'll respond right away!";
Contact.description =
  "If you have any questions, please don't hesitate to reach out.";
export default Contact;
