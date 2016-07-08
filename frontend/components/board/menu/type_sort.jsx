const React = require('react');

const TypeMenu = React.createClass({
  getInitialState(){
    return({search: null})
  },

  sortBy(e){
    e.preventDefault();
    e.stopPropagation();
    if (this.state.search === e.target.textContent) {
      this.setState({search: null});
      this.props.sortBy();
    } else if (e.target.textContent === 'Picture'){
      this.setState({search: e.target.textContent});
      this.props.sortBy(['img_url', true]);
    } else {
      this.setState({search: e.target.textContent});
      this.props.sortBy(['img_url', false]);
    }
  },

  componentWillUnmount(){
    this.setState({search: null});
    this.props.sortBy();
  },

  renderMenu(e){
    e.preventDefault();
    e.stopPropagation();
    if (this.state.search === e.currentTarget.textContent) {
      this.setState({search: null});
      this.props.sortBy();
    } else {
      this.setState({search: `${e.currentTarget.textContent}`})
    }
  },

  render(){

    return(
        <div>
            <li onClick={this.sortBy} style={this.state.search === 'Year' ? selectedStyle : {}}>Picture</li>

            <li onClick={this.sortBy} style={this.state.search === 'Month' ? selectedStyle : {}}>Text</li>

        </div>
    )
  }
})

module.exports = TypeMenu;
