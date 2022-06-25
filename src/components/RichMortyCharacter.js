import {useEffect, useState} from "react";
import {getCharacters} from "../services/RickMortyApi";

export default function RichMortyCharacter() {
    let [characters, setCharacters] = useState([]);

    useEffect(() => {
            getCharacters().then(value => setCharacters(value))
        }, []
    )
    return (
        <div>
            {
                characters.map(character =>
                    <ul key={character.id}>
                        <li>{character.id}</li>
                        <li>{character.name}</li>
                        <li>{character.status.toString()}</li>
                        <li>{character.species}</li>
                        <li>{character.gender}</li>
                        <img src={character.image} alt={character.name}/>
                    </ul>
                )
            }
        </div>
    );
}