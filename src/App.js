import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route } from 'react-router-dom';


function App(props) {
  debugger;
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Sidebar  state = {props.state.sidebarBlocksData}/>
        <div className='content'>
          <Route path='/dialogs'>
            <Dialogs state={props.state.dialogsPage}  dispatch = {props.dispatch}/>
          </Route>
          <Route path='/profile'>
            <Profile state={props.state.profilePage} dispatch = {props.dispatch}/>
          </Route>
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
