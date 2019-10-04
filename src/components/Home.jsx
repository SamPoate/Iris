import React, { Component } from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';

const instanceLocator = 'v1:us1:fd274c34-0b78-4fd9-a1fe-fedca9a94738';

const testToken = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/fd274c34-0b78-4fd9-a1fe-fedca9a94738/token';

const userId = 'Bob';

const roomId = '9d15c884-e1b1-48ac-882a-54d4ed05d96f';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    const chatManager = new ChatManager({
      instanceLocator,
      userId,
      tokenProvider: new TokenProvider({
        url: testToken,
      }),
    });

    chatManager.connect().then((currentUser) => {
      currentUser.subscribeToRoom({
        roomId,
        hooks: {
          onNewMessage: (message) => {
            this.setState((prevState) => ({
              ...prevState,
              messages: message,
            }));
          },
        },
      });
    });
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
