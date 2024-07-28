import { Route } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { stateType } from './redux/state';

type AppPropsType = {
  state: stateType
  addPost: () => void
  updateNewPostText: (newText: string) => void
}

const App = (props: AppPropsType) => {

  return (
      <div className="app-wrapper">

        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={ () => <Dialogs dialogsPage={props.state.dialogsPage}/>} />
          <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>} />
        </div>

      </div>
  )
}

export default App;
