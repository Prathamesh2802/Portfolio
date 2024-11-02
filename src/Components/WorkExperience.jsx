import KcsImage from "../assets/Images/KCS.png"

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
            <div className="w-50 flex flex-vertical">
                <h2>KCSSOFT</h2>
                <div className="info-data">
                <small>10/23 - Today</small>
                <small>Ch.SambhajiNagar (Aurangabad)</small>
                </div>
                
              <p>
                <ol>
                    <li>Developed and maintained applications using VB.NET and .NET Core, enhancing functionality and performance.</li>
                    <li>Designed and optimized SQL queries to ensure efficient data retrieval and manipulation.</li>
                    <li>Gained familiarity with React, contributing to front-end development and improving user experience.</li>
                    <li>Worked on the Autosys application in Java, managing job scheduling and workflow automation.</li>
                    <li>Assisted in backend development to fetch and provide correct JSON data for application functionality.</li>
                    <li>Collaborated with cross-functional teams to deliver high-quality software solutions on time.</li>
                </ol>
              </p>
            </div>
            <div className="img-center">
              <img
                src={KcsImage}
                alt=""
                className="work_img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkExperience;
