import React from "react";
import IconDesign from "./IconDesign.js";
import CategoriesDesign from "./CategoriesDesign.js";
import htmlIcon from './images/htmlIcon2.png';
import jsIcon from './images/jsIcon1.png';
import jqueryIcon from './images/jQueryIcon.png';
import cssIcon from './images/cssIcon2.png';
import wpIcon from './images/wpIcon.png';
import maszTech from './images/maszTech.png';
import reservationSystemPhoto from './images/reservationSystem.png';
import reactIcon from './images/reactIcon3.png';
import gamePhoto from './images/game.png';
import speedTextPhoto from './images/speedText.png';
import boIcon from './images/boIcon.png';
import jsonIcon from './images/jsonIcon.png';
import discussionForumPhoto from './images/discussionForum.png';
import wesoloMiPhoto from './images/wesoloMi.png';
import oberskiPhoto from './images/oberski.png';
import ariaIcon from './images/ariaIcon.png';
import elementorIcon from './images/elementorIcon.png';
import worksIcon from './images/portfolio.png';
import Title from "./Title.js";


const reservationSystem = [
  {'name': 'JavaScript', 
    'photo': jsIcon}, 
  {'name': 'React',
   'photo': reactIcon},
  {'name': 'HTML5',
   'photo': htmlIcon},
  {'name': 'CSS',
   'photo': cssIcon},  
];

const wesoloMi = [
  {'name': 'JavaScript',
   'photo': jsIcon},
  {'name': 'jQuery',
   'photo': jqueryIcon},
  {'name': 'Bootstrap',
   'photo': boIcon},  
  {'name': 'HTML5', 
   'photo' : htmlIcon}, 
  {'name': 'CSS',
   'photo': cssIcon}
];

const game = [
  {'name': 'JavaScript',
   'photo': jsIcon},
  {'name': 'HTML5', 
   'photo': htmlIcon}, 
  {'name': 'CSS',
   'photo': cssIcon}
];

const discussionForum = [
  {'name': 'HTML5', 
   'photo': htmlIcon}, 
  {'name': 'CSS',
   'photo': cssIcon}
];

const speedText = [
  {'name': 'JavaScript',
   'photo': jsIcon},
  {'name': 'jQuery',
   'photo': jqueryIcon},
  {'name': 'Bootstrap',
    'photo': boIcon}, 
  {'name': 'HTML5', 
   'photo': htmlIcon}, 
  {'name': 'CSS',
   'photo': cssIcon},
  {'name': 'JSON',
   'photo': jsonIcon}
];

const oberski = [
  {'name': 'HTML5', 
   'photo': htmlIcon}, 
  {'name': 'CSS',
   'photo': cssIcon}
];

const masztech = [
  {'name': 'WordPress',
   'photo' : wpIcon},
  {'name': 'Astra',
   'photo': ariaIcon},
  {'name': 'Elementor',
   'photo': elementorIcon},
  {'name': 'JavaScript',
   'photo': jsIcon}
];


const Works = (props) => {
    return (
    <>
      <article>
      <Title title= "Projekty" image = {worksIcon}></Title>
      <CategoriesDesign title = {"Strony oraz aplikacje internetowe"} class={"first"}>
        <IconDesign link = "https://github.com/MarcinZarzyczny/Reserwations_system" opis = {"Kliknij, aby przjść do repozytorium Git."} photo = {reservationSystemPhoto} title = {"System rezerwacji miejsc"} description = {"Przykładowy system rezerwacji miejsc wykonany w technologii React, któro pozwala użytkownikom na łatwe wybieranie i rezerwację dostępnych miejsc."} technologies = {reservationSystem}></IconDesign>
        <IconDesign link = "https://github.com/MarcinZarzyczny/Website-Wesolo-Mi" photo = {wesoloMiPhoto} title = {"Wesoło mi- animacje dla dzieci"} opis = {"Kliknij, aby przjść do repozytorium Git."} description= {"Przykładowa realizacja witryna www dla firmy usługowej zajmującej się organizacja gier i zabaw dla dzieci."} technologies = {wesoloMi}></IconDesign>
        <IconDesign link = "https://github.com/MarcinZarzyczny/MazeGame" photo = {gamePhoto} title = {"Gra przeglądarkowa: Labirynt"} opis = {"Kliknij, aby przjść do repozytorium Git."} description= {"Mini gra oparta na przeglądarce."} technologies = {game} ></IconDesign>
        <IconDesign link = "https://github.com/MarcinZarzyczny/Discussion_forum" photo = {discussionForumPhoto} title = {"Projekt forum dyskusyjnego"} opis = {"Kliknij, aby przjść do repozytorium Git."} description= {"Treningowy projekt forum dyskusyjnego."} technologies = {discussionForum} ></IconDesign>
        <IconDesign link = "https://github.com/MarcinZarzyczny/Website_of_the_hair_salon" photo = {oberskiPhoto} title = {"Projekt strony salonu usługowego"} opis = {"Kliknij, aby przjść do repozytorium Git."} description= {"Treningowy projekt strony internetowej dla salonu usługowego. W tym przypadku salon fryzjerskiego."} technologies = {oberski} ></IconDesign>
      </CategoriesDesign>
      <CategoriesDesign title = {"Wtyczki i rozszerzenia"} class={"containerFourteen"}>
        <IconDesign link = "https://github.com/MarcinZarzyczny/Wtyczka-Google-SpeedText" photo = {speedTextPhoto} title = {"SpeedText- wtyczka do Google Chrome"} opis = {"Kliknij, aby przjść do repozytorium Git."} description= {"Wtyczka ułatwiająca wypełnianie formularzy, którą można pobrać w Chrome Web Store."} technologies = {speedText}></IconDesign>
      </CategoriesDesign >
      <CategoriesDesign title = {"Strony www wykonane w CMS"} class={"containerFourteen"}>
      <IconDesign link = {"https://masz-tech.com.pl/"} opis = {"Kliknij, aby przjść do strony."} photo = {maszTech} title = {"MASZ-TECH- wszystko dla przemysłu"} description= {"Strona internetowa oparta na technologii CMS, która zapewnia pełną kontrolę nad treścią i jej łatwą edycję."} technologies = {masztech}></IconDesign>
      </CategoriesDesign>
      </article>
  </> 
    );
}
  
    export default Works;
