import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { DialogItemPropsType, MessagePropsType, PostPropsType } from '.';


type AppPropsType = {
  posts: PostPropsType[]
  dialog: DialogItemPropsType[]
  messages: MessagePropsType[]
}


const App = (props: AppPropsType) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">

        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={ () => <Dialogs dialog={props.dialog} messages={props.messages}/>} />
          <Route path='/profile' render={ () => <Profile posts={props.posts}/>} />
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App;
