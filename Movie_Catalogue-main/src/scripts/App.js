/*import React from 'react'*/
import './App.css'
import SearchBar from './components/searchBar'
import React, { useEffect, useState } from 'react'

const APIKey = "8a400c3c22387cff985272711e1db0a9";
function App() {
    const [users, setUsers] = useState([])
    const fetchUserData = () => {
        fetch("https://api.themoviedb.org/3/configuration")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
        useEffect(() => {
            fetchUserData()
        }, [])
    }
    return (
        <div>
            {users.length > 0 && (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
    
    
}

export default App;

/*const data = null;

let xhr;
xhr.open('GET', 'https://api.themoviedb.org/3/configuration');
xhr.setRequestHeader('accept', 'application/json');
xhr.setRequestHeader('Authorization', 'Bearer 8a400c3c22387cff985272711e1db0a9');

xhr.send(data);*/