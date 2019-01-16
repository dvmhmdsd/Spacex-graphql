import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'https://localhost:4000'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <img src={logo} alt="spacex logo"  style={{width: 300, display: 'block', margin:'auto'}}/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
