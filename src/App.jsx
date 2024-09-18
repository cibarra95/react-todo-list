import React from 'react';
import TodoList from './components/TodoList';

export default function App() {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <TodoList/>
        </div>
    );
}
