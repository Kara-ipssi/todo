import Header from "../components/Header";
import '../assets/css/Todo.css'
import '../assets/css/index.css';

function Todo(){
    return(
        <div className="container">
            <Header title={"TODO list"}/>
            <div className="page-body">
                <input type="text" className="new-card" name="new-card" placeholder="Entrez votre tâche ici"/>
                <section className="main">
                    <ul>
                        <li>Hello</li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Todo;