// import React, { Component } from "react";

import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class About extends Component {
  //   render() {
  //     return (
  //       <div>
  //         <h1>I AM A...</h1>
  //         <p className="about-me">
  //           ...fullstack web developer from Tucson, AZ who currently resides in Boulder, Colorado. In
  //           2015, I graduated from The University of Arizona with a BS in Neuroscience and Cognitive
  //           Sciences. After college, I explored a few different career paths while teaching myself web
  //           development. In 2018, I completed a 6 month web developer apprenticeship program with the
  //           Techtonic Group in Boulder. For our classroom project I was the team lead for an app built
  //           using the MERN stack and I later worked on a React Native app for a client. I'm passionate
  //           about learning new things which I express through my passions for web development, rock
  //           climbing and scuba diving. I'm currently looking for a full time position as a web
  //           developer in the Boulder-Denver Metro area.
  //         </p>
  //       </div>
  //     );
  //   }
  // }

  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={7}>
            <h2>Ryan Doner</h2>
            <img src="flatironsPortrait.jpg" alt="avatar" style={{ width:'90%' }} />
            <p style={{ width: "90%", margin: "auto", paddingTop: "1em", textAlign: 'left' }}>
              I am a fullstack web developer from Tucson, AZ who currently resides in Boulder,
              Colorado. In 2015, I graduated from The University of Arizona with a BS in
              Neuroscience and Cognitive Sciences. After college, I explored a few different career
              paths while teaching myself web development. In 2018, I completed a 6 month web
              developer apprenticeship program with the Techtonic Group in Boulder. I was trained in the MERN stack and I
              built a React Native app for a client. I'm passionate about learning new
              things which I express through my passions for web development, rock climbing and
              scuba diving. I'm currently looking for a full time position as a web developer in the
              Boulder area.
            </p>
          </Cell>
          <Cell col={5}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: "25px", color: 'white'}}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (520) 664-6294
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: "25px", color: 'white'}}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    RyanElliotDoner@gmail.com
                  </ListItemContent>
                </ListItem>

            
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
