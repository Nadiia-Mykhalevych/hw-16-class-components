import React, {Component} from 'react';
import Contact from "./Contact";

class Contracts extends Component {
    state = {
        search: '',
        contacts:
            [
                {
                    firstName: 'Барней',
                    lastName: 'Стинсовський',
                    phone: '+380956319521',
                    gender: 'male',
                },
                {
                    firstName: 'Робін',
                    lastName: 'Щербатська',
                    phone: '+380931460123',
                    gender: 'female',
                },
                {
                    firstName: 'Анонімний',
                    lastName: 'Анонімус',
                    phone: '+380666666666',
                },
                {
                    firstName: 'Лілія',
                    lastName: 'Олдровна',
                    phone: '+380504691254',
                    gender: 'female',
                },
                {
                    firstName: 'Маршен',
                    lastName: 'Еріксонян',
                    phone: '+380739432123',
                    gender: 'male',
                },
                {
                    firstName: 'Teodor',
                    lastName: 'Мотсбес',
                    phone: '+380956319521',
                    gender: 'male',
                },
            ],
        tempContacts: []
    }

    handleSearchChange = e => {
        this.setState({search: e.target.value});
        this.setState({tempContacts: this.state.contacts.filter(
            contact =>
                contact.firstName.toLowerCase().indexOf(e.target.value) !== -1 ||
                contact.lastName.toLowerCase().indexOf(e.target.value) !== -1
            )
        });
    }


    render() {
        return (
            <div>
                <input type="text" value={this.state.search} onChange={this.handleSearchChange}/>
                <div className="contact-block">
                    {this.state.tempContacts.length === 0 && this.state.search === '' ?
                        this.state.contacts.map((contact, i) => <Contact contact={contact} key={i}/>) :
                        this.state.tempContacts.map((contact, i) => <Contact contact={contact} key={i}/>)}
                </div>
            </div>
        )
    }
}

export default Contracts;
