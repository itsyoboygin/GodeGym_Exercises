import { useState, useEffect } from 'react';
import { getAllPlayers } from '../../service/data';
import List from '../../components/List';

function PlayersList() {
    const [players, setPlayers] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getAllPlayers();
            setPlayers(res);
        }
        fetchData();
    }, [reload]);

    const refresh = () => {
        setReload((prev) => !prev);
    };

    return (
        <>
            <h2>Available Players</h2>
            <List players={players} refresh={refresh} />
        </>
    );
}

export default PlayersList;