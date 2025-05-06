import React from "react";
import PrivacyPolicyIcon from "./images/PrivacyPolicyIcon.png";
import Title from "./Title.js";

const PrivacyPolicy = (props) => {
    return (
        <>
        <article>
         <Title title= "Polityka Prywatności" image = {PrivacyPolicyIcon}></Title>
            <div className="containerTwentyThry">
                <h3>Informacja o przetwarzaniu danych osobowych (RODO).</h3>
                <p>Zgodnie z rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych (RODO), informujemy, że:</p>
                <h4>1. Administrator danych</h4>
                <p> Administratorem Państwa danych osobowych jest Marcin Zarzyczny, z siedzibą w ul. Kilińskioego 2/22. Można się z nami skontaktować pod adresem e-mail: mzwebdew@gmail.com.</p>
                <h4>2. Cel przetwarzania danych</h4>
                <p>Państwa dane osobowe będą przetwarzane w celu:<br></br>
                - odpowiedzi na zapytanie kontaktowe,<br></br>
                - realizacji komunikacji z klientem, w tym kontaktu telefonicznego oraz mailowego.</p>
                <h4>3. Podstawy prawne przetwarzania</h4>
                <p>Dane osobowe będą przetwarzane na podstawie:
                art. 6 ust. 1 lit. a RODO (zgoda osoby, której dane dotyczą), w przypadku udzielenia zgody na przetwarzanie danych osobowych,
                art. 6 ust. 1 lit. b RODO (niezbędność do wykonania umowy) — w przypadku przetwarzania danych w celu realizacji działań związanych z zapytaniem kontaktowym.p</p>
                <h4>4. Zakres przetwarzanych danych</h4>
                <p>Przetwarzamy następujące dane osobowe:<br></br>
                - imię i nazwisko,<br></br>
                - numer telefonu,<br></br>
                -adres e-mail.</p>
                <h4>5. Odbiorcy danych</h4>
                <p>Państwa dane osobowe mogą być udostępnione jedynie następującym odbiorcom:<br></br>
                - podmiotom przetwarzającym dane na zlecenie administratora (np. dostawcy usług IT, obsługi poczty elektronicznej),<br></br>
                organom państwowym lub innym uprawnionym instytucjom, jeśli wynika to z obowiązujących przepisów prawa.</p>
                <h4>6. Okres przechowywania danych</h4>
                <p>Państwa dane osobowe będą przechowywane przez czas niezbędny do realizacji celu, w którym zostały zebrane (np. przez czas odpowiedzi na zapytanie kontaktowe), a następnie przez okres wymagany przez przepisy prawa (np. przepisy podatkowe).</p>
                <h4>7. Prawa osób, których dane dotycz</h4>
                <p>Przysługuje Państwu prawo do:<br></br>
                - dostępu do swoich danych osobowych,<br></br>
                - sprostowania swoich danych osobowych,<br></br>
                - usunięcia danych osobowych (tzw. prawo do bycia zapomnianym),<br></br>
                - ograniczenia przetwarzania danych,<br></br>
                - przenoszenia danych (jeżeli ma to zastosowanie),<br></br>
                - wniesienia sprzeciwu wobec przetwarzania danych,<br></br>
                - cofnięcia zgody na przetwarzanie danych w dowolnym momencie, co nie wpływa na zgodność z prawem przetwarzania, które miało miejsce przed jej cofnięciem.<br></br>
                W celu skorzystania z powyższych praw prosimy o kontakt na adres e-mail: mzwebdew@gmail.com.</p>
                <h4>8. Prawo do wniesienia skargi</h4>
                <p>W przypadku uznania, że przetwarzanie Państwa danych osobowych narusza przepisy RODO, przysługuje Państwu prawo do wniesienia skargi do organu nadzorczego — Prezesa Urzędu Ochrony Danych Osobowych.</p>
                <h4>9. Dobrowolność podania danych</h4>
                <p>Podanie danych osobowych jest dobrowolne, jednak niezbędne do skontaktowania się z nami oraz otrzymania odpowiedzi na zapytanie kontaktowe.</p>
            </div>
        </article>   
  
        </>
 
    );
}
export default PrivacyPolicy;