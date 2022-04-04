import React from 'react';
import Thumbnail from './Thumbnail'

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url:  ''
        };
    }
    handleClick = (e) =>{
        e.preventDefault();
        this.setState(url =>({url: this.url}));
        if(this.url !== "") {
            window.open(this.url);
        }
    }
    render() {
        return(
        <div>
            <h1>Here's a few projects that I've done:</h1>
            <ul className="list">
                <li>
                    <Thumbnail caption='Spinning ASCII Donut' alt={'Donut'} description='A refactored version of a spinning donut' url={'https://github.com/rachelvansciver/SpinningASCIIDonut'}
                           link={'View Refactored Code'} onClick={this.handleClick.bind(this)}></Thumbnail>
                </li>
                <li>
                    <Thumbnail caption='Vue Weather' alt={'Vue Weather'} description='An app to get weather anywhere in the world'
                           url={'https://rachelvansciver.github.io/'} link={'Visit my website'} onClick={this.handleClick.bind(this)}></Thumbnail>
                </li>
                    <Thumbnail caption='Calculator' alt={'Calculator'} description='A simple calculator, with a parser and syntax tree, written in Java'
                           url={'https://github.com/rachelvansciver/Calculator'} link={'View source code'} onClick={this.handleClick.bind(this)}></Thumbnail>
                <li>
                    <Thumbnail caption='Parkinsons Data Analysis' description='Predicting whether a person has Parkinsons
                    using Logistic Regression' link={"View Source Code"} url={"https://github.com/rachelvansciver/Parkinsons"} onClick={this.handleClick.bind(this)}></Thumbnail>
                </li>
            </ul>
        </div>)

    }
}
export default Portfolio;