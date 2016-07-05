const React = require('react');


const Search = React.createClass({
  render(){
    return(
      <ul className='board-nav-menu' style={{'background-color': this.props.color}}>
        <li><h1>Search</h1></li>

      </ul>
    )
  }
})

module.exports = Search;
