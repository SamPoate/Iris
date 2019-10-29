import React from 'react';
import {
  ChatkitProvider,
  TokenProvider,
  withChatkit,
} from '@pusher/chatkit-client-react';

const instanceLocator = 'v1:us1:fd274c34-0b78-4fd9-a1fe-fedca9a94738';
const userId = 'Alice';

const tokenProvider = new TokenProvider({
  url:
        'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/fd274c34-0b78-4fd9-a1fe-fedca9a94738/token',
});

function App() {
  return (
    <div className="App">
      <ChatkitProvider
        instanceLocator={instanceLocator}
        tokenProvider={tokenProvider}
        userId={userId}
      >
        <WelcomeMessage />
      </ChatkitProvider>
    </div>
  );
}

const WelcomeMessage = withChatkit((props) => (
  <div>
    {props.chatkit.isLoading
      ? 'Connecting to Chatkit...'
      : `Hello ${props.chatkit.currentUser.name}!`}
  </div>
));

export default App;
