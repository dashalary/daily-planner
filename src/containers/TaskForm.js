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
                placeholder="Water plants"
                value={description}
                onChange={handleOnChange} />
                <button type="submit" className="ui button">Add Task</button>
                <br></br>
                <br></br>
                </form>
            )
        }}
        </MyContext.Consumer>
    )
}

export default TaskForm