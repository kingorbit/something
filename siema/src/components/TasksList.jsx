import { useRef, useState } from "react";
import { tasks as tasksData } from "../data/tasks";

export function TaskList(){
    const [tasks, setTasks] = useState([]);
    const titleRef = useRef(null);

    const handleAddTask = () =>{
         const newTasks = [... tasks];
         newTasks.push({
           title: titleRef.current.value,
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
        <input type="text" id="title" ref={titleRef} />
         <button onClick={handleAddTask}>Dodaj zadanie</button>
        
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