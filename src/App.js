import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/Postform';

class App extends Component {
  constructor() {
    super();
    this.state={
      newPost: []
    };
  }

  handleSubmit(post) {
    this.setState({
      newPost: post
    })
  }
  render() {
    return (
      <div className="App">
        <PostForm handleSubmit={this.handleSubmit.bind(this)}/>
        <hr />
        <Posts post={this.state.newPost}/>
      </div>
    );
  }
}

export default App;
