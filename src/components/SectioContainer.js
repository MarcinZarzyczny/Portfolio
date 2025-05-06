import React from "react";




const SectionContainer = (props) => {
  const buttonStyle = {
    overflow: props.overflow
  };

    return ( 
      <section style={buttonStyle}>
        {props.children}
      </section> 
    );
}
  
    export default SectionContainer;