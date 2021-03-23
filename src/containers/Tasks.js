import React from 'react';
import MyContext from '../context/MyContext'
import TaskForm from './TaskForm'

function Tasks() {
    return (
        <MyContext.Consumer>
        {context => {
            // console.log("Rendering")

            const handleClick = (e) => {
                context.deleteTask(e.target.id)
            }

            const tasks = context.tasks.map(task => <li key={task.id}>{task.description} - {task.complete ? "Completed" : "Not completed"}
            <button id={task.id} onClick={handleClick}>Delete</button>
            </li>);
            
            return (
                <div className="App">
                    <h1>Create a Task</h1>
                    <br></br>
                    <TaskForm />
                    <hr />
                    <h1>Today's Tasks</h1>
                    <br></br>
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