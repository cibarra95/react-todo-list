import {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState(''); //eve.holt@reqres.in
    const [password, setPassword] = useState(''); //pistol
    const [error, setError] = useState(null);
    const [token, setToken] = useState(null);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://reqres.in/api/login', {
                email,
                password,
            });

            setToken(response.data.token); // Maneja el token recibido
            setError(null);
        } catch (err) {
            if (err.response) {
                setError(err.response.data.error);
            } else {
                setError('An error occurred. Please try again.');
            }
        }
    };

    useEffect(() => {
        if (token) {
            navigate('/login'); // Redirige a otra ruta cuando el token no es null
        }
    }, [token, navigate]);

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-b from-orange-500/20 to-indigo-500/20">
            <div className="min-w-md mx-auto p-8 bg-white rounded-xl shadow-md">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
                    >
                        Login
                    </button>
                </form>
                {error && <p className="text-red-500 mt-4">{error}</p>}
                {token && <p className="text-green-500 mt-4">Login successful! Token: {token}</p>}
            </div>
        </div>
    );
};

export default Login;
