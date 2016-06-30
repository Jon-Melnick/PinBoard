const React = require('react'),
      hashHistory = require('react-router').hashHistory;


const BoardThumb = React.createClass({


  goToBoard(){
    hashHistory.push(`/boards/${this.props.board.id}`);
  },

  render(){
    return (
      <li className='board-thumb' onClick={this.goToBoard}>{this.props.board.title}</li>
    )
  }
});

module.exports = BoardThumb;
