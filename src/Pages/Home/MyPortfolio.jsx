
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

      <h2 className="section--heading"> {t("Achievments")}</h2>
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

                  <button className="button">
                    <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
                    </svg>
                    Explore
                  </button>


                </div>

                <div
                  key={index}
                  onClick={() => window.open(item.href, "_blank")}
                >


                </div >


              </div >
            </div >
          </div >
        ))
        }





      </div >




      <h2 className="section--heading"> {t("Programming")}</h2>
      <div className="contain">

        {t("portfolio.portfolio_2").map((item, index) => (
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

                  <button className="button">
                    <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
                    </svg>
                    Explore
                  </button>


                </div>

                <div
                  key={index}
                  onClick={() => window.open(item.href, "_blank")}
                >


                </div >


              </div >
            </div >
          </div >
        ))
        }



        {t("portfolio.portfolio_4").map((item, index) => (
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

                  <button className="button">
                    <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
                    </svg>
                    Explore
                  </button>


                </div>

                <div
                  key={index}
                  onClick={() => window.open(item.href, "_blank")}
                >


                </div >


              </div >
            </div >
          </div >
        ))
        }


      </div >

      <h2 className="section--heading"> {t("Deep Learning and Machine Learning Projects")}</h2>
      <div className="contain">

        {t("portfolio.portfolio_4").map((item, index) => (
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

                  <button className="button">
                    <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
                    </svg>
                    Explore
                  </button>


                </div>

                <div
                  key={index}
                  onClick={() => window.open(item.href, "_blank")}
                >


                </div >


              </div >
            </div >
          </div >
        ))
        }





      </div >


      <h2 >PowerPoints</h2>
      <div className="contain">

        {t("portfolio.PowerPoint").map((item) => (
          <div key={item.id} className="boxx " data-aos='fade-up'>

            <div className="portfolio--section--img">
              <img
                className="portfolio--img"
                src={item.src}
                alt="Placeholder"
              />
              <div
                className="powerpoint"
                onClick={() => window.open(item.website, "_blank")}
              >






              </div >
            </div >

          </div >
        ))
        }
      </div >
    </section >
  );
}
