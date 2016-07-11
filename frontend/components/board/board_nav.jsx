const React = require('react'),
      Modal = require('react-modal'),
      BoardFormModal = require('../dashboard/new_board_modal'),
      UserActions = require('../../actions/users_actions'),
      UserStore = require('../../stores/users_store'),
      SessionStore = require('../../stores/session_store'),
      SettingsForm = require('./settings'),
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
             board: [],
             z: 5,
             form: null})
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
    this.setState({modalOpen: true, form: 'pin'})
  },

  settings(){
    this.setState(closeAll)
    this.setState({modalOpen: true, form: 'settings'})
  },

  onModalClose(){
    this.setState({modalOpen: false, form: null})
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
    this.setState({board: props.board, z: props.z})
  },

  closeAllMenus(){
    this.setState(closeAll)
  },

  sortBy(query){
    this.props.sortBy(query)
  },

  render(){
    let menu;
    let navColor = {background: `#C7D0D5`};
    let color = '#C7D0D5';
    if (this.state.browser) {
      navColor = {background: `${this.state.browser.preference.nav_color}`}
      color = this.state.browser.preference.user_color
    }
    let board = this.state.board ? this.state.board : {}
    return (
      <div className='board-nav' style={navColor}>
        {menu}
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={BoardFormModal}
          >
          {this.state.form === 'pin' ? <PinForm onModalClose={this.onModalClose} boardId={this.props.boardId} z={this.state.z} color={color}/> : <SettingsForm onModalClose={this.onModalClose} board={board} team={this.props.team} color={color} users={UserStore.all()}/>}
        </Modal>
        <ul>
          <li id="team" onClick={this.toggleTeam} closeM={this.closeAllMenus}>
            {this.state.team ? <TeamMenu team={this.props.team} color={color} users={UserStore.all()} board={board} closeM={this.closeAllMenus} sortBy={this.sortBy}/> : menu}<Team size={40} color={color} /></li>

          <li onClick={this.newPin}><NewNote size={40} color={color} /></li>

          <li id="search" onClick={this.toggleSearch}>{this.state.search ? <SearchMenu team={this.props.team} color={color} navColor={navColor} users={UserStore.all()} board={board} closeM={this.closeAllMenus} sortBy={this.sortBy} pins={this.props.pins}/> : menu}<Search size={40} color={color}/></li>

          <li onClick={this.settings}><Settings size={40} color={color}/></li>
        </ul>
      </div>
    )
  }
});

module.exports = BoardNav;
