import React, { createContext, useEffect, useState } from "react";
export const StarwarsCharacterContext = createContext();
import useFetch from "../hook/useFetch";

const StarwarsCharacterProvider = ({ children }) => {

    const [characters, isLoading] = useFetch()

    return (
        <StarwarsCharacterContext.Provider value={{ characters, isLoading }}>
            {children}
        </StarwarsCharacterContext.Provider>
    );
};

export default StarwarsCharacterProvider;
