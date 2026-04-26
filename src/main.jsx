import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import alienisSvg from './assets/alienis.svg'
import goldFramePng from './assets/gold-frame.png'

document.documentElement.style.setProperty('--alienis-url', `url(${alienisSvg})`)
document.documentElement.style.setProperty('--gold-frame-url', `url(${goldFramePng})`)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
