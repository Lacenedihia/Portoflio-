import data from "../../data/index.json";
//import resume from "../../data/Resume.pdf"
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useTranslation } from "../../translation.jsx";

export default function MyPortfolio() {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, [])
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title"> {t("Recent Projects")}</p>
          <h2 className="section--heading">  {t("My Portfolio")}</h2>
        </div>

        <div >
          <a
            href="https://github.com/Lacenedihia"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button className="btn btn-github">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 640 512"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M320 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm156.8-48C462 361 397.4 416 320 416s-142-55-156.8-128H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H163.2C178 151 242.6 96 320 96s142 55 156.8 128H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H476.8z"
                  fill="currentColor"
                />
              </svg>
              {t("Visit My GitHub")}
            </button>
          </a>
        </div>
      </div>

      <h2 className="section--heading"> {t("Programming")}</h2>
      <div className="contain">

        {t("portfolio.portfolio_1").map((item, index) => (
          <div key={index} className="boxx" data-aos='fade-right' data-aos-anchor-placement="center-bottom" >
            <div className="portfolio--section--img">
              <img
                className="portfolio--img"
                src={item.src}
                alt="Placeholder"
              />
              <div
                className="card-body"
                onClick={() => window.open(item.website, "_blank")}
              >
                <div className="portfolio--section--title">
                  <h1 >{item.title}</h1></div>
                <div className="text">
                  <p >{item.description}</p>
                </div>

                <div
                  key={index}
                  onClick={() => window.open(item.href, "_blank")}
                >
                  <p className="text-sm portfolio--link">
                    {item.link}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 640 512"
                      fill="black"
                    >
                      <path
                        d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
                        stroke="currentColor"
                        strokeWidth="2.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon"
                      />
                    </svg>
                  </p>
                </div>
                <div
                  key={index}
                  onClick={() => window.open(item.website, "_blank")}
                >
                  <p className="text-sm portfolio--link">
                    {item.caption}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 640 512"
                      fill="black"
                    >
                      <path
                        d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
                        stroke="currentColor"
                        strokeWidth="2.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}



      </div>




      <h2 className="section--heading">PowerPoints</h2>
      <div className="contain">

        {data?.["PowerPoint"]?.map((item, index) => (
          <div key={index} className="boxx" data-aos='fade-right' data-aos-anchor-placement="center-bottom" >
            <div className="portfolio--section--img"><a href={item.website} target="_blank" rel="noopener noreferrer">
              <img
                className="portfolio--img"
                src={item.src}
                alt="Placeholder"
              /></a>
            </div>

            <div
              key={index}
            >
              <p className="text-sm portfoliolink">
                {item.caption}
                <a href={item.website} target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 384 512"
                    fill="grey"
                  >
                    <path
                      d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z"
                      stroke="currentColor"
                      strokeWidth="2.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon"
                    />
                  </svg>
                </a>
              </p>

            </div>

          </div>


        ))}



      </div>
    </section>
  );
}
/*<svg xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 640 512">
<path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
/></svg> */
/*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
<path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
/></svg> */
