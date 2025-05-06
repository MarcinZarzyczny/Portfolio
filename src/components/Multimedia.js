import React from "react";
import githubIcon from "./images/githubIcon.png";
import fbIcon from "./images/fbIcon.png";
import inIcon from "./images/inIcon.png";


const Multimedia = props => (
    <div className="socialMedia">
        <a  href="https://pl-pl.facebook.com/marcin.zarzyczny">
            <img
                className="fbIcon multimediaIcon"
                src={fbIcon}
                alt={"Ikona graficzna przedstawiająca portal Facebooka."}
                title="Kliknij, aby przejść do strony!!!"
            />
        </a>
        <a href="https://github.com/MarcinZarzyczny"> 
            <img
                className="githubIcon multimediaIcon"
                src={githubIcon}
                alt={"Ikona graficzna przedstawiająca portal GitHaub"}
                title="Kliknij, aby przejść do strony!!!"
            />
        </a>
        <a href="https://pl.linkedin.com/in/marcin-zarzyczny-33a200173">
            <img className="inIcon multimediaIcon" 
                src={inIcon} 
                alt={"Ikona graficzna przedstawiająca portal Linkedin."} 
                title="Kliknij, aby przejść do strony!!!"
            />
        </a>
        
    </div> 
)

export default Multimedia;