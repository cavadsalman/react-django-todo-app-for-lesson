import React, { useEffect } from 'react'
import './TodoItem.css'


function TodoItem(props) {
    const [duration, setDuration] = React.useState(100)

    useEffect(() => {
        console.log('yarandi')

        return () => {
            console.log('silindi')
        }
    }, [])
   
    return (
        <div className="todo-item" onClick={props.clicked}>
            <div className="todo-index">{props.index}</div>
            <div className="todo-text">
                <div className="todo-title">{props.title}</div>
                <div className="todo-content">{props.content}</div>
            </div>
            <div className="todo-duration">{duration}</div>
        </div>
    )
}


export default TodoItem