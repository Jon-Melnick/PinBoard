const React = require('react');

const DateMenu = React.createClass({
  getInitialState(){
    return({pins: this.props.pins, search: null, subSearch: null, years: '', months: '', days: ''})
  },

  componentDidMount(){
    this.pinDates();
  },

  pinDates(){
    let pins = this.props.pins
    this.year = [];
    this.month = [];
    this.day = [];
    for (let i = 0; i < pins.length; i++) {
      let pinDate = pins[i].date.split(' ')
      if (this.year.indexOf(pinDate[2]) < 0) {
        this.year.push(pinDate[2])
      }
      if (this.month.indexOf(pinDate.slice(1).join(' ')) < 0){
        this.month.push(pinDate.slice(1).join(' '))
      }
      if (this.day.indexOf(pins[i].date) < 0) {
        this.day.push(pins[i].date)
      }
    }
    this.setState({years: this.year, months: this.month, days: this.day})
  },

  sortBy(e){
    e.preventDefault();
    e.stopPropagation();
    if (this.state.subSearch === e.target.textContent) {
      this.setState({subSearch: null});
      this.props.sortBy();
    } else {
      this.setState({subSearch: e.target.textContent});
      this.props.sortBy(['date', e.target.textContent]);
    }
  },

  componentWillUnmount(){
    this.setState({search: null, subSearch: null});
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

  getYears(){
    let selectedStyle = {
      backgroundColor: '#C7D0D5'
    }
    let years = this.state.years.map(year => {
      if (this.state.subSearch === year) {
        return <li key={year} onClick={this.sortBy} style={selectedStyle}>{year}</li>
      } else {
        return <li key={year} onClick={this.sortBy} className='indented'>{year}</li>
      }
    })
    return years
  },

  getMonths(){
    let selectedStyle = {
      backgroundColor: '#C7D0D5'
    }
    let months = this.state.months.map(month => {
      if (this.state.subSearch === month) {
        return <li key={month} onClick={this.sortBy} style={selectedStyle}>{month}</li>
      } else {
        return <li key={month} onClick={this.sortBy} className='indented'>{month}</li>
      }
    })
    return months
  },

  getDays(){
    let selectedStyle = {
      backgroundColor: '#C7D0D5'
    }
    let days = this.state.days.map(day => {
      if (this.state.subSearch === day) {
        return <li key={day} onClick={this.sortBy} style={selectedStyle}>{day}</li>
      } else{
        return <li className='indented' key={day} onClick={this.sortBy}>{day}</li>
      }
    })
    return days
  },

  render(){
    let selectedStyle = {
      backgroundColor: '#C7D0D5'
    }
    let menu;
    if (this.state.search === 'Year') {
      menu = this.getYears();
    } else if (this.state.search === 'Month') {
      menu = this.getMonths();
    } else if (this.state.search === 'Day') {
      menu = this.getDays();
    }
    return(
        <div>
            <li onClick={this.renderMenu} style={this.state.search === 'Year' ? selectedStyle : {}}>Year</li>
              {this.state.search === 'Year' ? menu : <div></div>}
            <li onClick={this.renderMenu} style={this.state.search === 'Month' ? selectedStyle : {}}>Month</li>
              {this.state.search === 'Month' ? menu : <div></div>}
            <li onClick={this.renderMenu} style={this.state.search === 'Day' ? selectedStyle : {}}>Day</li>
              {this.state.search === 'Day' ? menu : <div></div>}
        </div>
    )
  }
})

module.exports = DateMenu;
