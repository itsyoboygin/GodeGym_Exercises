import { deletePlayerById } from '../service/data';

function DeletePlayers({ player, refresh }){
    const handleDelete = async () => {
        const res = await deletePlayerById(player.id);
        if (res){
            refresh();
            console.log(`Deleted player ${player.name}`);
        }
    };

    return (
        <>
            <button onClick={handleDelete} className="btn-danger">Delete</button>
        </>
    );
}

export default DeletePlayers;