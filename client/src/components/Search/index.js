import React, {useState} from 'react'
import Results from '../Results'
import { useNavigate } from 'react-router-dom'


const Search = () => {
    const navigate = useNavigate();
    const navigateToSearch = () => {
        navigate('/results');
    }
    const [search, setSearch] = useState('')
    const [gameResults, setGameResult]= useState([]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        let slug = search.split(' ').join('-').toLowerCase()
        setGameResult([])
        fetch(`https://rawg.io/api/games?search=${slug}?token&key=33761726586d462d81dbf4018fe2e169`)
        .then(response => response.json())
        .then(({results}) => {
            results === undefined ? alert('no games found') : setGameResult(results)
            console.log(results)
        })
        setSearch('')
        
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' value={search} onChange={handleChange}/>
                <input onClick={navigateToSearch}type='submit'/>
            </form>
            <Results gameResults={gameResults} />
            
        </div>
    )
}
export default Search;