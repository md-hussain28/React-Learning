import React from 'react';
import useFetch from '../../hooks/useFetch.js'; 

const UserList = () => {
    const { data, loading, error, refetch } = useFetch('https://jsonplaceholder.typicode.com/users');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">User List</h1>
            <button onClick={refetch} className="mb-4 p-2 bg-blue-500 text-white rounded">
                Refetch Users
            </button>
            <ul>
                {data.map(user => (
                    <li key={user.id} className="mb-2 p-2 bg-emerald-600 rounded">
                        <h2 className="text-lg font-semibold">{user.name}</h2>
                        <p className="text-sm text-gray-700">Email: {user.email}</p>
                        <p className="text-sm text-gray-700">Phone: {user.phone}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
