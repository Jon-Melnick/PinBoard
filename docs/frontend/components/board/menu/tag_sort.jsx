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
    } else {
      this.setState({search: e.target.textContent});
      this.props.sortBy(['tag', e.target.textContent])
    }
  },

  componentWillUnmount(){
    this.setState({search: null});
    this.props.sortBy();
  },

  render(){
    let selectedStyle = {
      color: `${this.props.navColor}`,
      fontSize: `20px`
    }
    let tags = <div></div>;
    if (this.props.board.tags.length > 0) {
      tags = this.props.board.tags.map(aTag => {
        return <div className='tag-cloud' key={aTag.id} onClick={this.sortBy} style={this.state.search === `${aTag.tag}` ? selectedStyle : {}}>{aTag.tag}</div>
      })
    }
    return(
        <div className='tag-cloud-container group'>
          {tags}
        </div>
    )
  }
})

module.exports = TypeMenu;
