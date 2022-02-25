import React from 'react';
class Thumbnail extends React.Component{
    constructor(props) {
        super(props);
        this.image = "";
        this.caption = "";
        this.description = "";
        this.url = "";
        this.link = "";
    }
    render(){
        return(
            <div className="text-container">
                <h1>{this.props.caption}</h1>
                <div className="text-container-inner">
                    <img src={this.props.image}/>
                    <h2>{this.props.description}</h2>
                    <a href={this.props.url} className='links'><em className='is-active'>{this.props.link}</em></a>
                </div>
            </div>)
    }
}
export default Thumbnail;