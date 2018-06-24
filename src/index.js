import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import identitiyApp from './reducers'
import App from './App'

let store = createStore(identitiyApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)