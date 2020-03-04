import React from 'react'

export default function Task({task, toggleChecked}) {

    function toggle() {
        toggleChecked(task.id);
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={task.done} onChange={toggle} />
                {task.name}
            </label>
        </div>        
    )
}