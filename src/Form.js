import React from 'react';
import * as emailjs from "emailjs-com";
import config from './config.json'
import isEmail from 'validator/lib/isEmail';
const SERVICE_ID = config.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = config.REACT_APP_TEMPLATE_ID;
const USER_ID = config.REACT_APP_USER_ID



class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            feedback: "",

        };
    }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }
    sendMessage(event) {
        const emailRegex = /\S+@\S+\.\S+/;
        event.preventDefault();
        let templateParams;
        if((this.state.name.length === 0 | this.state.email.length === 0 | this.state.feedback.length === 0)){
            alert("Fields cannot be empty")
        }
        else if(!this.state.email.match(emailRegex)){
            alert("Enter a valid email")
        } else {
            templateParams = {
                from_name: this.state.name + " ( " + this.state.email + " )",
                to_name: "Rachel Van Sciver",
                feedback: this.state.feedback,
            };
            if(isEmail(this.state.email)) {
                emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
                    .then(function (response) {
                        alert("Message was sent successfully")
                    })
            } else {
                alert("Message was not sent successfully")
            }

        }
        this.setState({
            name: "",
            email: "",
            feedback: "",

        });
    }
    render() {
        return (
            <div className = "contact-form">
                <form
                    id={this.props.id}
                    name={this.props.name}
                    method={this.props.method}
                    action={this.props.action}
                >
          <textarea
              id="name"
              name="name"
              onChange={this.handleChange.bind(this, 'name')}
              placeholder="Your Name"
              className = "text-area"
              value={this.state.name}
              style={{ width: "50%", color: "white" }}
              rows={1}
              aria-required="true"
          />
                    <br />
                    <textarea
                        id="email"
                        name="email"
                        className = "text-area"
                        onChange={this.handleChange.bind(this, 'email')}
                        placeholder="Your Email"
                        required="required"
                        value={this.state.email}
                        style={{ width: "50%", color: "white" }}
                        rows={1}
                    />
                    <br />
                    <textarea
                        id="feedback"
                        name="feedback"
                        className = "text-area"
                        onChange={this.handleChange.bind(this, 'feedback')}
                        placeholder="Send me something cool"
                        required='required'
                        value={this.state.feedback}
                        style={{ width: "50%", height: "250px", color: "white"}}
                    />
                    <br />
                    <input
                        type="button"
                        value="Send"
                        className="form-button"
                        onClick={this.sendMessage.bind(this)}
                    />
                </form>
            </div>
        );
    };
}

export default Form;