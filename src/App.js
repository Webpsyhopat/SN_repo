import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Footer from './components/Footer/Footer';
import { Route, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { appInitialization} from './redux/appReducer'
import Preload from './components/common/Preload';


class App extends React.Component{
componentDidMount() {
  this.props.appInitialization();
}
  render() {
    if(!this.props.isInitialized){
      return <Preload />
    }
    return (
      <div className="wrapper">
        <HeaderContainer />
        <Sidebar />
        <div className='content'>
          <Route path='/dialogs'>
            <DialogsContainer />
          </Route>
          <Route path='/profile/:userId?'><Profile /></Route>
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/users' component={UsersContainer} />
          <Route path='/login' component={Login} />
        </div>
        <Footer />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  isInitialized: state.app.isInitialized
})


export default compose(
  connect(mapStateToProps, { appInitialization }),
  withRouter
)
(App);
