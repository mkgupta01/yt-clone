import { createContext, useEffect, useState } from "react";
import { fetchDatafromAPI } from "./fetchApi";

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [feedData, setfeedData] = useState([]);
    const [searchResult, setsearchResult] = useState(false);
    const [selectedCategories, setselectedCategories] = useState("New");

    useEffect(() => {
        const data = fetchDatafromAPI();
        data.then((data) => {
            setfeedData(data.items)
        });
    }, [selectedCategories])

    const contextValues = {
        loading,
        setLoading,
        feedData,
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

