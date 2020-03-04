import React from 'react'
import Task from './Task'

export default function TaskList({tasks, toggleChecked}) {
    return (
        tasks.map(elem => {
            return <Task key={elem.id} task={elem} toggleChecked={toggleChecked} />
        })            
    )
}