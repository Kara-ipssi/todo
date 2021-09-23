import Header from "../components/Header";
import '../assets/css/Todo.css'
import '../assets/css/index.css';
import CardContainer from "../components/todo/CardContainer";

function Todo(){


    return(
        <div className="container">
            <Header title={"TODO LIST"}/>
            <div className="page-body">
                <div className="top">
                    <input type="text" className="new-card" name="new-card" placeholder="Entrez votre tâche ici"/>
                    <button className="add-new">Ajouter</button>
                </div>
                <div className="body">
                    <CardContainer/>
                </div>
                <div className="foot">
                    <button>En cours</button>
                    <button>Complété</button>
                    <button>Tout voir</button>
                </div>
            </div>
        </div>
    )
}

export default Todo;