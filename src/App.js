import React from 'react';
import NavContainer from './components/NavContainer.js';
import SectioContainer from './components/SectioContainer.js';
import AboutMe from './components/AboutMe.js';
import Home from './components/Home.js';
import Skills from './components/Skills.js';
import Works from './components/Works.js';
import Contact from './components/Contact.js';
import face from './components/images/face.png';
import sylwetka from "./components/images/sylwetka.png";
import fotZTel from "./components/images/kon1.png";
import Footer from './components/Footer.js';
import PrivacyPolicy from './components/PrivacyPolicy.js';
import AnnouncementGdpr from './components/AnnouncementGdpr.js';




class App extends React.Component {
  state = {
    activePage: "Home",
    link: face
  }
  changeActivePage = (title) => {
    var activePage;
    if(title !== this.state.activePage){
      activePage = title;
      this.setState({
        activePage: activePage,
        link: face
      })
    }
    return activePage;
  }
  
  render () {
    var active;
    var nav = <NavContainer activePage = {this.state.activePage} changeActivePage = {this.changeActivePage}></NavContainer>;
    if(this.state.activePage === "Home"){
      active =  <SectioContainer backgroundColor = {'#1b7f63'} color= {"#000000"} title = {"Home"} name = {"Home"} overflow = {"hidden"}>
                    <Home photo = {face}></Home>
                </SectioContainer>      
    }else if(this.state.activePage === "O mnie"){
      active =  <SectioContainer backgroundColor = {'#1b7f63'} color= {"#000000"} title = {"O mnie"} name = {"Omnie"} overflow = {"hidden"}>
                  <AboutMe photo = {sylwetka}></AboutMe>
                </SectioContainer>   
    }else if(this.state.activePage === "Umiejętności"){
      active =  <SectioContainer backgroundColor = {'#1b7f63'} color= {"#000000"} title = {"Umiejętnosći"} name = {"Umiejętnosći"} overflow = {"hidden"}>
                  <Skills></Skills>
                </SectioContainer>
    }else if(this.state.activePage === "Projekty"){
      active =  <SectioContainer backgroundColor = {'#1b7f63'} color= {"#000000"} title = {"Portfolio"} name = {"Portfolio"} overflow = {"auto"}>
                  <Works></Works>
                </SectioContainer>
    }else if(this.state.activePage === "Kontakt"){
      active =  <SectioContainer backgroundColor = {'#1b7f63'} color= {"#000000"} title = {"Kontakt"} name = {"Kontakt"} overflow = {"hidden"}>
                  <Contact photo = {fotZTel}></Contact>
                </SectioContainer>
    }else if(this.state.activePage === "PrivacyPolicy"){
      active =  <SectioContainer backgroundColor = {'#1b7f63'} color= {"#000000"} title = {"PrivacyPolicy"} name = {"PrivacyPolicy"}overflow = {"hidden"}>
                  <PrivacyPolicy></PrivacyPolicy>
                </SectioContainer>
    }
    return (
      <>
        {nav}
        {active}
        <Footer title = {"PrivacyPolicy"} changeActivePage = {this.changeActivePage}/>
        <AnnouncementGdpr changeActivePage = {this.changeActivePage}/>

      </>
    )
  }
}

export default App;
