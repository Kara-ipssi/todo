

function Card(props){
    
    const link ="todo-back-jly8t63xz-karadev.vercel.app";

    const changeState =(id) => {
        fetch(`${link}/tasks/toggle/${id}`, {
            method: "PUT"
        })
        .then(response => {
            return response.json()
        })
        .then(data=>{
            props.setTasks(data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const removeElement = (id) => {
        if( window.confirm("Voulez vous supprimer cette tâche ?")){
            fetch(`${link}/tasks/remove/${id}`, {
                method: "DELETE"
            })
            .then(response => {
                return response.json()
            })
            .then(data=>{
                props.setTasks(data)
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }

    return(
        <li onDoubleClick={()=>removeElement(props.task.id)} title="Double cliquez pour supprimer la tâche">
            <label htmlFor={props.task.id}>
                <input onClick={()=>changeState(props.task.id)} type="checkbox" id={props.task.id} checked={props.task.done} onChange={()=>{}}/>
                <p>{props.task.contenu}</p>
                <span></span>
            </label>
        </li>
    )
}

export default Card;
