import React from "react";
import {NavLink} from "react-router-dom";

class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className ="home-page">
                <h1>Hi, my name is <em>Rachel Van Sciver</em> and I program computers</h1>
                <NavLink to={"/Portfolio"}>
                    <button className="homebutton">View My Work</button>
                </NavLink>
            </div>)

    }
}
export default Home;