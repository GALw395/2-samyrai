import { Route } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { stateType } from './redux/store';

type AppPropsType = {
  state: stateType
  dispatch: (action: any) => void
}

const App = (props: AppPropsType) => {

  return (
      <div className="app-wrapper">

        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={ () => <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>} />
          <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>} />
        </div>

      </div>
  )
}

export default App;
