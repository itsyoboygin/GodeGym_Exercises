import { deletePlayerById } from '../service/data';

function DeletePlayers({ player, refresh }){
    const handleDelete = () => {
        deletePlayerById(player.id);
        refresh();
        console.log(`Deleted player ${player.name}`);
    };

    return (
        <>
            <button onClick={handleDelete} className="btn-danger">Delete</button>
        </>
    );
}

export default DeletePlayers;