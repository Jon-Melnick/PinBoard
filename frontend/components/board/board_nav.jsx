const React = require('react'),
      Modal = require('react-modal'),
      BoardFormModal = require('../dashboard/new_board_modal'),
      UserActions = require('../../actions/users_actions'),
      UserStore = require('../../stores/users_store'),
      SessionStore = require('../../stores/session_store'),
      PinForm = require('../pins/pin_form');

import Team from 'react-icons/lib/ti/group';
import NewNote from 'react-icons/lib/ti/pin';
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
    return ({team: false,
             search: false,
             settings: false,
             modalOpen: false,
             browser: null,
             board: []})
  },

  componentDidMount(){
    this.listener = UserStore.addListener(this.getBrowser);
    UserActions.fetchAllUsers();
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  getBrowser(){
    let browser = UserStore.find(SessionStore.currentUser().id);
    this.setState({browser: browser});
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

  componentWillReceiveProps(props){
    this.setState({board: props.board})
  },

  closeAllMenus(){
    this.setState(closeAll)
  },

  render(){
    let menu;
    let color = '#C7D0D5'
    if (this.state.browser) {
      color = this.state.browser.preference.user_color
    }
    let board = this.state.board ? this.state.board : {}
    return (
      <div className='board-nav'>
        {menu}
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={BoardFormModal}
          >
          <PinForm onModalClose={this.onModalClose} boardId={this.props.boardId}/>
        </Modal>
        <ul>
          <li id="team" onClick={this.toggleTeam} closeM={this.closeAllMenus}>{this.state.team ? <TeamMenu team={this.props.team} color={color} users={UserStore.all()} board={board} closeM={this.closeAllMenus}/> : menu}<Team size={40} color={color} /></li>

          <li onClick={this.newPin}><NewNote size={40} color={color}/></li>

          <li id="search" onClick={this.toggleSearch}>{this.state.search ? <SearchMenu color={color} closeM={this.closeAllMenus}/> : menu}<Search size={40} color={color}/></li>

          <li id="settings" onClick={this.toggleSettings}>{this.state.settings ? <SettingsMenu color={color} closeM={this.closeAllMenus}/> : menu}<Settings size={40} color={color}/></li>
        </ul>
      </div>
    )
  }
});

module.exports = BoardNav;
