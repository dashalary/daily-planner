import React, { useState, useEffect } from 'react';

const MyContext = React.createContext() // creating a context object
export default MyContext

/* now we need to make context available to all components via provider */

function MyProvider(props) {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:3333/tasks')
            const data = await res.json()
            setTasks(data)
        }
        fetchData()
    }, [])

    const addTask = (description, complete) => {
        const task = {
            description: description,
            complete: complete
        }
        fetch('http://localhost:3333/tasks', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            setTasks([...tasks, data])
        })
    }  
    
    return <MyContext.Provider value={{
            tasks: tasks,
            addTask: addTask
        }}>
            {props.children}
        </MyContext.Provider>
    
}

const MyConsumer = MyContext.Consumer
export { MyProvider, MyConsumer }