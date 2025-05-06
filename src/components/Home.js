import React from "react";
import face from './images/face.png';
import face2 from './images/face2.png';
import reactIcon from './images/reactIcon3.png';
import cssIcon from './images/cssIcon.png';
import htmlIcon from './images/htmlIcon2.png';
import jsIcon from './images/jsIcon.png';
import sqlIcon from './images/sqlIcon.png';
import jqueryIcon from './images/jQueryIcon.png';
import cIcon from './images/cIcon.png';
import phpIcon from './images/phpIcon.png';
import wpIcon from './images/wpIcon.png';
import javaIcon from './images/javaIcon.png';
import vsIcon from './images/vsIcon.png';
import vcIcon from './images/vcIcon.png';
import jsonIcon from './images/jsonIcon.png';
import Multimedia from './Multimedia.js';

class Home extends React.Component{
    constructor (props) {
        super(props);
        this.mauseIn = this.mauseIn.bind(this);
        this.state = {
            photo: props.photo
        }
    }
  
    mauseIn = () => {
        this.setState({
            photo: face2
        })  
      }

    mauseOut = () => {
        this.setState({
          photo: face
        })  
    }
    render(){
    return (
        <>
      <article onMouseEnter ={()=>this.mauseIn()} onMouseLeave ={()=>this.mauseOut()}>
        <div className= "container">
            <div className= "container3">
                <img className = "reactIcon" src= {reactIcon} alt = {"Grafika przedstawiająca technologię React."}/>
                <img className = "cssIcon" src= {cssIcon} alt = {"Grafika przedstawiająca technologię CSS."}/>
                <img className = "htmlIcon" src= {htmlIcon} alt = {"Grafika przedstawiająca technologię HTML5"}/>
                <img className = "jsIcon jsAnimate " src= {jsIcon} alt = {"Grafika przedstawiająca technologię JavaScript."}/>
                <img className = "mysqlIcon icon" src= {sqlIcon} alt = {"Grafika przedstawiająca technologię MySQL."}/>
                <img className = "cIcon icon icon2" src= {cIcon} alt = {"Grafika przedstawiająca technologię C#."}/>
                <img className = "jqueryIcon icon icon2" src= {jqueryIcon} alt = {"Grafika przedstawiająca technologię jQuery."}/>
                <img className = "phpIcon icon icon2" src= {phpIcon} alt = {"Grafika przedstawiająca technologię PHP."}/>
                <img className = "wpIcon icon" src= {wpIcon} alt = {"Grafika przedstawiająca technologię WordPress."}/>
                <img className = "javaIcon icon icon2" src= {javaIcon} alt = {"Grafika przedstawiająca technologię Java."}/>
                <img className = "vsIcon icon icon2" src= {vsIcon} alt = {"Grafika przedstawiająca Visual Studio"}/>
                <img className = "vcIcon icon icon2" src= {vcIcon} alt = {"Grafika przedstawiająca Visual Studio Code."}/>
                <img className = "jsonIcon icon" src= {jsonIcon} alt = {"Grafika przedstawiająca technologię JSON."}/>
            </div> 
        </div>
        <div className = "container2">
            <p>Witam, nazywam się Marcin Zarzyczny </p>              
            <p>Junior Front-End Developer</p>
            <Multimedia/>
        </div>
        <img className = "imgStyle" src= {this.state.photo} alt = {"Zdjęcie twarzy wpatrującej się w różne technologie."}/>
      </article>
    </>
 
    );
}
}
  
    export default Home;