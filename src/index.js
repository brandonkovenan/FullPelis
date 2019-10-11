import 'font-awesome/css/font-awesome.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './componentes/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import  promise from 'redux-promise-middleware'
import logger from 'redux-logger'
import reducers from './Redux/reducers'

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Amatic+SC|Anton|Cinzel|Rock+Salt&display=swap');
  body {
    margin:0;
  }
`



const store = createStore(reducers,{},applyMiddleware(promise,reduxThunk,logger))


ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
            <GlobalStyle />
        </div>
    </Provider>
    ,
    document.getElementById('root')
);
serviceWorker.unregister();
