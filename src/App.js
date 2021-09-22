import './assets/css/App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Todo from './pages/Todo';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Todo/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
