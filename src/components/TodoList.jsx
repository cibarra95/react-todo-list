import React, {useState} from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, {id: Date.now(), text: newTodo, completed: false}]);
            setNewTodo('');
        }
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        );
    };

    const editTodo = (id, newText) => {
        setTodos(todos.map((todo) => (todo.id === id ? {...todo, text: newText} : todo)));
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4">Lista de TODOs</h1>
            <div className="flex mb-4">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    className="flex-grow p-2 border border-gray-300 rounded"
                />
                <button
                    onClick={addTodo}
                    className="ml-2 text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
                >
                    Agregar
                </button>
            </div>

            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggleComplete={toggleComplete}
                    onEdit={editTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;