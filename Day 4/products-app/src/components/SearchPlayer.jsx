import { useState } from 'react';

function SearchPlayers({ onSearch }){
    const [player, setPlayer] = useState('');

    const handleChange = (e) => {
        setPlayer(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(player);
    }
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="name" name="name" value={player} onChange={handleChange} placeholder="Search by name"></input>
                <button type="submit" className="btn-secondary">Search</button>
            </form>
        </>
    )
}

export default SearchPlayers;