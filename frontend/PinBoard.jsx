const React = require('react'),
      ReactDOM = require('react-dom');
window.SessionApi = require('./util/session_api_util');


const App = React.createClass({
  render(){
    return (
      <div></div>
    )
  }
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<div>Yo! lets get things started, Mr. Melnick!</div>, document.getElementById('content'))
});
