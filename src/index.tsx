import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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

let posts = [
  {message: 'message #1', likesCount: '12'},
  {message: 'message #2', likesCount: '43'},
  {message: 'message #3', likesCount: '143'},
  {message: 'message #4', likesCount: '43'},
]


let dialog = [
  {id: '1', name: 'Lera'},
  {id: '2', name: 'Nastia'},
  {id: '3', name: 'Lexa'},
  {id: '4', name: 'Marina'}
]


let messages = [
  {message: 'Hi, Lera'},
  {message: 'Hi, Nastia'},
  {message: 'Hi, Lexa'},
  {message: 'Hi, Marina'},
]


ReactDOM.render(
    <App posts={posts} dialog={dialog} messages={messages}/>,
  document.getElementById('root')
);