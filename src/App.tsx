import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';


type AppPropsType = {
  appState: StateType
}


type StateType = {
  posts: PostPropsType[]
  dialogs: DialogItemPropsType[]
  messages: MessagePropsType[]
}


export type PostPropsType = {
  message: string
  likesCount: string
}

export type DialogItemPropsType = {
  id: string
  name: string
}

export type MessagePropsType = {
  message: string
}

const App = (props: AppPropsType) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">

        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={ () => <Dialogs dialog={props.appState.dialogs} messages={props.appState.messages}/>} />
          <Route path='/profile' render={ () => <Profile posts={props.appState.posts}/>} />
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App;
