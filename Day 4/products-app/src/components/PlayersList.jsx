import { useState, useEffect } from 'react';
import { getAllPlayers, searchPlayer } from '../service/data';
import DeletePlayers from './DeletePlayers';
import AddPlayers from './AddPlayers';
import SearchPlayers from './SearchPlayer';

function PlayersList(){
    const [players, setPlayers] = useState([]);
    const [filteredPlayers, setFilteredPlayers] = useState([]);
    const [isReloadNeeded, setIsReloadNeeded] = useState(false);

    useEffect(() => {
        console.log("-----Player List-----");
        const allPlayers = getAllPlayers();
        setPlayers(allPlayers);
        setFilteredPlayers(allPlayers);
    }, [isReloadNeeded]);

    const refresh = () => {
        setIsReloadNeeded((prev) => !prev);
    }

    const handleSearch = (query) => {
        const results = searchPlayer(query);
        setFilteredPlayers(results);
    }
    
    return(
        <>
            <h1>Players Market</h1><br/>

            <h2>Search for Players</h2>
            <SearchPlayers onSearch={handleSearch}/><br/>

            <h2>Available Players</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPlayers.map((player, index) => (
                        <tr key={index}>
                            <td>{player.id}</td>
                            <td>{player.name}</td>
                            <td>{player.price}</td>
                            <td>
                                <DeletePlayers player={player}
                                               refresh={refresh}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table><br/>
            <h2>Add Players</h2>
            <AddPlayers refresh={refresh}/>
        </>
    )
}

export default PlayersList