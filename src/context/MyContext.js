import React, { useState, useEffect } from 'react';

const MyContext = React.createContext() // creating a context object
export default MyContext

/* now we need to make context available to all components via provider */

function Provider(props) {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch('/tasks')
            const data = await res.json()
            setTasks(data)
        }
        fetchData()
    }, [])

    
}