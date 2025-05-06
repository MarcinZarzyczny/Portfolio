import React from "react";
import sylwetka from "./images/sylwetka2.png";
import Multimedia from "./Multimedia.js";
import sylwetka1 from './images/sylwetka.png';
import Title from "./Title.js";
import amIcon from './images/oMnie.png';


class AboutMe extends React.Component{
  constructor (props) {
      super(props);
      this.mauseIn = this.mauseIn.bind(this);
      this.state = {
          photo: props.photo
      }
  }

  mauseIn = () => {
      this.setState({
          photo: sylwetka1
      })  
    }

  mauseOut = () => {
      this.setState({
        photo: sylwetka
      })  
  }
 
  render(){

  return (
    <>
      <article onMouseEnter ={()=>this.mauseIn()} onMouseLeave ={()=>this.mauseOut()}>
        <Title title= "O mnie" image = {amIcon}></Title>      
        <div className= "containerSeventeen" >
          <img className= "imgStyle2" src={this.state.photo} alt={"Grafika przedstawiająca człowieka z założonymi rękoma."}/>
        </div>
        <div className="containerEighteen">
          <div className="containerFour">
            <p>
              Cześć! Nazywam się Marcin Zarzyczny i&nbsp;jako początkujący front end
              developer, jestem pasjonatem technologii webowych. 
              Moje&nbsp;wykształcenie zdobyłem na kierunku informatycznym w&nbsp;Akademii
              Ekonomiczno-Humanistycznej w&nbsp;Warszawie, gdzie nauczyłem się
              tworzyć nowoczesne i&nbsp;responsywne strony przy użyciu HTML, CSS oraz
              JavaScript. React stał się moim ulubionym narzędziem do budowania
              dynamicznych interfejsów, a&nbsp;jQuery umożliwia mi efektywne
              manipulowanie elementami na stronie. Pracując z WordPressem,
              zyskałem wiedzę na temat systemów zarządzania treścią.
              Wierzę,&nbsp;że&nbsp;umiejętności programowania w&nbsp;C#, PHP oraz mySQL, które
              rozwijam w&nbsp;wolnym czasie, otworzą przede mną drzwi do
              rzeczywistości full stack developera.
            </p>
            <p className="p2">
              Zapraszam do współpracy oraz znajdziesz mnie na:
            </p>
            <Multimedia></Multimedia>
          </div> 
        </div>
      </article>
    </>
  );
 }
};

export default AboutMe;
