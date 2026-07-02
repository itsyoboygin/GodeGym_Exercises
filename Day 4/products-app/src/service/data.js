const players = [
    {
        id: 1,
        name: 'Lamine Yamal',
        price: '$200,000,000'
    },
    {
        id: 2,
        name: 'Michael Olise',
        price: '$120,000,000'
    },
    {
        id: 3,
        name: 'Pedri',
        price: '$130,000,000'
    },
    {
        id: 4,
        name: 'Ousmane Demebele',
        price: '$150,000,000'
    },
    {
        id: 5,
        name: 'Lionel Messi',
        price: '$80,000,000'
    },
    {
        id: 6,
        name: 'Rafael Leao',
        price: '$70,000,000'
    }
]

export function getAllPlayers(){
    return [...players];
}

export function deletePlayerById(id){
    for ( let i = 0; i < players.length; i++ ){
        if ( players[i].id == id ){
            players.splice(i, 1);
            break;
        }
    }
}

export function addPlayer({ name, price }) {
    if ( name == '' || price == '') {
        console.log("Missing 1 field of data.");
        return false;
    }

    const exists = players.filter((player) => player.name === name).length;

    if (exists > 0) {
        console.log(`Player ${name} already exists.`);
        return false;
    }

    const id = players.length ? players[players.length - 1].id + 1 : 1;
    const newPlayer = { id, name, price };
    
    console.log(`Player ${name} added successfully.`);
    players.push(newPlayer);
    return true;
}

export function searchPlayer(name){
    const trimmedName = name?.trim().toLowerCase();

    if (!trimmedName) {
        return [...players];
    }

    return players.filter((player) => player.name.toLowerCase().includes(trimmedName));
}