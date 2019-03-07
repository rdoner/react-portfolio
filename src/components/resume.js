import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="flatironsPortrait.jpg"
                alt="avatar"
                style={{ height: "200px", borderRadius: "50%" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Ryan Doner</h2>
            <h4 style={{ color: "grey" }}>React Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Motivated fullstack web developer with a strong desire to pursue excellence and
              continuously improve everyday. Looking to join a collaborative team made up of
              intellectually curious individuals who share a passion for personal development,
              mastering their craft, and who strive for balanced lives.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>3100 22nd St. Boulder, CO</p>
            <h5>Phone</h5>
            <p>(520) 664-6294</p>
            <h5>Email</h5>
            <p>ryanelliotdoner@gmail.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2011}
              endYear={2015}
              schoolName="University of Arizona"
              schoolDescription={
                "Bachelor of Science: Neuroscience and Cognitive Sciences, 2015\nUniversity of Arizona - Tucson\nGPA: 3.78\nGraduate of UofAs McGuire entrepreneurship program"
              }
            >
              <li>Bachelor of Science: Neuroscience and Cognitive Sciences</li>
              <li>GPA: 3.78</li>
              <li>Graduate of UofA's McGuire entrepreneurship program</li>
            </Education>

            <Education startYear={2018} endYear={2019} schoolName="Techtonic Academy">
              <li>Completed rigorous 6 month web development apprenticeship</li>
              <li>Team lead for a chore coordination app built using the MERN stack</li>
            </Education>

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2018}
              jobName="RM3 Labs"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            >
              <li>
                Designed and tested Labware LIMS (Lab Information Management System) to assist in
                automation of tasks including data analysis and reporting.
              </li>
              <li>
                Crafted lab report templates using SAP Crystal Reports software utilizing both SQL
                and Excel databases.
              </li>
              <li>
                Programmed LIMS Basic (derivative of Visual Basic) scripts to make calculations from
                data in SQL databases.
              </li>
              <li>
                Wrote documentation for LIMS software specialized to chemists, biologists, and
                secretarial staff.
              </li>
            </Experience>

            <Experience
              startYear={2019}
              endYear={2018}
              jobName="Techtonic"
              jobDescription="Software Developer"
            >
              <li>Constructed a React-Native front end for a waterpark company</li>
            </Experience>
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={100} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="React" progress={25} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
