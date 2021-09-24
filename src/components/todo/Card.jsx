

function Card(props){

    const changeState =(id) => {
        fetch(`http://localhost:4000/tasks/toggle/${id}`, {
            method: "POST"
        })
        .then(response => response.json())
        .catch((error)=>{
            console.log(error)
        })
    }

    // const remove = (e)=>{
    //     e.target.parentElement.remove()
    // }
    const removeElement = (e) => {
        if( window.confirm("Voulez vous supprimer cette tâche ?")){
            e.target.remove()
        }
    }
    // const removeFromChildChild = (e) => {
    //     e.target.parentElement.parentElement.remove()
    // }

    return(
        <li onClick={()=>changeState(props.task.id)}>
            <label onDoubleClick={(e)=>removeElement(e)} htmlFor={props.task.id}>
                <input  type="checkbox" id={props.task.id} checked={props.task.done} onChange={()=>{}}/>
                <p>{props.task.contenu}</p>
                <span></span>
            </label>
        </li>
    )
}

export default Card;