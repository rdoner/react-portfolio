import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={7}>
          {/* TODO: Change name, bio */}
            <h2>Ryan Doner</h2>
            <img src="flatironsPortrait.jpg" alt="avatar" style={{ width:'90%' }} />
            <p style={{ width: "90%", margin: "auto", paddingTop: "1em", textAlign: 'left' }}>
              I am a front end web and mobile developer from Tucson, AZ who currently resides in Boulder,
              Colorado. In 2015, I graduated from The University of Arizona with a BS in
              Neuroscience and Cognitive Sciences. In 2018, I completed a 6 month web
              developer apprenticeship program with the Techtonic Group in Boulder and was then hired fulltime as a software developer. I'm passionate about learning new
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
                  {/* TODO: Change contact info */}
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
