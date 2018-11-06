import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      title:'',
      body:''
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.handleSubmit(post);
    this.setState({
      title:'',
      body:''
    })
  }
  render() {
    return (
      <div className="Postform">
        <h1>Add Post</h1>
          <form onSubmit={this.onSubmit.bind(this)}>
            <div>
              <label>Title: </label>
              <br />
              <input type="text" name="title" value={this.state.title} onChange={this.onChange.bind(this)}/>
            </div>
            <div>
              <label>Body: </label>
              <br />
              <textarea name="body" value={this.state.body} onChange={this.onChange.bind(this)}/>
            </div>
            <br />
            <button type="submit">Submit</button>
          </form>
      </div>
    );
  }
}

export default PostForm;
