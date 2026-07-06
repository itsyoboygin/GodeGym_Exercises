import api from '../../axiosConfig/api';

export async function getAllPlayers(){
    try {
        const res = await api.get(`/players`);
        const list = Array.isArray(res.data)
            ? res.data
            : Array.isArray(res.data?.players)
            ? res.data.players
            : [];
        return list.map((player, index) => ({
            ...player,
            displayId: Number(player.id) || index + 1,
        }));
    } catch (e) {
        console.log(e);
    }
    return [];
}

export async function deletePlayerById(id){
    try {
        const res = await api.delete(`/players/${id}`);
        return res.status === 200;
    } catch (e) {
        console.log(e);
    }
    return false;
}

export async function addPlayer({ name, price }) {
    try {
        const res = await api.post(`/players`, { name, price });
        return res.status === 201 || res.status === 200;
    } catch (e) {
        console.error('addPlayer failed', e);
        return false;
    }
    // if ( name == '' || price == '') {
    //     console.log("Missing 1 field of data.");
    //     return false;
    // }

    // const exists = players.filter((player) => player.name === name).length;

    // if (exists > 0) {
    //     console.log(`Player ${name} already exists.`);
    //     return false;
    // }

    // const id = players.length ? players[players.length - 1].id + 1 : 1;
    // const newPlayer = { id, name, price };
    
    // console.log(`Player ${name} added successfully.`);
    // players.push(newPlayer);
}

export async function searchPlayer(name){
    const trimmedName = name?.trim().toLowerCase();
    const allPlayers = await getAllPlayers();

    if (!trimmedName) {
        return allPlayers;
    }

    return allPlayers.filter((player) => player.name.toLowerCase().includes(trimmedName));
}