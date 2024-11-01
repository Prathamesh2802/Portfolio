function Hero_Section() {
  const projectsection = () => {
    const project = document.getElementById("projectid");
    project.scrollIntoView({ behavior: "smooth" });
  };

  const ResumeView = () => {
    window.location.href = "https://drive.google.com/file/d/1sKA6FootNjylnNyZF2i_9iw1NKz1txYU/view?usp=drive_link";
};

const LinkedlnView = () => {
  window.location.href = "https://www.linkedin.com/in/prathamesh-patil-901b65236";
}

const GithubView = () => {
  window.location.href = "https://github.com/Prathamesh2802"
}


  return (
    <>
      <div className="Hero_section light_theme">
        <div className="container">
          <div className="flex hero_content">
            <div className="w-50 flex flex-vertical">
              <h4>Hello!, My Name is</h4>
              <h1>Prathamesh Patil</h1>
              <p>
                Embark on a digital odyssey with me as a dedicated software
                developer. I specialize in transforming creative visions into
                reality through expert coding. Navigate my portfolio to witness
                a fusion of innovation and precision, creating seamless user
                experiences and pioneering solutions that transcend conventional
                boundaries.
              </p>
              <div className="flex hero-btn">
                <button className="btn" onClick={projectsection}>
                  Projects  &nbsp; <i className="fa-solid fa-diagram-project"></i>
                </button>
                <button className="btn" onClick={ResumeView}>
                  Resume &nbsp; <i className="fa-solid fa-file"></i>
                </button>
                <button className="btn" onClick={GithubView}>
                  Github &nbsp; <i className="fa fa-github"></i>
                  
                </button>
                <button className="btn" onClick={LinkedlnView}>
                  Linkedln &nbsp; <i className="fa fa-linkedin"></i>
                </button>
              </div>
            </div>
            <div>
              <img
                src="/src/assets/Images/Hero_img.png"
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

export default Hero_Section;
