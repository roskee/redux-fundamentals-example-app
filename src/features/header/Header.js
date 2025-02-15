import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"

const Header = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const handleChange = e => setText(e.target.value)

    const handleKeyDown = e => {
        const trimmedText = e.target.value.trim()
        if (e.key === 'Enter' && trimmedText) {
            dispatch({ type: 'todos/todoAdded', payload: trimmedText })
            setText('')
        }
    }

    return (
        <input
            type="text"
            placeholder="what needs to be done?"
            autoFocus={true}
            value={text}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
        />
    )
}

export default Header