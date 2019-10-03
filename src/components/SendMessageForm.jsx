import React from 'react';

const SendMessageForm = () => (
  <form className="send-message-form">
    <input
                // onChange={this.handleChange}
                // value={this.state.message}
      placeholder="Type your message and hit ENTER"
      type="text"
    />
  </form>
);

export default SendMessageForm;
