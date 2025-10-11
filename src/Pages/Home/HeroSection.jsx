
import cvfr from "../../data/CV_Dihia_LACENE_fr.pdf"
import cveng from "../../data/CV_Dihia_LACENE_eng.pdf"

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Typewriter } from 'react-simple-typewriter';
import { useTranslation } from "../../translation.jsx";
export default function HeroSection() {
  const { t, lang } = useTranslation();
  const currentCV = lang && lang.startsWith('en') ? cveng : cvfr;
  useEffect(() => {
    Aos.init({ duration: 1400 });
  }, [])
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content" data-aos='fade-out' data-aos-anchor-placement="top-center">

          <h1 className="hero--section--title" style={{ marginBottom: "150px" }}>
            {t("hero.greeting")}
            <br />
            {t("hero.im")} {""}
            <span style={{ color: "#e0b101" }}>
              <Typewriter
                words={['LACENE Dihia', ' an Electronic and Electrical Engineering Graduate', ' a Software Engineer', ' a Telecommunicaton Enginneer']}
                loop
                cursor
                cursorColor="#64b9ef"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1200} />

            </span>
          </h1>

        </div >
        <div data-aos='fade-left' data-aos-anchor-placement="top"><a href="#Contact"><button className="btn btn-primary">{t("hero.getInTouch")}</button></a></div>
        <div data-aos='fade-left' data-aos-anchor-placement="top">
          <a download='resume' href={currentCV} style={{ textDecoration: 'none' }}  >
            <button className="btn btn-download">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24" fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 12V19M12 19L9.75 16.6667M12 19L14.25 16.6667M6.6 17.8333C4.61178 17.8333 3 16.1917 3 14.1667C3 12.498 4.09438 11.0897 5.59198 10.6457C5.65562 10.6268 5.7 10.5675 5.7 10.5C5.7 7.46243 8.11766 5 11.1 5C14.0823 5 16.5 7.46243 16.5 10.5C16.5 10.5582 16.5536 10.6014 16.6094 10.5887C16.8638 10.5306 17.1284 10.5 17.4 10.5C19.3882 10.5 21 12.1416 21 14.1667C21 16.1917 19.3882 17.8333 17.4 17.8333"
                  stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>

              {t("hero.downloadCV")}

            </button>
          </a>

        </div>
      </div>

      <div className="hero--section--img" data-aos='fade-right' data-aos-anchor-placement="top">
        <img src="./img/3_out.png" alt="Hero Section" />
      </div>

    </section >
  );
}