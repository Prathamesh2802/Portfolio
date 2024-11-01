function About() {
  return (
    <>
      <div className="about_section" id="about">
        <div className="container-large">
          <div className="flex about-title w-50">
            <h2>About Me</h2>
            <hr className="hr"></hr>
          </div>
          <div className="flex about-content">
            <div className="w-50 flex flex-vertical">
              <p>
                I am An independent and self-motivated B-tech Engineering
                student willing to obtain a position as a Software
                Developer in a fast-paced organization where my technical skills
                and creative thinking will be tested. I am self-motivated
                learner with a eagerness to learn new things. Skilled in Web
                Development, App Development and many other technologies.
              </p>
              <p>
                Here are some of the technologies that are part of my current
                stack:
              </p>
              <div className="grid">
                <span className="icons">
                  <i className="fa-brands fa-python"></i>&nbsp; Python
                </span>
                <span className="icons">
                  <i className="fa-brands fa-java"></i>&nbsp; Java
                </span>
                <span className="icons">
                  <i className="fa-brands fa-html5"></i>&nbsp; Html
                </span>
                <span className="icons">
                  <i className="fa-brands fa-js"></i>&nbsp; Javascript
                </span>
                <span className="icons">
                  <i className="fa-brands fa-database"></i>&nbsp;SQL
                </span>
                <span className="icons">
                  <i className="fa-brands fa-git"></i>&nbsp; Git
                </span>
                <span className="icons">
                  <i className="fa-brands fa-react"></i>&nbsp; React
                </span>
                <span className="icons">
                  <i className="fa-brands fa-css3-alt"></i>&nbsp; Css
                </span>
                <span className="icons">
                  <i className="fa-brands fa-github"></i>&nbsp; Github
                </span>
                <span className="icons">
                  <i className="fa-brands fa-node"></i>&nbsp; NodeJs
                </span>
              </div>
              <p>Currently Studying for :</p>
              <div className="grid">
                <span className="icons">
                  <i className="fa-brands fa-linux"></i>&nbsp; Linux
                </span>
              </div>
            </div>
            <div>
              <img
                src="assets/Images/Profile.svg"
                alt=""
                className="hero_img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
