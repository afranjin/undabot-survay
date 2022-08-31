import React from 'react'
import App from './App'
import ReactDOM, { render } from 'react-dom'
import { Provider } from 'react-redux'
import createStore from '../store/configureStore'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <Provider store={createStore()}>
      <App />
    </Provider>, div)
  ReactDOM.unmountComponentAtNode(div)
})
