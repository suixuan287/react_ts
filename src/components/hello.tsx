import * as React from 'react'
const { useState, useEffect } = React

interface Props {
    name: string,
    title: string
}

const Hello = () => {
    return (
        <h1>
            Hello
        </h1>
    )
}

export default Hello