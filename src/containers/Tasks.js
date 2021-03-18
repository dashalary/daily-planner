import React from 'react';
import MyContext from '../context/MyContext'

function Tasks() {
    return (
        <MyContext.Consumer>
        {context => {
            console.log("Rendering")
            const tasks = context.tasks.map(task => <li key={task.task}>{task.task}</li>);
            return (
                <div className="App">
                    <h1>Create a Task</h1>
                    <hr />
                    <h1>Today's Tasks</h1>
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