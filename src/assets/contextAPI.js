import { createContext, useEffect, useState } from "react";
import { fetchDatafromAPI } from "./fetchApi";

export const Context = createContext();

export const AppContext = (props) => {
    const [feedData, setfeedData] = useState({});
    const [loading, setLoading] = useState(false);
    const [searchResult, setsearchResult] = useState(false);
    const [selectedCategories, setselectedCategories] = useState("New");

    useEffect(() => {
        const data = fetchDatafromAPI();
        data.then((data) => {
            setfeedData(data)
        });
    }, [selectedCategories])

    const contextValues = {
        loading,
        setLoading,
        searchResult,
        setsearchResult,
        selectedCategories,
        setselectedCategories
    };

    return (
        <Context.Provider value={contextValues}>
            {props.children}
        </Context.Provider>
    );
};

