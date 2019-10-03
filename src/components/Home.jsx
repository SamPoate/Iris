import React, { Component } from 'react';

const DUMMY_DATA = [
  {
    senderId: 'perborgen',
    text: "who'll win?",
  },
  {
    senderId: 'janedoe',
    text: "who'll win?",
  },
];

class Home extends Component {
  constructor() {
    super();
    this.state = {
      messages: DUMMY_DATA,
    };
  }

  render() {
    const { messages } = this.state;

    return (
      <div>
        <h1>BOBBY</h1>
        <MessageList messages={messages} />
        <SendMessageForm />
      </div>
    );
  }
}
export default Home;

class MessageList extends React.Component {
  render() {
    return (
      <ul className="message-list">
        {this.props.messages.map((message) => (
          <li key={message.id}>
            <div>{message.senderId}</div>
            <div>{message.text}</div>
          </li>
        ))}
      </ul>
    );
  }
}

class SendMessageForm extends React.Component {
  render() {
    return (
      <form className="send-message-form">
        <input
                    // onChange={this.handleChange}
                    // value={this.state.message}
          placeholder="Type your message and hit ENTER"
          type="text"
        />
      </form>
    );
  }
}
