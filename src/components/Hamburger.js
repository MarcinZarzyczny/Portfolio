import React from "react";

class Hamburger extends React.Component {
  
    constructor (props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = {
          class: this.props.class
        }
    }
    handleClick(){
      var nav = document.getElementsByClassName("nawNormal");
      nav[0].classList.remove("nawHidden");
      var hamburger = document.getElementsByClassName("hamburger");
      hamburger[0].classList.remove("hamburgerVisable");
        this.setState({
          class: "hamburger"
        })
        console.log( );
     
    };
    render() {
      var hamburger = <div className = {this.state.class} onClick={()=>this.handleClick()}>
                        <div className = "belki"></div>
                        <div className = "belki"></div>
                        <div className = "belki"></div>
                      </div> ;
      return ( 
        <>
         {hamburger}
        </>
         
    );
    };
  };
  
  export default Hamburger;