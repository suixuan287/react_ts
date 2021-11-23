import * as React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <header>
            <ul>
                <li><Link to="/">去首页</Link></li>
                <li><Link to="/hello">去halo</Link></li>
            </ul>
        </header>
    )
}

export default Navigation