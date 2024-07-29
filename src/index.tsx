import './index.css';
import { store } from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { stateType } from './redux/state';
import { BrowserRouter } from 'react-router-dom';



let rerenderEntireTree = (state: stateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
