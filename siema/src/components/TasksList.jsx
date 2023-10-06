import { useState } from "react";
import { tasks as tasksData } from "../data/tasks";

export function TaskList(){
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (title) =>{
         const newTasks = [... tasks];
         newTasks.push({
           title: title,
           description: 'zrob cos mordeczko',
           completed: false, 
         });
         setTasks(newTasks);
    };

    const handleCompleteTask = index => {
        const newTasks = [... tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    }

    const handleDeleteTask = (index) => {
        const newTasks = [... tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };
    

    return ( 
        <>
         <button onClick={() => handleAddTask('Dodano cos do zrobienia')}>Dodaj zadanie</button>
        
        {tasks.length === 0 ? (
        <div>Nie masz żadnych zadań wariacie</div>
        ) : (
         <ul>
            {tasks.map(({title, completed}, index) => (
                <li key={index} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                    {title}
                    <button onClick={() => handleCompleteTask(index)}>{completed ? 'Cofnij' : 'Zrobione'}</button>
                    <button onClick={() => handleDeleteTask(index)}>USUN</button>
                </li>
                ))}
        </ul>
        )}
        </>
     );
}