import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ username: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.username);
  }

  render() {
    return (
      <div className="form-container">
        <h1>Let&apos;s Talk</h1>
        <form onSubmit={this.handleSubmit} className="form">
          <label htmlFor="email">
                        What is your email?
            <input
              type="email"
              id="email"
              name="username"
              onChange={this.handleChange}
              className="input"
            />
          </label>
          <button type="submit" className="submit">
                        Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Signup;
