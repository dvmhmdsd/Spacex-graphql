import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Launches } from './components/launches';

const client = new ApolloClient({
  uri: 'https://localhost:4000'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <img src={logo} alt="spacex logo"  style={{width: 300, display: 'block', margin:'auto'}}/>
          <Launches />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
