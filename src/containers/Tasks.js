import React from 'react';
import MyContext from '../MyContext'

function Tasks() {
    return (
        <MyContext.Consumer>
        {context => {
            console.log("Rendering")
            const tasks = context.tasks.map(task => <li key={task.id}>{task.description}</li>);
            return (
                <div className="App">
                    <h1>Create a Task</h1>
                    <hr />
                    <h1>Tasks</h1>
                    <ul>{tasks}</ul>
                </div>
            )
        }}

        </MyContext.Consumer>
    )
}

