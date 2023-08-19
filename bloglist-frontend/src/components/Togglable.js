import { forwardRef, useImperativeHandle } from "react"
import { useState } from "react"

const Togglable = forwardRef((props, refs) => {

    const [visible, setVisible] = useState(false)

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    useImperativeHandle(refs, () => {
        return {
            toggleVisibility
        }
    })

    return (
        <>
            <div style={showWhenVisible} className="togglable">
                {props.children}
                <button onClick={toggleVisibility}>cancel</button>
            </div>
            <div style={hideWhenVisible}>
                <button onClick={toggleVisibility}>create blog</button>
            </div>
        </>
    )
}
)

Togglable.displayName = 'Togglable'

export default Togglable