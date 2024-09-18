import React from 'react';

const TodoItem = ({todo, onToggleComplete, onEdit}) => {
    return (
        <div
            className={`flex items-center justify-between p-2 border-b ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            <input
                type="text"
                value={todo.text}
                onChange={(e) => onEdit(todo.id, e.target.value)}
                className="flex-grow bg-transparent outline-none"
            />
            <button
                className="ml-2 text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded"
                onClick={() => onToggleComplete(todo.id)}
            >
                {todo.completed ? 'Desmarcar' : 'Completar'}
            </button>
        </div>
    );
};

export default TodoItem;


