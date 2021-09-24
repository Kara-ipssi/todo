import Card from "./Card";

function CardContainer(props){

    return(
        <ul>
            {props.tasks.map((data)=>(
                <Card task={data} key={data.id} tasks={props.tasks} setTasks={props.setTasks}/>
            ))}
        </ul>
    )
}

export default CardContainer;