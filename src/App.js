import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navar">
          <h2 className="center">My React Redux "app for post"</h2>
        </div>
        <PostForm />
        <AllPost />        
      </div>
    );
  }
}

export default App;
