import React, {Component} from 'react';
import "./styles.css"

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <p>Name: {this.props.contact.firstName} </p>
                <p>Last Name: {this.props.contact.lastName}</p>
                <p>Phone: {this.props.contact.phone} </p>
                <p>Gender: {this.props.contact.gender}</p>
            </div>
        );
    }

}

export default Contact;