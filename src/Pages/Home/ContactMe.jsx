import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState } from "react"; // Add useState import
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Add phone input styles
import Swal from 'sweetalert2'; // Add SweetAlert import
import { useTranslation } from "../../translation.jsx";
const account = import.meta.env.VITE_dihiaaccount
const template = import.meta.env.VITE_dihiatemplate
const accountid = import.meta.env.VITE_accountid
export default function ContactMe() {
  const { t } = useTranslation();
  const [phone, setPhone] = useState('');

  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    // Add phone number to form data
    const form = e.target;
    const formData = new FormData(form);
    formData.append('phone', phone);

    emailjs.sendForm(account, template, form, accountid)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          title: "Submitted!",
          text: "Your Message Was Sent Successfully!",
          icon: "success",
          showCancelButton: false,
          confirmButtonText: 'OK'
        });
        form.reset();
        setPhone(''); // Reset phone input
      })
      .catch((error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something Went Wrong!",
          customClass: {
            confirmButton: "btn-pop"
          }
        });
        form.reset();
        setPhone(''); // Reset phone input
      });
  }
  return (
    <section id="Contact" className="contact--section">
      <div data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
        <p className="sub--title"> {t("Get In Touch")}</p>
        <h2> {t("Contact Me")}</h2>
        <p className="text-lg">
          {t("Let's connect!")}
        </p>
      </div>
      <form className="contact--form--container" onSubmit={sendEmail}>
        <div className="container" data-aos="fade-up"

          data-aos-anchor-placement="center-bottom">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md" > {t("First Name")}</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
              autoComplete="off"

            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md"> {t("Last Name")}</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
              autoComplete="off"
            />
          </label>
          <label htmlFor="emailFrom" className="contact--label">
            <span className="text-md"> {t("Email")}</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="emailFrom"
              required
              autoComplete="off"
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">{t("Phone-number")}</span>
            <PhoneInput
              country={'us'} // default country
              value={phone}
              onChange={phone => setPhone(phone)}
              className="contact--input text-md phone-input-container"


              inputProps={{
                name: 'phone-number',
                id: 'phone-number',
                required: true,
              }}
            />
          </label>

        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md"> {t("Choose a topic")}</span>
          <input
            type="text"
            className="contact--input text-md"
            name="choose-topic"
            id="choose-topic"
            required
            autoComplete="off"
          />
        </label>
        <div data-aos="fade-left"
          data-aos-anchor-placement="center-bottom">
          <label htmlFor="message" className="contact--label">
            <span className="text-md"> {t("Message")}
            </span>
            <textarea
              type="text"
              className="contact--input text-md"
              id="message"
              name="message"
              rows="8"
              placeholder={t("placeholder.typeMessage")}
            />
          </label>
        </div>
        <div data-aos="fade-right"
          data-aos-anchor-placement="bottom-bottom">
          <button className="btn btn-primary contact--form--btn"> {t("Submit")}
          </button>
        </div>
      </form>
    </section>
  );
}