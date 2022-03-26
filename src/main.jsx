import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import './styles/style.css'
import App from './components/App'

import { store } from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className='content'>
        <App />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
