import React from 'react'
import Task from './Task'

export default function TaskList({tasks}) {
    return (
        tasks.map(elem => {
            return <Task key="10" task={elem} />
        })            
    )
}