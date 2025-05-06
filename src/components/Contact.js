import React from "react";
import fotZTel from "./images/kon1.png";
import phoneIcon from "./images/phoneIcon.png";
import mailIcon from "./images/mailIcon.png";
import Multimedia from './Multimedia.js';
import fotZTel2 from './images/kon2.png';
import contaktIcon from './images/bitmapa.png';
import Title from "./Title.js";


class Contact extends React.Component{
    constructor (props) {
        super(props);
        this.mauseIn = this.mauseIn.bind(this);
        this.mauseOut = this.mauseOut.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            photo: props.photo
        }
    }
  
    mauseIn = () => {
        this.setState({
            photo: fotZTel2
        })  
      }
  
    mauseOut = () => {
        this.setState({
          photo: fotZTel
        })  
    }
    handleClick(){
        alert('Przepraszam, ta forma kontaktu nie jest jeszcze dostępna. '+ 
              'Proszę o skorzystanie z kontaktu telefonicznego lub własnej skrzynki mailowej.')
    }


render(){ 
    return (
    <>
    <article onMouseEnter ={()=>this.mauseIn()} onMouseLeave ={()=>this.mauseOut()}>
        <Title title= "Kontakt" image = {contaktIcon}></Title>
        <div className= "containerSexteen">
            <p>Chcesz nawiązać współpracę, skontaktuj się ze mną.</p>
            <div className = "contact">
                <img src={phoneIcon} alt={"Moje zdięcie"}></img>
                <a href="tel:+48605046192">Telefon: +48 605 046 192</a>
            </div>  
            <div className = "contact">
                <img src={mailIcon} alt={"Moje zdięcie"}></img>
                <a href="mailto:mzwebdew@gmail.com">E-mail: mzwebdew@gmail.com</a>  
            </div>   
            <Multimedia/>     
        </div>
        <div className = "containerTwentyFour">
            Administrator danych osobowych podanych przez Panią/Pana w&nbsp;formularzu kontaktowym to Marcin Zarzyczny, który ma swoją siedzibę na ul.&nbsp;Kilinskiego 42-200 Częstochowa.
            Dane&nbsp;osobowe będą wykorzystywane do realizacji Pani/Pana zapytania. Szczegółowe informacje dotyczące przetwarzania danych osobowych, w&nbsp;tym informacje o&nbsp;prawach, 
            które przysługują Pani/Panu, znajdują się w&nbsp;naszej Polityce Prywatności.
        </div >
        <div className= "containerTwenty">
            <form>
                <label for="fname">Imię:</label>
                <input type="text" id="fname" name="fname" onClick={()=>this.handleClick(this.state.title)}/>
                <label for="lname">Nazwisko</label>
                <input type="text" id="lname" name="lname" onClick={()=>this.handleClick(this.state.title)}/><br></br>
                <label for="lname">Telefon:</label>
                <input type="text" id="lname" name="lname" onClick={()=>this.handleClick(this.state.title)}/>
                <label for="lname">E-mail:</label>
                <input type="text" id="lname" name="lname" onClick={()=>this.handleClick(this.state.title)}/><br></br>
                <label for="lname">Firma/Organizacja:</label>
                <input type="text" id="lname" name="lname" onClick={()=>this.handleClick(this.state.title)}/><br></br>
                <textarea maxlength="1000" onClick={()=>this.handleClick(this.state.title)}></textarea><br></br>
                <input type="submit" value="Wyślij" onClick={()=>this.handleClick(this.state.title)}/>
            </form>                 
        </div>
        <div className="containerTwentyTwo">
            <img src={this.state.photo} alt={"Grafika przedstawiająca mężczyznę rozmawiającego przez telefon."}/>
        </div>
    </article>
    </> 
  
    );
}
}
export default Contact;