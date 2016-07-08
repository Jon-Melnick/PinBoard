const React = require('react');



const TeamMenu = React.createClass({
  getInitialState(){
    return({search: null})
  },

  memberOptions(){
    let options = [];
    let memberIds = [];
    this.props.team.map(member => memberIds.push(member.id));
    options = this.props.users.map((user) => {
      if (memberIds.indexOf(user.id) < 0) {
        return <option key={user.id} value={user.id}>{user.full_name}</option>
      } else {
        return <option key={user.id} value={user.id} disabled>{user.full_name}</option>
      }
    })
    return options;
  },

  sortBy(e){
    e.preventDefault();
    e.stopPropagation();
    if (this.state.search === parseInt(e.target.id)) {
      this.setState({search: null});
      this.props.sortBy();
    } else {
      this.setState({search: parseInt(e.target.id)});
      this.props.sortBy(['user_id', parseInt(e.target.id)]);
    }
  },

  componentWillUnmount(){
    this.setState({search: null});
    this.props.sortBy();
  },

  render(){
    let selectedStyle = {
      backgroundColor: '#C7D0D5'
    }
    return(

        <div>
          {this.props.team.map(member => {
            if (this.state.search === member.id) {
              return <li key={member.id} id={member.id} onClick={this.sortBy} style={selectedStyle}>{member.name}</li>
            } else {
              return <li key={member.id} id={member.id} onClick={this.sortBy}>{member.name}</li>
            }
          })}
        </div>

    )
  }
})

module.exports = TeamMenu;
