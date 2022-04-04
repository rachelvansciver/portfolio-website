import {Route, BrowserRouter} from "react-router-dom";
import './App.css';
import Menu from './menu'
import Home from './Home'
import About from './About'
import Portfolio from "./Portfolio";
import Contact from "./Contact"
import {Switch} from "react-router";
import React from 'react';
import ParticlesContainer from "./ParticlesContainer"
class App extends React.Component {
    render(){
        return(
            <div className='App'>
                    <BrowserRouter>
                        <Menu></Menu>
                        <Switch>
                            <Route exact path="/">
                                <Home></Home>
                            </Route>
                            <Route exact path = "/About">
                                <About></About>
                            </Route>
                            <Route exact path = "/Portfolio">
                                <Portfolio></Portfolio>
                            </Route>
                            <Route exact path = "/Contact">
                                <Contact></Contact>
                            </Route>
                        </Switch>
                    </BrowserRouter>
                <ParticlesContainer></ParticlesContainer>
            </div>
        );
    }
}

export default App;
