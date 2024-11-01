import Variables from "../Static/Variables";

function Project() {
  return (
    <>
      <div className="Project-section" id="projectid">
        <div className="container-large">
          <div className="flex project-title w-50">
            <h2>Projects</h2>
            <hr className="hr"></hr>
          </div>
          <div className="card">
            <div className="flex flex-vertical justify-content-center card-data">
              <img
                src="/src/assets/Images/SynchieNotes.png"
                className="project_img"
              ></img>
              <h3 style={Variables.textCenter}>Synchie Notes</h3>
              <p>
              I built SynchieNotes using Bootstrap, MongoDB, Express, and Redis. Users can register and log in, edit, view, and delete notes.
              I added Redis to fend off DDoS attacks and a honeypot to catch bot registrations.
              Users can also update their password and access their profile dashboard.
              </p>
              <div className="btn-flex">
                <a
                  href="https://github.com/Prathamesh2802/SynchieNotes"
                  target="blank"
                >
                  <button className="btn">
                    Code &nbsp;
                    <i className="fa fa-code"></i>
                  </button>
                </a>
                <a
                  href="https://synchienotes.pinu.live"
                  target="blank"
                >
                  <button className="btn">
                    Live &nbsp;
                    <i className="fa fa-link"></i>
                  </button>
                </a>
              </div>
            </div>
            <div className="flex flex-vertical justify-content-center card-data">
              <img
                src="/src/assets/Images/Portfolio.png"
                className="project_img"
              ></img>
              <h3 style={Variables.textCenter}>Portfolio</h3>
              <p>
              I have Developed Portfolio website to showcase of my work. It features a dark mode,
               ensuring a comfortable viewing experience in any lighting. The design is fully responsive,
                adapting smoothly across devices. 
                I've highlighted my work experience and projects, making the site both professional and engaging. Plus,
               it's  easy to navigate. 
              </p>
              <div className="btn-flex">
                <a
                  href="https://github.com/Prathamesh2802/Resume_Builder"
                  target="blank"
                >
                  <button className="btn">
                    Code &nbsp;
                    <i className="fa fa-code"></i>
                  </button>
                </a>
              </div>
            </div>
            <div className="flex flex-vertical justify-content-center card-data">
              <img
                src="/src/assets/Images/ResumeBuilder.png"
                className="project_img"
              ></img>
              <h3 style={Variables.textCenter}>Resume Builder</h3>
              <p>
                Developed Resume Builder, a web application using HTML, CSS, and
                JavaScript.Implemented 3 resume formats: functional,
                chronological, and combinational, providing users with
                flexibility. Utilized local storage to securely store user
                details, enabling of- fline access and modification
              </p>
              <div className="btn-flex">
                <a
                  href="https://github.com/Prathamesh2802/Resume_Builder"
                  target="blank"
                >
                  <button className="btn">
                    Code &nbsp;
                    <i className="fa fa-code"></i>
                  </button>
                </a>
                <a
                  href="https://prathamesh2802.github.io/Resume_Builder/"
                  target="blank"
                >
                  <button className="btn">
                    Live &nbsp;
                    <i className="fa fa-link"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
