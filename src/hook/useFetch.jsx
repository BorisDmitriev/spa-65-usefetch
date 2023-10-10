import React, {useState, useEffect, useMemo} from 'react'

export default function useFetch() {

    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('ok');
        const fetchData = async () => {
            const res = await fetch("https://swapi.dev/api/people/");
            const data = await res.json();
            setCharacters(
                data.results.map((char, index) => {
                    return { ...char, id: index + 1 };
                })
            );
            setIsLoading(false);
        };

        fetchData();
    }, []);

    const cachedCharacters = useMemo( () => characters, [characters] )

  return [cachedCharacters, isLoading]

}
