import React from "react";
import block from './images/block.png';


const Item = ({ item }) => (
    <div className= "containerSeven">
        <img className = "icon" src= {item.photo} alt = {"Grafika przedstawiająca technologię wykorzystaną w projekcie technologię " + item.name + "."}/>
        <p>{item.name}</p>
    </div>  
)
class IconDesign extends React.Component {

    render() {
        const technologies = this.props.technologies
        const Items = technologies.map(item => <Item key={item.name} item = {item}/>) 

        return ( 
            <a href= {this.props.link} title = {this.props.opis}>
                <div className = "containerNine">
                    <div className = "block">
                        <img src= {block} alt = "faf"/>
                    </div>
                    <div className = "phone">
                        <img src= {this.props.photo} alt="Graficzne przedstawienie wykonanego projektu przy próbie otwarcia na smartfonie."/>
                    </div>
                    <div className = "containerFifteen">
                        <p>{this.props.title}</p>
                        <p>{this.props.description}</p>
                        <p>Wykorzystane technologie:</p>
                        {Items}
                    </div>
                
                </div>
            </a> 
        );
    }
}
export default IconDesign;