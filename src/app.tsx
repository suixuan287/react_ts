import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom' 

import Navigation from './components/navigation'
import Content from './components/content'

const APP = () => {
    return (
        <Router>
            <Navigation />
            <Content />
        </Router>
    )
}

export default APP