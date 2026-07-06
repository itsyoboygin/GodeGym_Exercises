import { useState } from 'react';
import { getAllPlayers, searchPlayer } from '../../service/data';
import Search from '../../components/Search';

function SearchPlayers() {
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleSearch = async (query) => {
        const trimmed = query.trim();
        setShowResults(Boolean(trimmed));
        const results = trimmed ? await searchPlayer(trimmed) : [];
        setResults(results);
    };

    const refresh = async () => {
        const res = await getAllPlayers();
        setResults(res);
        setShowResults(true);
    };

    return (
        <>
            <h2>Search for a player</h2>
            <Search
                results={results}
                onSearch={handleSearch}
                refresh={refresh}
                showResults={showResults}
            />
        </>
    );
}

export default SearchPlayers;