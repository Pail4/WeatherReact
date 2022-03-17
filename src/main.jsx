import React from 'react'
import ReactDOM from 'react-dom'
import './styles/style.css'
import App from './components/App'

ReactDOM.render(
  <React.StrictMode>
    <div className='content'>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
