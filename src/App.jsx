import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./views/Login.jsx";
import TodoList from "./components/TodoList.jsx"; // Vista a la que rediriges después del login

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/todos" element={<TodoList/>}/> {/* Página de destino */}
            </Routes>
        </Router>
    );
}

export default App;
