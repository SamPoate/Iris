import React from 'react';

const MessageList = (props) => (
  <ul className="message-list">
    {props.messages.length > 0
      ? props.messages.map((message) => (
        <li key={message.id}>
          <div>{message.senderId}</div>
          <div>{message.text}</div>
        </li>
      ))
      : null}
  </ul>
);

export default MessageList;
