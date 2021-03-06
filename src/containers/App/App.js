import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../Header/Header';
import WelcomeModal from '../WelcomeModal/WelcomeModal';
import ChatBox from '../ChatBox/ChatBox';
import { removeUser, hasErrored, addMessage, clearMessages } from '../../actions';
import { endConversation } from '../../apiCalls';
import './App.css';

export class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   messages: []
    // }
  }

  // addMessage = (message, isUser) => {
  //   const { messages } = this.state;
  //   this.setState({ messages: [...messages, { message, isUser }]});
  // }

  // clearMessages = () => {
  //   this.setState({ messages: [] });
  // }

  signOut = async () => {
    try {
      await endConversation();
      this.props.removeUser();
      this.props.clearMessages([]);
    } catch({ message }) {
      this.props.hasErrored(message);
    }
  }

  render() {
    console.log(this.props)
    const { user } = this.props;
    // const { messages } = this.props.messages;
    return (
      <div className="App">
        <Header signOut={this.signOut} />
        {!user && <WelcomeModal addMessage={this.props.addMessage} />}
        {user && <ChatBox addMessage={this.props.addMessage} messages={this.props.messages} />}
      </div>
    );
  }
}

export const mapStateToProps = ({ user, messages }) => ({
  user, messages
});

export const mapDispatchToProps = dispatch =>  bindActionCreators({ removeUser, hasErrored, addMessage, clearMessages }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
