import { useState } from "react";
import Variables from "../Static/Variables";
import { useEffect } from "react";
function Navigation() {
  let [navstyle, setStyle] = useState(false);
  let [hamburger, sethamburger] = useState(false);
  const togglestyle = () => {
    setStyle(!navstyle);
    sethamburger(!hamburger);
  };

  const [activeMenuItem, setActiveMenuItem] = useState("navid");

  const handleMenuItemClick = (id) => {
    setActiveMenuItem(id);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["navid", "about","workexp", "projectid", "edu", "contact"];
      const scrollPosition = window.scrollY;

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop - 50; // Adjust this value according to your needs
          const sectionBottom = sectionTop + section.clientHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveMenuItem(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const resized = () => {
      if (window.innerWidth > 768) {
        setStyle(false);
        sethamburger(false);
      }
    };
    window.addEventListener("resize", resized);
    return () => {
      window.addEventListener("resize", resized);
    };
  }, []);

  const [checkboxes, setcheckboxes] = useState(false);

  const togglecheckbox = () => {
    setcheckboxes(!checkboxes);
    if (!document.body.classList.contains("dark")) {
      document.body.classList.add("dark");
      document.getElementById("navbar").classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.getElementById("navbar").classList.remove("dark");
    }
  };

  useEffect(() => {
    if (checkboxes) {
      document.querySelectorAll("hr").forEach((hrs) => {
        hrs.classList.add("dark");
      });
      document.querySelectorAll(".dashed-border").forEach((dashed) => {
        dashed.classList.add("dark");
      });

      document.querySelectorAll(".bar").forEach((bar) => {
        bar.classList.add("dark");
      });

      document.querySelectorAll(".card-data").forEach((card) => {
        card.classList.add("dark");
      });

      document.querySelectorAll(".large-input").forEach((card) => {
        card.classList.add("dark");
      });

    } else {
      document.querySelectorAll("hr").forEach((hrs) => {
        hrs.classList.remove("dark");
      });
      document.querySelectorAll(".dashed-border").forEach((dashed) => {
        dashed.classList.remove("dark");
      });

      document.querySelectorAll(".bar").forEach((bar) => {
        bar.classList.remove("dark");
      });

      document.querySelectorAll(".card-data").forEach((card) => {
        card.classList.remove("dark");
      });

      document.querySelectorAll(".large-input").forEach((card) => {
        card.classList.remove("dark");
      });

    }
  }, [checkboxes]);

  return (
    <>
      <section className="nav_section" id="navid">
        <div className="navbar" id="navbar">
          <div className="container">
            <div className="flex justify-content-center nav ">
              {/* Laptop Screen */}
              <ul
                className="flex nav-item"
                style={{ ...Variables.liststylenone, ...Variables.cursorpoint }}
              >
                <li
                  className={activeMenuItem === "navid" ? "active" : ""}
                  onClick={() => handleMenuItemClick("navid")}
                >
                  Home
                </li>
                <li
                  className={activeMenuItem === "about" ? "active" : ""}
                  onClick={() => handleMenuItemClick("about")}
                >
                  About Me
                </li>
                <li
                  className={activeMenuItem === "workexp" ? "active" : ""}
                  onClick={() => handleMenuItemClick("workexp")}
                >
                 Work Experience
                </li>
                <li
                  className={activeMenuItem === "projectid" ? "active" : ""}
                  onClick={() => handleMenuItemClick("projectid")}
                >
                  Project
                </li>
                <li
                  className={activeMenuItem === "edu" ? "active" : ""}
                  onClick={() => handleMenuItemClick("edu")}
                >
                  Education
                </li>
                <li
                  className={activeMenuItem === "contact" ? "active" : ""}
                  onClick={() => handleMenuItemClick("contact")}
                >
                  Contact
                </li>
              </ul>
              <div className="sm-theme-flex">
                <div>
                  <input
                    type="checkbox"
                    className="checkbox"
                    id="checkbox"
                    checked={checkboxes}
                    onChange={togglecheckbox}
                  />
                  <label htmlFor="checkbox" className="checkbox-label">
                    <i className="fas fa-moon"></i>
                    <i className="fas fa-sun"></i>
                    <span className="ball"></span>
                  </label>
                </div>
                {/* Phone Screen */}
                {checkboxes ? (
                  <div className="hammenu" onClick={togglestyle}>
                    <div
                      className={
                        hamburger ? "bar change bar1 dark" : "bar bar1 dark"
                      }
                    ></div>
                    <div
                      className={
                        hamburger ? "bar change bar2 dark" : "bar bar2 dark"
                      }
                    ></div>
                    <div
                      className={
                        hamburger ? "bar change bar3 dark" : "bar bar3 dark"
                      }
                    ></div>
                  </div>
                ) : (
                  <div className="hammenu" onClick={togglestyle}>
                    <div
                      className={hamburger ? "bar change bar1" : "bar bar1"}
                    ></div>
                    <div
                      className={hamburger ? "bar change bar2" : "bar bar2"}
                    ></div>
                    <div
                      className={hamburger ? "bar change bar3" : "bar bar3"}
                    ></div>
                  </div>
                )}
              </div>
            </div>
            <ul
              className="nav-small"
              style={{
                display: navstyle ? "flex" : "none",
                ...Variables.liststylenone,
                ...Variables.cursorpoint,
              }}
            >
              <li
                className={activeMenuItem === "navid" ? "active" : ""}
                onClick={() => handleMenuItemClick("navid")}
              >
                Home
              </li>
              <li
                className={activeMenuItem === "about" ? "active" : ""}
                onClick={() => handleMenuItemClick("about")}
              >
                About Me
              </li>
              <li
                  className={activeMenuItem === "workexp" ? "active" : ""}
                  onClick={() => handleMenuItemClick("workexp")}
                >
                 Work Experience
                </li>
              <li
                className={activeMenuItem === "projectid" ? "active" : ""}
                onClick={() => handleMenuItemClick("projectid")}
              >
                Project
              </li>
              <li
                className={activeMenuItem === "edu" ? "active" : ""}
                onClick={() => handleMenuItemClick("edu")}
              >
                Education
              </li>
              <li
                className={activeMenuItem === "contact" ? "active" : ""}
                onClick={() => handleMenuItemClick("contact")}
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navigation;
