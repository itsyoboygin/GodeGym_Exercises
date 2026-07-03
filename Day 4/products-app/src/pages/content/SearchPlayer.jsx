import { useState } from 'react';
import { getAllPlayers, searchPlayer } from '../../service/data';
import Search from '../../components/Search';

function SearchPlayers() {
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleSearch = (query) => {
        const trimmed = query.trim();
        setShowResults(Boolean(trimmed));
        setResults(trimmed ? searchPlayer(trimmed) : []);
    };

    const refresh = () => {
        setResults(getAllPlayers());
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