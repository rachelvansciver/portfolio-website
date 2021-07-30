import React from "react";

class IconWithLink extends React.Component{
    constructor(props){
        super(props);
        this.image = "";
        this.link = "";
    }
    render(){
        return(
            <div className = "icons">
                <a href = {this.link}>  <img src = {this.image}/></a>
            </div>)
    }
}
export default IconWithLink;