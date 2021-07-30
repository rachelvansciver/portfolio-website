import React from 'react';
import { NavLink} from "react-router-dom";
class menu extends React.Component{
    render(){
        return(
            <div className='menu'>
                <NavLink to="/" exact className = "links" activeClassName="is-active">Home</NavLink>
                <NavLink to="/About" exact className = "links" activeClassName="is-active">About</NavLink>
                <NavLink to='/Contact' exact className = "links" activeClassName="is-active">Contact</NavLink>
                <NavLink to='/Portfolio' exact className= "links" activeClassName="is-active">Portfolio</NavLink>
            </div>)
    }
}
export default menu;
