import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StarwarsCharacterContext } from "../context/StarwarsCharacterProvider";

const StarwarsCharacter = () => {
    const { characters, isLoading } = useContext(StarwarsCharacterContext);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            {characters.map((char) => {   
                return (
                    <div key={char.id}>
                        <h5>{char.name}</h5>
                        <Link to={`/starwarsCharacter/${char.id}`}>
                            more info ...
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default StarwarsCharacter;
