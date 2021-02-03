import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';


function App() {
  return (

    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className='content'>
        <Route path='/dialogs'>
          <DialogsContainer />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
        <Route path='/users' component={UsersContainer} />
        </div>
      <Footer />
    </div>
  );
}

export default App;
