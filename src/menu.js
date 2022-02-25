import React from 'react';
import { NavLink} from "react-router-dom";
class menu extends React.Component{
    render(){
        return(
            <div className='menu'>
                <NavLink to="/portfolio-website" exact className = "links" activeClassName="is-active">Home</NavLink>
                <NavLink to="/portfolio-website/About" exact className = "links" activeClassName="is-active">About</NavLink>
                <NavLink to='/portfolio-website/Contact' exact className = "links" activeClassName="is-active">Contact</NavLink>
                <NavLink to='/portfolio-website/Portfolio' exact className= "links" activeClassName="is-active">Portfolio</NavLink>
            </div>)
    }
}
export default menu;
