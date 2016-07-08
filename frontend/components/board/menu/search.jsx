const React = require('react'),
      TypeSort = require('./type_sort'),
      TeamSort = require('./team_sort'),
      DateSort = require('./date_sort');

const Search = React.createClass({
  getInitialState(){
    return({search: null})
  },

  closeM(){
    this.props.closeM();
  },

  renderSearch(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({search: `${e.currentTarget.textContent}`})
  },

  menuOff(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({search: null})
  },

  render(){
    let menu = <div>
        <h1>Sort by:</h1>
        <li onClick={this.renderSearch} >Team</li>
        <li onClick={this.renderSearch} >Date</li>
        <li onClick={this.renderSearch} >Type</li>
    </div>
    if (this.state.search === 'Team') {
      menu =  <div>
                <h1>Sort by member: </h1>
                <TeamSort team={this.props.team} users={this.props.user} sortBy={this.props.sortBy}/>
                <h4 className='go-back' onClick={this.menuOff}>go back</h4>
              </div>
    } else if (this.state.search === 'Date') {
      menu = <div>
              <h1>Sort by date: </h1>
              <DateSort pins={this.props.pins} sortBy={this.props.sortBy}/>
              <h4 className='go-back' onClick={this.menuOff}>go back</h4>
            </div>
    } else if (this.state.search === 'Type') {
      menu = <div>
              <h1>Sort by type: </h1>
              <TypeSort sortBy={this.props.sortBy}/>
              <h4 className='go-back' onClick={this.menuOff}>go back</h4>
            </div>
    }


    return(
      <ul className='board-nav-menu' style={{'backgroundColor': this.props.color}} >
        {menu}
      </ul>
    )
  }
})

module.exports = Search;
