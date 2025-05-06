import React from "react";

class NavElement extends React.Component {
  
    constructor (props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        color: props.color,
        margin: props.margin,
        adres: props.adres,
        title: props.title,
        anchor: props.anchor,
        backgroundColor: props.backgroundColor,
      } 
    }
    handleClick(title){
      this.props.changeActivePage(title);

      var windowOpen = window.innerWidth; 
      if (windowOpen <= 600){
        var hamburger = document.getElementsByClassName("hamburger");
        hamburger[0].classList.add("hamburgerVisable");
        var nav = document.getElementsByClassName("nawNormal");
        nav[0].classList.add("nawHidden");
        }
    }

    render() {
      return ( 
        <li onClick={()=>this.handleClick(this.state.title)}>
          <img src= {this.state.adres} alt = {this.state.title}/>
          <p className= "styleP">  {this.state.title} </p>  
        </li> 
      );
    };
  };
  
  export default NavElement;