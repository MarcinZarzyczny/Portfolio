import React from "react";


class AnnouncementGdpr extends React.Component { 
    constructor (props) {
        super(props);
        this.handleClick2 = this.handleClick2.bind(this); 
        this.privacyPolicyHidden = this.privacyPolicyHidden.bind(this); 

        this.state = {
          classPrivacyPolicyAkcept: 'announcementGdpr'
        } 
      }
      handleClick2(title){
        this.props.changeActivePage(title);      
      }
      privacyPolicyHidden(){
        localStorage.setItem("PrivacyPolicyAkcept", "true");

        var vbvcb = document.getElementsByClassName("announcementGdpr");
        vbvcb[0].classList.add('announcementGdprHidden');
      }
     privacyPolicyHidden2(){
        if (localStorage.getItem("PrivacyPolicyAkcept") === null) {
          localStorage.setItem("PrivacyPolicyAkcept", "false");
        }else{
          var element = localStorage.getItem("PrivacyPolicyAkcept");
          if(element === 'true'){
            if(this.state.classPrivacyPolicyAkcept === 'announcementGdpr'){
              this.setState({
                classPrivacyPolicyAkcept: "announcementGdpr announcementGdprHidden" 
              })
            };
          };          
        };      
      }

    render() {
      this.privacyPolicyHidden2();
      return ( 
        <>
          <div className={this.state.classPrivacyPolicyAkcept}>
            <p>
                Zarządzanie Twoimi danymi podczas korzystania z&nbsp;plików cookie leży w&nbsp;gestii administratora strony. 
                Administrator, ma możliwość przetwarzania Twoich danych w&nbsp;celu zapewnienia sprawnego działania systemu.
                Aby zapewnić jak najlepsze doświadczenia na naszej stronie, wykorzystujemy narzędzia analityczne, w&nbsp;tym Google Analytics, do zbierania informacji o&nbsp;sposobie korzystania z&nbsp;witryny. 
                Dzięki temu możemy stale doskonalić jej funkcjonalności i lepiej dopasować treści do potrzeb naszych użytkowników. 
                Szczegółowe informacje o&nbsp;plikach cookie i&nbsp;ochronie prywatności znajdziesz w&nbsp;naszej Polityce&nbsp;Prywatności.
            </p>
            <div className="announcementGdprTwo">
                <button className="myButton" onClick={()=>this.privacyPolicyHidden()}>OK</button>
                <button className="myButton" onClick={()=>this.handleClick2("PrivacyPolicy")}>Polityka prywatnośći</button>
            </div>
            
          </div>
        </> 
       );
           
      
    };

}
export default AnnouncementGdpr;