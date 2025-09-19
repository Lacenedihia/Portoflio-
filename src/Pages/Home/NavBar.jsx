import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "../../translation.jsx";
function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const { t, lang, setLang } = useTranslation();
  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div></div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>


      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul >
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              {t("Home")}
            </Link>
            <a></a>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              {t("About Me")}
            </Link>
            <a></a>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={1}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              {t("Portfolio")}
            </Link>
            <a></a>
          </li>

          <li className="up">
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={1}
              duration={500}
              to="Contact"
              className="navbar--content"
            >
              {t("Contact")}
            </Link>
            <a></a>
          </li>

        </ul>
      </div>

      <div className="toggleWrapper">
        <input
          type="checkbox"
          className="input"
          id="dn"
          checked={lang === "fr"}
          onChange={() => setLang(lang === "en" ? "fr" : "en")}
          aria-label="Switch language"
        />
        <label className="toggle" htmlFor="dn">
          <span className="toggle__handler">

          </span>

        </label>
      </div>


      <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={10}
        duration={400}
        to="Contact"
        className="btn btn-outline-primary "

      >
        {t("Contact Me")}
      </Link>
      <a></a>
    </nav >
  );
}

export default Navbar;
