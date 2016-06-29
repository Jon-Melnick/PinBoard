const React = require('react'),
      Link = require('react-router').Link,
      hashHistory = require('react-router').hashHistory,
      SessionActions = require('../actions/session_actions'),
      SessionStore = require('../stores/session_store');

const SignupForm = React.createClass({

  getInitialState() {
    return {
      email_address: "",
      password: "",
      first_name: "",
      last_name: "",
    };
  },

  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
    this.redirectIfLoggedIn();
  },

  componentWillUnmount() {
    this.sessionListener.remove();
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push("/empty");
    }
  },

	handleSubmit(e) {
		e.preventDefault();

    const formData = {
      email_address: this.state.email_address,
      password: this.state.password,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
    };
    SessionActions.signup(formData);
	},

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

	render() {
		return (
          <form className='signup'>

            <h1>Log In</h1>
              <label>Email: </label>
                <input type="text"
                       value={this.state.username}
                       onChange={this.update("email_address")}
                       className="login-input" />

              <br/>

              <label>Password: </label>
                <input type="password"
                       value={this.state.password}
                       onChange={this.update("password")}
                       className="login-input" />
             <br/>

               <label>First Name: </label>
                 <input type="text"
                        value={this.state.first_name}
                        onChange={this.update("first_name")}
                        className="login-input" />
              <br/>

                <label>Last Name: </label>
                  <input type="text"
                         value={this.state.last_name}
                         onChange={this.update("last_name")}
                         className="login-input" />
               <br/>

             <button onClick={this.handleSubmit}>Login</button>
          </form>
		);
	}
});

module.exports = SignupForm;
