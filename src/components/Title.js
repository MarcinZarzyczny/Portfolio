
import React from "react";


const Title = (props) => {
    return (
    <>
    <div className= "title">
        <img src={props.image} alt={"Ikona graficzna przedstawiajaca tytuł sekcji " + props.title + "." }></img>
        <h1>{props.title}</h1>  
    </div>
    </> 
  
    );
}
export default Title;


