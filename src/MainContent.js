import React, { Component } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import './MainContent.css';

class MainContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
        }
    } 

    handleNewMessage = (text) => {
        this.setState({
            messages: [...this.state.messages, { me: true, author: "Me", body: text }],
        })
    }

    render() {
        return (
            <div className = "MainContent" style={{ height: '100%', width: '100%', backgroundColor: '#fffff' }} >
                <MessageList messages={this.state.messages} />
                <MessageForm onMessageSend={this.handleNewMessage} />
             </div>
        );
    }


}

export default MainContent