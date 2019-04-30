import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
// import flatironsPortrait from 'flatironsPortrait.jpg';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout className="layout">
            <Header 
              className="header-color" 
              style={{
                // TODO: Customize background color
              backgroundColor: '#5b7baf', 
              boxShadow: 'inset 0px -40px 58px -37px #000000'}}
              title={
                // TODO: Customize font family
                <Link className="home-button" style={{textDecoration: 'none', color: 'white', fontFamily: 'Source Code Pro'}} 
                  to="/">Home
                </Link>} 
              scroll>
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration: 'none', color: 'black', fontFamily: 'Source Code Pro'}} to="/">Home</Link>}>
                <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/projects">Projects</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
      </div>

    );
  }
}

export default App;
