const React = require('react'),
      hashHistory = require('react-router').hashHistory;


const BoardThumb = React.createClass({


  goToBoard(){
    hashHistory.push(`/boards/${this.props.board.id}`);
  },

  detailsPane(){
    return <div>this.props.board.description</div>
  },

  render(){
    return (
      <li className='board-thumb' onClick={this.goToBoard} onMouseOver={this.detailsPane}>{this.props.board.title}</li>
    )
  }
});

module.exports = BoardThumb;
