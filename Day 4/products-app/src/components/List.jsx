import DeletePlayers from './Delete';

function List({ players = [], refresh }) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price (in $)</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {players.length > 0 ? (
                        players.map((player) => (
                            <tr key={player.id}>
                                <td>{player.id}</td>
                                <td>{player.name}</td>
                                <td>{player.price}</td>
                                <td>
                                    <DeletePlayers player={player} refresh={refresh} />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4}>No players available.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default List;
