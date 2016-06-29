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
      hashHistory.push("/profile");
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
      <div className='splash'>
        <div className='splash-logo'>My PinBoard</div>
        <div className='splash-logins'>
        <div className='login-box'>
          <form className='login'>

            <h1>Sign In</h1>

                <input type="text"
                       value={this.state.username}
                       onChange={this.update("email_address")}
                       className="login-input"
                       placeholder="email"/>

              <br/>


                <input type="password"
                       value={this.state.password}
                       onChange={this.update("password")}
                       className="login-input"
                       placeholder="password"/>
             <br/>

             <button onClick={this.handleSubmit}>Sign In</button>
          </form>

        </div>
        <div className="login-box">
          <h1>New User</h1>
          <button onClick={this.signUp}>Sign Up</button>
          <br></br>
          <button onClick={this.signUp}>Demo</button>
        </div>
        </div>
        <div className='splash-details'>details for the site</div>
      </div>
		);
	}
});

module.exports = LoginForm;