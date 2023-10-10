import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { StarwarsCharacterContext } from "../context/StarwarsCharacterProvider";

const CharacterDetails = () => {
    const { characters, isLoading } = useContext(StarwarsCharacterContext);
    const { Id } = useParams();

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    // const character = characters[Id - 1];

    const character = characters.reduce((acc, cur) => {
        if (cur.id == Id) {
            return cur;
        } else {
            return acc;
        }
    }, {});

    return (
        <div>
            <h1>{character.name}</h1>
            <ul>
                <li>height: {character.height}</li>
                <li>mass: {character.mass}</li>
                <li>gender: {character.gender}</li>
            </ul>
        </div>
    );
};

export default CharacterDetails;
