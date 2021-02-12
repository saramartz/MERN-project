import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/App'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import 'semantic-ui-css/semantic.min.css'
import './index.css'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
