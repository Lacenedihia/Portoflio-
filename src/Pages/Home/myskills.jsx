import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useTranslation } from "../../translation.jsx";

export default function MySkills() {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title" data-aos='fade-top' data-aos-anchor-placement="top-center">
          {t("skills.title")}
        </p>
        <h2 className="skills--section--heading" data-aos='fade-in' data-aos-anchor-placement="top-center">
          {t("skills.heading")}
        </h2>
      </div>
      <div className="skills--section--container">
        {t("skills.items").map((item, index) => (
          <div key={index} className="skills--section--card" data-aos='fade-right' data-aos-anchor-placement="center-bottom">
            <div className="skills--section--img" data-aos='fade-left' data-aos-anchor-placement="center-bottom">
              <img src={`${item.src}`} alt={item.title} />
            </div>
            <div className="skills--section--card--content">
              <span className="skills--section--title">
                <h3>{item.title}</h3>
              </span>
              <span className="skills--section--description">
                <p>{item.description}</p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}