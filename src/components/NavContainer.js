import React from "react";
import NavElement from './NavElement.js';
import oMnie from './images/oMnie.png';
import skills from './images/skills.png';
import portfolio from './images/portfolio.png';
import contact from './images/bitmapa.png';
import home from './images/home.png';
import logo from './images/logo.png';
import Hamburger from "./Hamburger.js";


/*function navFixed() {
   if (window.pageYOffset > 100 && window.innerWidth > 640) {
    var nav =document.getElementsByTagName("nav");
    if(nav[0].style.position !== 'fixed' ){
      nav[0].style.position = "fixed";
    }else{
      nav[0].style.position = "relative";
    }

    
  }
}

setInterval(navFixed, 100);// Another one*/

const NavContainer = (props) => {
 
 return(
    <nav>
      <div className = "logo">
        <img
          className=""
          src={logo}
          alt={"logo mzDev"}
          href="https://www.facebook.com/?locale=pl_PL"
        />
      </div>
        <Hamburger class = {"hamburger hamburgerVisable"}></Hamburger>  
      <ul className="nawNormal nawHidden">
        <NavElement title = {"Home"}  adres = {home} activePage = {props.activePage} changeActivePage = {props.changeActivePage}/>
        <NavElement title = {"O mnie"} adres = {oMnie} activePage = {props.activePage} changeActivePage = {props.changeActivePage}/>
        <NavElement title = {"Umiejętności" } adres = {skills} activePage = {props.activePage} changeActivePage = {props.changeActivePage}/>
        <NavElement title = {"Projekty"} adres = {portfolio} activePage = {props.activePage} changeActivePage = {props.changeActivePage}/>
        <NavElement title = {"Kontakt"} adres = {contact} activePage = {props.activePage} changeActivePage = {props.changeActivePage}/>
      </ul>
    </nav>   
  )
  
}

export default NavContainer;