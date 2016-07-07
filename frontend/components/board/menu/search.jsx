const React = require('react');


const Search = React.createClass({

  closeM(){
    this.props.closeM();
  },

  render(){
    return(
      <ul className='board-nav-menu' style={{'backgroundColor': this.props.color}} onMouseLeave={this.closeM}>
        <h1>Search</h1>

      </ul>
    )
  }
})

module.exports = Search;
