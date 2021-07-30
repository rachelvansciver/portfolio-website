import React from 'react';

class Thumbnail extends React.Component{
    constructor(props) {
        super(props);
        this.image = "";
        this.caption = "";
        this.description = "";
    }
    render(){
        return(
            <div>
                <img src={this.image}/>
                <h1>{this.caption}</h1>
                <h2>{this.description}</h2>
            </div>)
    }
}
export default Thumbnail;