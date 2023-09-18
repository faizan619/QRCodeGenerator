import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import Reader from './pages/Reader.jsx'
import Landing from './Landing.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Reader/> */}
    <Landing/>
  </React.StrictMode>,
)
