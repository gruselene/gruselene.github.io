import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './data/asset/globalCCS.css'
import './data/asset/cardCCS.css'
import './data/asset/componentCCS.css'
// 初始化所有作品数据
import { registry } from './data/registry'
import './data/initialize.js'

registry.initialize()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
