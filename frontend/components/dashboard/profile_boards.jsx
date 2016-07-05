const React = require('react'),
      BoardAction = require('../../actions/board_actions'),
      BoardThumb = require('./board_thumbnails'),
      hashHistory = require('react-router').hashHistory,
      BoardForm = require('./board_form'),
      BoardFormModal = require('./new_board_modal'),
      Modal = require('react-modal'),
      BoardStore = require('../../stores/board_store');

const ProfileBoards = React.createClass({
  getInitialState(){
    return({boards: BoardStore.all(), modalOpen: false, boardDisplay: 'Team Boards', user: this.props.user});
  },

  componentDidMount(){
    this.listener = BoardStore.addListener(this.onChange);
    BoardAction.fetchAllBoards();
  },

  componentWillReceiveProps(props){
    this.setState({user: props.user});
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  onChange(){
    this.setState({boards: BoardStore.all()});
  },

  boardForm(){
    this.setState({modalOpen: true})
  },

  onModalClose(){
    this.setState({modalOpen: false})
  },

  getBoards(){
    if (this.state.boards.length > 0) {
      this.boards = this.state.boards.map((board) => {
        if (board.team_members.length === 1) {
          return <BoardThumb key={board.id} board={board} user={this.state.user}/>
        }
      })
      this.team_boards = this.state.boards.map((board) => {
        if (board.team_members.length > 1) {
          return <BoardThumb key={board.id} board={board} user={this.state.user}/>
        }
      })
    } else {
      this.team_boards = <div style={{'fontSize': '60px'}}> you currently have no boards </div>
      this.boards = <div style={{'fontSize': '60px'}}> you currently have no boards </div>
    }
  },

  switchTab(e){
    this.setState({boardDisplay: e.target.textContent})
  },

  render(){
    this.getBoards();
    let teamTab = this.state.boardDisplay === 'Team Boards' ? 'profile-boards-tabs tab-selected' : 'profile-boards-tabs';

    let privateTab = this.state.boardDisplay === 'Private Boards' ? 'profile-boards-tabs tab-selected' : 'profile-boards-tabs'
    return(
      <div className='profile-boards group'>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={BoardFormModal}
          >
          <BoardForm onModalClose={this.onModalClose} user={this.props.user}/>
        </Modal>
        <div className='tabs-container'>
        <div className={teamTab} onClick={this.switchTab} id='teams'><p>Team Boards</p></div>
        <div className={privateTab} onClick={this.switchTab} id='private'><p>Private Boards</p></div>
        <div className='profile-boards-tabs' onClick={this.boardForm}><p>New Board</p></div>
        </div>

        <div className='profile-boards-holder'><ul>{this.state.boardDisplay === 'Team Boards' ? this.team_boards : this.boards}</ul></div>
      </div>
    )
  }
})

module.exports = ProfileBoards;
