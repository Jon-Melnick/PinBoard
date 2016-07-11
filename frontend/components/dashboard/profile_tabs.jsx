const React = require('react');

const ProfileTabs = React.createClass({
  render(){
    return(
      <div className='tabs-container'>
        <ul>
          <li>Team Board</li>
          <li>Private Board</li>
          <li>New Board</li>
        </ul>
      </div>
    )
  }

});

module.exports = ProfileTabs;
