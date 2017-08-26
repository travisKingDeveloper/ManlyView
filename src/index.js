import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './util/registerServiceWorker'

import 'typeface-roboto'

ReactDOM.render( <App/> , document.getElementById('root'))
registerServiceWorker()