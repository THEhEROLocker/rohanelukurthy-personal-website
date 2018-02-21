import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentsList from './containers/CommentsListContainer';
import AddComment from './containers/AddCommentContainer'
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers/index'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <div className="App">
      <div className="header">
        <h2>Welcome to React</h2>
      </div>
      <AddComment />
      <CommentsList />
    </div>
  </Provider>

, document.getElementById('root'));
registerServiceWorker();
