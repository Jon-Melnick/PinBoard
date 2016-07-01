const React = require('react'),
      Modal = require('react-modal'),
      PinForm = require('../pins/pin_form');

import Team from 'react-icons/lib/ti/group';
import NewNote from 'react-icons/lib/fa/sticky-note-o';
import Search from 'react-icons/lib/md/search';
import Settings from 'react-icons/lib/fa/cog';


const TeamMenu = require('./menu/team');
const SearchMenu = require('./menu/search');
const SettingsMenu = require('./menu/settings');


const closeAll = {team: false,
                  search: false,
                  settings: false,
                  modalOpen: false}

const BoardNav = React.createClass({
  getInitialState(){
    return (closeAll)
  },

  toggleTeam(){
    this.setState(closeAll)
    this.setState({team: this.state.team === false ? true : false})
  },

  newPin(){
    this.setState(closeAll)
    this.setState({modalOpen: true})
  },

  onModalClose(){
    this.setState({modalOpen: false})
  },

  toggleSearch(){
    this.setState(closeAll)
    this.setState({search: this.state.search === false ? true : false})
  },

  toggleSettings(){
    this.setState(closeAll)
    this.setState({settings: this.state.settings === false ? true : false})
  },

  render(){
    let menu;
    return (
      <div className='board-nav'>
        {menu}
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          >
          <PinForm onModalClose={this.onModalClose} boardId={this.props.boardId}/>
        </Modal>
        <ul>
          <li id="team" onClick={this.toggleTeam}>{this.state.team ? <TeamMenu /> : menu}<Team size={40} color='red' /></li>

          <li onClick={this.newPin}><NewNote size={40} color='red'/></li>

          <li id="search" onClick={this.toggleSearch}>{this.state.search ? <SearchMenu /> : menu}<Search size={40} color='red'/></li>

          <li id="settings" onClick={this.toggleSettings}>{this.state.settings ? <SettingsMenu /> : menu}<Settings size={40} color='red'/></li>
        </ul>
      </div>
    )
  }
});

module.exports = BoardNav;
