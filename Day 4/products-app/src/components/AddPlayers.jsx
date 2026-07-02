import { useState, useEffect } from 'react';
import { addPlayer } from '../service/data';

function AddPlayers({ refresh }){
    const [formData, setFormData] = useState({
        name: '',
        price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAdd = () => {
        const added = addPlayer(formData);

        if (added){
            refresh();
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAdd();
    }

    return(
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <input type="name" name="name" placeholder="Name" onChange={handleChange} value={formData.name}/><br/>
                    <input type="price" name="price" placeholder="Price" onChange={handleChange} value={formData.price}/><br/>
                    <button type="submit">Add</button>
                </form>
            </div>
        </>
    );
}

export default AddPlayers;