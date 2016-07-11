const React = require('react'),
      Link = require('react-router').Link,
      WhyJoin = require('./why_join_signup'),
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
      authErrors: SessionStore.errors()
    };
  },

  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
    this.errorListener = SessionStore.addListener(this.getErrors)
    this.redirectIfLoggedIn();
  },

  componentWillUnmount() {
    this.sessionListener.remove();
    this.errorListener.remove();
  },

  getErrors(){
    this.setState({authErrors: SessionStore.errors()})
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push(`/profile/${SessionStore.currentUser().id}`);
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

  errors() {
    return (
      <div className="errors-signup">
        {this.state.authErrors.map(function(error){
          return <div key={error}>{error}</div>;
        })}
      </div>
    );
  },

	render() {
    let errors;
    if (this.state.authErrors.length > 0) {
      errors = this.errors();
    }
		return (

        <div className="signup-page">
          <div className='signup-form-bg'>

          <form className='signup-form'>
            {errors}
            <h1>Sign Up</h1>
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

             <button onClick={this.handleSubmit} className='button'>Create Account</button>
          </form>
        </div>
        <WhyJoin/>
      </div>
		);
	}
});

module.exports = SignupForm;
