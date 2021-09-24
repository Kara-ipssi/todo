import Card from "./Card";
import {useEffect, useState} from "react";

function CardContainer(){

    
    const [tasks, setTasks] = useState([])

    const fetchApi = async () => {
        fetch("http://localhost:4000/tasks")
        .then(response => response.json())
        .then(data => { 
            setTasks(data)
        });
    }
    
    useEffect(() => {
        fetchApi()
    // eslint-disable-next-line
    },[])


    return(
        <ul>
            {tasks.map((data)=>(
                <Card task={data} key={data.id}/>
            ))}
        </ul>
    )
}

export default CardContainer;