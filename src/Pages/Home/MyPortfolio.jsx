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
                  <button className="Explore-Button">
                    <span className="IconContainer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 156 78"
                        className="telescope"
                      >
                        <path
                          fill="url(#paint0_linear_131_19)"
                          d="..."
                        ></path>
                        <path
                          fill="url(#paint1_linear_131_19)"
                          d="..."
                        ></path>
                        <path
                          fill="url(#paint2_linear_131_19)"
                          d="..."
                        ></path>
                        <defs>
                          <linearGradient
                            gradientUnits="userSpaceOnUse"
                            y2="78"
                            x2="16"
                            y1="42"
                            x1="16"
                            id="paint0_linear_131_19"
                          >
                            <stop stopColor="#e5c04a"></stop>
                            <stop stopColor="#e5c04a" offset="1"></stop>
                          </linearGradient>
                          <linearGradient
                            gradientUnits="userSpaceOnUse"
                            y2="77"
                            x2="52"
                            y1="25"
                            x1="52"
                            id="paint1_linear_131_19"
                          >
                            <stop stopColor="#e5c04a"></stop>
                            <stop stopColor="#e5c04a" offset="1"></stop>
                          </linearGradient>
                          <linearGradient
                            gradientUnits="userSpaceOnUse"
                            y2="72"
                            x2="112.5"
                            y1="0"
                            x1="112.5"
                            id="paint2_linear_131_19"
                          >
                            <stop stopColor="#e5c04a"></stop>
                            <stop stopColor="#e5c04a" offset="1"></stop>
                          </linearGradient>
                        </defs>
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 104 69"
                        className="tripod"
                      >
                        <path
                          strokeLinecap="round"
                          strokeWidth="11"
                          stroke="url(#paint0_linear_124_14)"
                          d="M98.4336 63.3406L52 5.99991"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeWidth="11"
                          stroke="url(#paint1_linear_124_14)"
                          d="M52.4336 6L6.00004 63.3407"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeWidth="11"
                          stroke="url(#paint2_linear_124_14)"
                          d="M52 63L52 6"
                        ></path>
                        <defs>
                          <linearGradient
                            gradientUnits="userSpaceOnUse"
                            y2="40.5"
                            x2="68"
                            y1="32"
                            x1="77.5"
                            id="paint0_linear_124_14"
                          >
                            <stop stopColor="#e5c04a"></stop>
                            <stop stopColor="#e5c04a" offset="1"></stop>
                          </linearGradient>
                          <linearGradient
                            gradientUnits="userSpaceOnUse"
                            y2="40.5174"
                            x2="36.4196"
                            y1="32.9922"
                            x1="26.1302"
                            id="paint1_linear_124_14"
                          >
                            <stop stopColor="#e5c04a"></stop>
                            <stop stopColor="#e5c04a" offset="1"></stop>
                          </linearGradient>
                          <linearGradient
                            gradientUnits="userSpaceOnUse"
                            y2="34.8174"
                            x2="42.7435"
                            y1="34.0069"
                            x1="55.4548"
                            id="paint2_linear_124_14"
                          >
                            <stop stopColor="#e5c04a"></stop>
                            <stop stopColor="#e5c04a" offset="1"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>

                    <span className="textbutton">Explore</span>
                  </button>

                </div >


              </div >
            </div >
          </div >
        ))
        }



      </div >




      <h2 >PowerPoints</h2>
      <div className="contain">
        {data?.["PowerPoint"]?.map((item) => (
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




                <div className="container">
                  <label className="label">
                    <input type="checkbox" className="input" />
                    <span className="circle"
                    ><svg
                      className="icon"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12 19V5m0 14-4-4m4 4 4-4"
                        ></path>
                      </svg>
                      <div className="square"></div>
                    </span>
                    <p className="title" > Download</p>
                    <p className="title" > Downloaded!</p >
                  </label >
                </div >


              </div >
            </div >

          </div >
        ))
        }
      </div >
    </section >
  );
}
