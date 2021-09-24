import Header from "../components/Header";
import '../assets/css/Todo.css'
import '../assets/css/index.css';
import CardContainer from "../components/todo/CardContainer";
import {useEffect, useState} from "react";

function Todo(){
    const [tasks, setTasks] = useState([])

    const fetchApi = async () => {
        await fetch("http://localhost:4000/tasks")
        .then(response => response.json())
        .then(data => { 
            setTasks(data)
        });
    }
    
    useEffect(() => {
        fetchApi()
    // eslint-disable-next-line
    },[])

    const addNewCard = async () => {
        let contenu = document.getElementById('new-card').value
        if(contenu !== ""){
            fetch("http://localhost:4000/tasks/new", {
                method:"POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({contenu: contenu})
            })
            .then((response)=>{
                return response.json()
            })
            .then((data)=>{
                document.getElementById('new-card').value = ""
                setTasks(data)
            })
            .catch((error)=>{
                console.log(error)
            })

        }
        else{
            alert('Vous devez ajouter le contenu de la tâche')
        }
    }

    const handleKeyPress = (e)=>{
        if(e.key === "Enter"){
            addNewCard()
        }
        else{
            return;
        }
    }

    return(
        <div className="container">
            <Header title={"TODO LIST"}/>
            <span className="info"></span>
            <div className="page-body">
                <div className="top">
                    <input type="text" className="new-card" name="new-card" id="new-card" onKeyPress={(e)=>handleKeyPress(e)} placeholder="Entrez votre tâche ici"/>
                    <button className="add-new" onClick={()=>addNewCard()}>Ajouter</button>
                </div>
                <div className="body">
                    <CardContainer tasks={tasks} setTasks={setTasks}/>
                </div>
                {/* <div className="foot">
                    <button>En cours</button>
                    <button>Complété</button>
                    <button>Tout voir</button>
                </div> */}
            </div>
        </div>
    )
}

export default Todo;