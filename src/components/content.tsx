import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home'
import Hello from './hello'

const Content = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hello" element={<Hello />} />
            </Routes>
        </main>
    )
}

export default Content