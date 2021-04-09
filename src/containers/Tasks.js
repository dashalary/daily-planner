import React from 'react';
import MyContext from '../context/MyContext'
import TaskForm from './TaskForm'

function Tasks() {
    return (
        <MyContext.Consumer>
        {context => {
            console.log("Rendering")

            const handleClick = (e) => {
                context.deleteTask(e.target.id)
            }

            const tasks = context.tasks.map(task => <li key={task.id}><b>{task.description}</b> - {task.complete ? "Completed  -   " : "Not completed  -   "}
            <button id={task.id} onClick={handleClick} className="ui button">Delete</button>
            </li>);

            return (
                <div className="App">
                    <h2>Create a Task</h2>
                    <TaskForm />
                    <hr />
                    <h2>Today's Tasks</h2>
                    <ul>
                    {tasks}
                    </ul>
                </div>
            )
        }}

        </MyContext.Consumer>
    )
}

export default Tasks