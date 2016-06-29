const React = require('react'),
      Link = require('react-router').Link,
      hashHistory = require('react-router').hashHistory,
      SessionActions = require('../actions/session_actions'),
      SessionStore = require('../stores/session_store');

const LoginForm = React.createClass({

  getInitialState() {
    return {
      email_address: "",
      password: ""
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
			password: this.state.password
		};
    SessionActions.login(formData);
	},

  signUp(e){
    e.preventDefault();
    hashHistory.push("/signup");
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

	render() {
		return (
        <div className='login-box'>
          <form className='login'>

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

             <button onClick={this.handleSubmit}>Login</button>
          </form>

          <div>
            <p>Need an account? Sign in!</p>
            <button onClick={this.signUp}>Sign Up</button>
          </div>
        </div>
		);
	}
});

module.exports = LoginForm;
