import React, { Component } from 'react'
import PropTypes from "prop-types";
import './MessageList.css';
import Message from './Message';
 
class MessageList extends Component {

    componentDidUpdate = () => {
        this.node.scrollTop = this.node.scrollHeight
    }

    render() {
        return (
            <div className = "MessageList" ref={(node) => (this.node = node)}>
                {this.props.messages.map((message, i) => (
                    <Message key={i} {...message} />
                ))}
            </div>
        )
    }
}

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object)
}

MessageList.defaultProps = {
    messages: [],
}

export default MessageList