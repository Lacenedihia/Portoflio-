import Aos from "aos";
import 'aos/dist/aos.css';
import BScthesis from "../../data/resume.pdf"
import { useEffect } from "react";
import { useTranslation } from "../../translation.jsx";
export default function AboutMe() {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.refreshHard({ duration: 1200 });
  }, [])
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img" data-aos="fade-up"
        ddata-aos-anchor-placement="center-bottom">
        <img src="./img/20_out.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content" data-aos="fade-up"
          data-aos-anchor-placement="center-bottom">
          <p className="section--title">  {t("about.about")}</p>
          <h1 className="skills-section--heading">{t("about.aboutme")}</h1>
          <p className="hero--section-description"> {t("about.description")} </p>
        </div>
        <div >
          <a
            download='BSc thesis - Melisa Khacef and Dihia Lacene' href={BScthesis} style={{ textDecoration: 'none' }}
          >
            <button className="btn btn-download">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 640 512"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M320 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm156.8-48C462 361 397.4 416 320 416s-142-55-156.8-128H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H163.2C178 151 242.6 96 320 96s142 55 156.8 128H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H476.8z"
                  fill="currentColor"
                />
              </svg>
              {t("BSc thesis")}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
