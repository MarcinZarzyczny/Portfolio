import React from "react";


class Footer extends React.Component { 
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
          title: props.title,
        } 
      }
      handleClick(title){
        this.props.changeActivePage(title);        
      }
    render() {
        return ( 
            <>
            <footer>
                <p> &copy; Wszelkie prawa zastrzeżone. | Wykonał Marcin | <a href="mailto:mzwebdew@gmail.com">mzwebdew@gmail.com </a></p><p className="privacyPolicy"  onClick={()=>this.handleClick(this.state.title)}>| Polityka prywatnośći</p>
            </footer> 
            </> 
        );
      };

}
export default Footer;