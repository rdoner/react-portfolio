import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resume">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="flatironsSquare.jpg"
                alt="avatar"
                style={{ height: "200px", borderRadius: "50%" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Ryan Doner</h2>
            <h4 style={{ color: "grey" }}>Fullstack Developer</h4>
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
            <h2>Skills</h2>
            <h6 className="skills">
              HTML/CSS, Javascript, ReactJS, ReactNative, NodeJS, ExpressJS, MongoDB
            </h6>
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Education</h2>
            <Education startYear={"Sep 2018"} endYear={"Mar 2019"} schoolName="Techtonic Academy">
              <li>Completed rigorous 6 month web development apprenticeship</li>
              <li>Team lead for a chore coordination app built using the MERN stack</li>
            </Education>
            <Education
              startYear={"Aug 2011"}
              endYear={"May 2015"}
              schoolName="University of Arizona"
              schoolDescription={
                "Bachelor of Science: Neuroscience and Cognitive Sciences, 2015\nUniversity of Arizona - Tucson\nGPA: 3.78\nGraduate of UofAs McGuire entrepreneurship program"
              }
            >
              <li>Bachelor of Science: Neuroscience and Cognitive Sciences</li>
              <li>GPA: 3.78</li>
              <li>Graduate of UofA's McGuire entrepreneurship program</li>
            </Education>

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>
            <Experience
              startYear={"Sep 2018"}
              endYear={"Current"}
              jobName="Techtonic"
              location={"Boulder, CO"}
              position="Software Developer"
            >
              <li>Constructed a React-Native front end for a waterpark company</li>
              <li>Built responsive UI for Android and iOS</li>
              <li>Performed unit tests using Jest and Enzyme</li>
            </Experience>
            <Experience
              position="Software Developer"
              startYear={"Aug 2017"}
              endYear={"June 2018"}
              jobName="RM3 Labs"
              location={"Boulder, CO"}
            >
              <li>
                Designed custom SAP Labware software to assist in automation of data analysis and
                reporting
              </li>
              <li>
                Crafted lab report templates using SAP Crystal Reports software utilizing SQL
                databases
              </li>
              <li>Programmed BASIC scripts to make calculations from lab data</li>
              <li>Wrote software documentation for lab chemists</li>
            </Experience>
            <Experience
              position="Web Designer"
              startYear={"Dec 2015"}
              endYear={"May 2016"}
              jobName={"Pryzm Labs"}
              jobDescription={"Web Designer"}
              location={"Dallas, TX"}
            >
              <li>
                Developed online store via Squarespace for electronic music and festival
                merchandise.
              </li>
              <li>
                Wrote blog posts on Pryzm's Squarespace site promoting camera accessory merchandise
              </li>
            </Experience>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
