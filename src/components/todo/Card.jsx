
function Card(props){

    const remove = (e)=>{
        e.target.parentElement.remove()
    }
    const removeElement = (e) => {
        if( window.confirm("Voulez vous supprimer cette tâche ?")){
            e.target.remove()
        }
    }
    const removeFromChildChild = (e) => {
        e.target.parentElement.parentElement.remove()
    }

    return(
        <li onDoubleClick={(e)=>removeElement(e)}>
            <label htmlFor={props.key} onDoubleClick={(e)=>remove(e)}>
                <input onDoubleClick={(e)=>removeFromChildChild(e)} type="checkbox" id={props.key}/>
                <p onDoubleClick={(e)=>removeFromChildChild(e)}>{props.contenu}</p>
                <span onDoubleClick={(e)=>removeFromChildChild(e)}></span>
            </label>
        </li>
    )
}

export default Card;