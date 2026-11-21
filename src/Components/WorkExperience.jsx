import KcsImage from "../assets/Images/KCS.png";
import alten from "../assets/Images/alten.png";

function WorkExperience() {
  return (
    <>
      <div className="about_section" id="workexp">
        <div className="container-large">
          <div className="flex about-title w-65">
            <h2>Work Experience</h2>
            <hr className="hr"></hr>
          </div>
          <div className="flex about-content">
            <div className="img-center">
              <img src={alten} alt="" className="work_img" />
            </div>

            <div className="w-50 flex flex-vertical">
              <h2>Alten India</h2>
              <div className="info-data">
                <small>07/26 - Present</small>
                <small>Ch.SambhajiNagar (Aurangabad)</small>
              </div>

              <p>
                <ol>
                  <li>
                    Worked on SAP ERP applications, supporting business
                    processes and ensuring smooth application functionality.
                  </li>
                  <li>
                    Resolved customer issues and technical queries by
                    identifying root causes and implementing effective
                    solutions.
                  </li>
                  <li>
                    Developed and customized forms based on business
                    requirements to support efficient data entry and reporting.
                  </li>
                  <li>
                    Worked on application enhancements and maintenance to
                    improve system performance and functionality.
                  </li>
                  <li>
                    Collaborated with team members and stakeholders to
                    understand requirements and deliver solutions within defined
                    timelines.
                  </li>
                  <li>
                    Provided technical support, troubleshot application issues,
                    and ensured timely resolution of customer-reported problems.
                  </li>
                </ol>
              </p>
            </div>
          </div>

          <div className="flex about-content">
            <div className="w-50 flex flex-vertical">
              <h2>KCSSOFT</h2>
              <div className="info-data">
                <small>10/23 - 03/2026</small>
                <small>Ch.SambhajiNagar (Aurangabad)</small>
              </div>

              <p>
                <ol>
                  <li>
                    Developed and maintained applications using VB.NET and .NET
                    Core, enhancing functionality and performance.
                  </li>
                  <li>
                    Designed and optimized SQL queries to ensure efficient data
                    retrieval and manipulation.
                  </li>
                  <li>
                    Gained familiarity with React, contributing to front-end
                    development and improving user experience.
                  </li>
                  <li>
                    Worked on the Autosys application in Java, managing job
                    scheduling and workflow automation.
                  </li>
                  <li>
                    Assisted in backend development to fetch and provide correct
                    JSON data for application functionality.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to deliver
                    high-quality software solutions on time.
                  </li>
                </ol>
              </p>
            </div>
            <div className="img-center">
              <img src={KcsImage} alt="" className="work_img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkExperience;
