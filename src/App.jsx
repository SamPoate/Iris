import React, { Component } from 'react';
import ChatMessage from './components/ChatMessage';
import Signup from './components/Signup';
import ChatApp from './components/ChatApp';

const Chatkit = require('@pusher/chatkit-server');

const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:fd274c34-0b78-4fd9-a1fe-fedca9a94738',
  key:
        'e1fe95c0-eda0-43c7-ad0f-c55bf406096d:4upM+MUSPzagOXRYY47jdf01hWPLys02MaKBg77b52Y=',
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUsername: '',
      currentId: '',
      currentView: 'signup',
    };
    this.changeView = this.changeView.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  createUser(username) {
    chatkit
      .createUser({
        id: username,
        name: username,
      })
      .then((currentUser) => {
        this.setState({
          currentUsername: username,
          currentId: username,
          currentView: 'chatApp',
        });
      })
      .catch((err) => {
        if (err.status === 400) {
          this.setState({
            currentUsername: username,
            currentId: username,
            currentView: 'chatApp',
          });
        } else {
          console.log(err.status);
        }
      });
  }

  changeView(view) {
    this.setState({
      currentView: view,
    });
  }

  render() {
    let view = '';
    if (this.state.currentView === 'ChatMessage') {
      view = <ChatMessage changeView={this.changeView} />;
    } else if (this.state.currentView === 'Signup') {
      view = <Signup onSubmit={this.createUser} />;
    } else if (this.state.currentView === 'chatApp') {
      view = <ChatApp currentId={this.state.currentId} />;
    }
    return <div className="App">{view}</div>;
  }
}
export default App;
