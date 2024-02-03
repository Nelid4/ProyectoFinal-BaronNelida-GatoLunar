import React, { useState, useEffect } from 'react';

const PersonajesApi = () => {
    const [personaje, setPersonaje] = useState();
    const [id, setId] = useState(1); 
    const url = `https://rickandmortyapi.com/api/character/${id}`;

    const handleNext = () => {
        setId(id + 1);
    }

    const handlePrevious = () => {
        if (id > 1) {    
            setId(id - 1);
        }
    }

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPersonaje(data))
            .catch(err => console.log(err));
    }, [id]);  

    return (
        <>
            {personaje &&
                <div>
                    <img src={personaje.image} alt="imagen del personaje" />
                    <h2>{personaje.name}</h2>
                    <button onClick={handlePrevious}>Previous</button>
                    <button onClick={handleNext}>Next</button>
                </div>
            }
        </>
    );
}

export default PersonajesApi;
