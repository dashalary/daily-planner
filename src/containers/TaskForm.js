import React, {useState} from 'react';
import MyContext from '../context/MyContext';

function TaskForm() {
    const [description, setDescription] = useState("")
    const [complete, setComplete] = useState(false)

    return (
        <MyContext.Consumer>
            {context => {
            const handleOnChange = e => {
                setDescription(e.target.value)
            }
            const handleOnSubmit = event => {
                event.preventDefault()
                context.addTask(description, complete)
                setDescription("")
                setComplete(false)
            }

            return (
                <form onSubmit={handleOnSubmit}>
                <input
                type="text"
                value={description}
                onChange={handleOnChange} />
                <button type="submit">Add Task</button>
                </form>
            )
        }}
        </MyContext.Consumer>
    )
}

export default TaskForm