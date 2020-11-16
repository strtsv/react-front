import React from "react";

class ContactForm extends React.Component {
  render() {
    return (
      <section className="section section-md bg-primary">
        <div className="container">
          <h3 className="text-center">Contact Form</h3>
          <div className="row justify-content-center">
            <div className="col-xl-6 col-md-9 col-sm-10 col-lg-8">
              <form
                className="rd-form rd-mailform contact-form"
                data-form-output="form-output-global"
                data-form-type="contact"
                method="post"
                action="bat/rd-mailform.php"
              >
                <div className="row row-10 row-narrow">
                  <div className="col-12 wow fadeInLeft">
                    <div className="form-wrap">
                      <input
                        className="form-input"
                        id="contact-name"
                        type="text"
                        name="name"
                        data-constraints="@Required"
                      />
                      <label className="form-label" htmlFor="contact-name">
                        Your Name
                      </label>
                    </div>
                  </div>
                  <div className="col-12 wow fadeInRight">
                    <div className="form-wrap">
                      <input
                        className="form-input"
                        id="contact-phone"
                        type="text"
                        name="phone"
                        data-constraints="@Numeric"
                      />
                      <label className="form-label" htmlFor="contact-phone">
                        Phone
                      </label>
                    </div>
                  </div>
                  <div className="col-12 wow fadeInLeft">
                    <div className="form-wrap">
                      <input
                        className="form-input"
                        id="contact-email"
                        type="email"
                        name="email"
                        data-constraints="@Email @Required"
                      />
                      <label className="form-label" htmlFor="contact-email">
                        E-mail
                      </label>
                    </div>
                  </div>
                  <div className="col-12 wow fadeInRight">
                    <div className="form-wrap">
                      <label className="form-label" htmlFor="contact-message">
                        Your Message
                      </label>
                      <textarea
                        className="form-input"
                        id="contact-message"
                        name="message"
                        data-constraints="@Required"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-12 wow fadeInUp">
                    <button
                      className="button button-block button-secondary button-xl font-weight-extra-bold"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactForm;
