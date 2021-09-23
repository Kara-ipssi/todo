import Header from "../components/Header";
import '../assets/css/Todo.css'
import '../assets/css/index.css';

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
                    <ul>
                        <li>Salut</li>
                        <li>Salut</li>
                        <li>Salut</li>
                        <li>Salut</li>
                    </ul>
                </div>
                <div className="foot">

                </div>
            </div>
        </div>
    )
}

export default Todo;