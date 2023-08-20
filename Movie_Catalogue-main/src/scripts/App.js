import React from 'react'
import './App.css'
import SearchBar from './components/searchBar'


const APIKey = "8a400c3c22387cff985272711e1db0a9";
const data = null;

xhr.open('GET', 'https://api.themoviedb.org/3/configuration');
xhr.setRequestHeader('accept', 'application/json');
xhr.setRequestHeader('Authorization', 'Bearer 8a400c3c22387cff985272711e1db0a9');

xhr.send(data);

function App() {
    return (
        <div className='App'>
            <SearchBar/>
        </div>
    )}
export default App