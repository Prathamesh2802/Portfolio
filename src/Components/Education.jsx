function Education() {
  const Education_Data = [
    {
      College_Link: "/src/assets/Images/Diems.png",
      College_Name:
        "Deogiri Institute of Engineering and Management Studies, Aurangabad, Maharashtra",
      College_Department: "B.Tech in Electronics and Telecommunications",
      College_Year: "2020-2023",
      College_Percentage: "8.80 CGPA",
    },
    {
      College_Link: "/src/assets/Images/GPS.png",
      College_Name: "Government Polytechnic, Solapur, Maharashtra",
      College_Department: "Diploma/Polytechnic in Information Technology",
      College_Year: "2017-2020",
      College_Percentage: "84%",
    },
    {
      College_Link: "/src/assets/Images/NES.jpg",
      College_Name: "Narendra English School, Aurangabad, Maharashtra",
      College_Department: "10th SSC",
      College_Year: "2016-2017",
      College_Percentage: "87%",
    },
  ];
  return (
    <>
      <div className="education_section" id="edu">
        <div className="container-large">
          <div className="flex education-title w-50">
            <h2>Education</h2>
            <hr className="hr"></hr>
          </div>

          {Education_Data.map((Data, Index) => (
            <div key={Index} className="flex education_section">
              <div className="educational-block dashed-border">
                <div className="flex row-gap p-2">
                  <img
                    src={Data.College_Link}
                    className="college_logo"
                    alt="College Logo"
                  />
                  <div className="educational-desc">
                    <h3>{Data.College_Name}</h3>
                    <h4>{Data.College_Department}</h4>
                  </div>
                </div>
                <div className=" edu-data justify-content-between">
                  <p>
                    <b>{Data.College_Year}</b>
                  </p>
                  <p>
                    <b>{Data.College_Percentage}</b>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
// Hardcoded Education Sections

/* <div className="flex education_section ">
            <div className="educational-block dashed-border">
              <div className="flex align-items-center">
                <img
                  src="/src/assets/Images/Diems.png"
                  className="college_logo"
                ></img>
                <div className="educational-desc">
                  <h3>
                    Deogiri Institute of Engineering and Management Studies
                  </h3>
                  <h4>B.Tech in Electronics and Telecommunications</h4>
                </div>
              </div>
              <div className="flex justify-content-between">
                <p>2020-2023</p>
                <p>8.80 CGPA</p>
              </div>
            </div>
          </div>
          <div className="flex education_section ">
            <div className="educational-block dashed-border">
              <div className="flex align-items-center">
                <img
                  src="/src/assets/Images/Diems.png"
                  className="college_logo"
                ></img>
                <div className="educational-desc">
                  <h3>Government Polytechnic, Solapur</h3>
                  <h4>Diploma/Polytechnic in Information Technology</h4>
                </div>
              </div>
              <div className="flex justify-content-between">
                <p>2020-2023</p>
                <p>8.80 CGPA</p>
              </div>
            </div>
          </div>
          <div className="flex  education_section ">
            <div className="educational-block dashed-border">
              <div className="flex align-items-center">
                <img
                  src="/src/assets/Images/Diems.png"
                  className="college_logo"
                ></img>
                <div className="educational-desc">
                  <h3>
                    Narendra English, School
                  </h3>
                  <h4>SSC</h4>
                </div>
              </div>
              <div className="flex justify-content-between">
                <p>2016-2017</p>
                <p>87%</p>
              </div>
            </div>
          </div> */

export default Education;
