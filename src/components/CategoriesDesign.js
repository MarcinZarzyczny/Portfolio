import React from "react";


const CategoriesDesign = (props) => {
    return (
        <div className = {props.class}>
            <div className="containerThirteen">
                <p>{props.title}</p>
            </div>
            {props.children}
        </div>
  
    );
}
export default CategoriesDesign;