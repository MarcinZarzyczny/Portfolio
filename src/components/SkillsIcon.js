import React from "react";

const SkillsIcon = props => (
<div className= "containerSeven">
    <img className = "icon" src= {props.link} alt = {"Grafika przedstawiająca technologię " + props.technology + "." }/>
    <p>{props.technology}</p>
</div> 
)

export default SkillsIcon;