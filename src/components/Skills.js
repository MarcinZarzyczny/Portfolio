import React from "react";
import reactIcon from './images/reactIcon3.png';
import htmlIcon from './images/htmlIcon2.png';
import jsIcon from './images/jsIcon1.png';
import cssIcon from './images/cssIcon2.png';
import jqueryIcon from './images/jQueryIcon.png';
import vsIcon from './images/vsIcon.png';
import vcIcon from './images/vcIcon.png';
import phpIcon from './images/phpIcon.png';
import githubIcon from './images/githubIcon.png';
import cIcon from './images/cIcon.png';
import boIcon from './images/boIcon.png';
import vIcon from './images/vIcon.png';
import wpIcon from './images/wpIcon.png';
import javaIcon from './images/javaIcon.png';
import sqlIcon from './images/sqlIcon.png';
import jsonIcon from './images/jsonIcon.png';
import corelIcon from './images/corelIcon.png';
import pmIcon from './images/pmIcon.png';
import ineIcon from './images/ineIcon.png';
import SkillsIcon from "./SkillsIcon.js";
import skills from "./images/skills.png";
import Title from "./Title.js";


const Skills = (props) => {
    return (
    <>
    <article>
    <Title title= "Umiejętności" image = {skills}></Title>
    <div className = "containerFive" alt= {"Grafika umieszczona w prawym dolnym rogu ekranu, przedstawiająca mężczyznę siedzącego na krześle i pracującego na komputerze."}>
        <p>Frontend</p>
        <div className = "containerSix">
            <SkillsIcon link = {reactIcon} technology={"React"}></SkillsIcon>
            <SkillsIcon link = {jsIcon} technology={"JavaScript"}></SkillsIcon>
            <SkillsIcon link = {jqueryIcon} technology={"jQuery"}></SkillsIcon>
            <SkillsIcon link = {boIcon} technology={"Bootstrap"}></SkillsIcon>
            <SkillsIcon link = {htmlIcon} technology={"HTML5"}></SkillsIcon>
            <SkillsIcon link = {vIcon} technology={"Velocity.js"}></SkillsIcon>
        </div>
        <p>Style</p>
        <div className = "containerSix">
            <SkillsIcon link = {cssIcon} technology={"CSS"}></SkillsIcon>
        </div>
        <p>Backend (na etapie nauki)</p>
        <div className = "containerSix">
            <SkillsIcon link = {javaIcon} technology={"Java"}></SkillsIcon>
            <SkillsIcon link = {cIcon} technology={"C#"}></SkillsIcon>
            <SkillsIcon link = {phpIcon} technology={"PHP"}></SkillsIcon>
            <SkillsIcon link = {sqlIcon} technology={"MySQL"}></SkillsIcon>
            <SkillsIcon link = {jsonIcon} technology={"JSON"}></SkillsIcon>      
        </div>  
        <p>Narzędzia</p>
        <div className = "containerSix">
            <SkillsIcon link = {githubIcon} technology={"GitHub"}></SkillsIcon>
            <SkillsIcon link = {vcIcon} technology={"VSCode"}></SkillsIcon>
            <SkillsIcon link = {vsIcon} technology={"VS"}></SkillsIcon>
            <SkillsIcon link = {pmIcon} technology={"Postman"}></SkillsIcon>      
        </div>
        <p>Systemy zarządzania treścią</p>
        <div className = "containerSix">
            <SkillsIcon link = {wpIcon} technology={"WordPress"}></SkillsIcon>            
        </div>  
        <p>Inne</p>
        <div className = "containerSix">
            <SkillsIcon link = {ineIcon} technology={"Inkscape"}></SkillsIcon>            
            <SkillsIcon link = {corelIcon} technology={"Corel"}></SkillsIcon>  
        </div>          
    </div>
    </article>   
    </> 
  
    );
}
export default Skills;