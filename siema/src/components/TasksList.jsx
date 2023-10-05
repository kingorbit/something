import { useState } from "react";
import { tasks as tasksData } from "../data/tasks";

export function TaskList(){
    const [tasks, setTasks] = useState(tasksData);

    const handleCompleteTask = index => {
        const newTasks = [... tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    }

    const handleDeleteTask = (index) => {
        const newTasks = [... tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };
    return ( 
        <ul>
            {tasks.map((task, index) => {
                return (
                    <>
                        <li 
                            key={index} 
                            style={{
                                textDecoration: task.completed ? 'line-through' : 'none',
                        }}>
                        {task.title}</li>
                        <button onClick={() => handleCompleteTask(index)}>ZROBILEM</button>
                        <button onClick={() => handleDeleteTask(index)}>USUN</button>
                    </>
                );
            })}
        </ul>
     );
}