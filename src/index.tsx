import './index.css';
import { store } from './redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



let rerenderEntireTree = (props: any) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        store={store}
      />
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState())

store.subscribe( () => {
  let state = store.getState()
    rerenderEntireTree(state)
  }
)
