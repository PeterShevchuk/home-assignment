import React, {createContext, useContext, useState} from "react";
import API from "../api/API";

const api = new API()

const initialResults = { answers: [], noAnswers: false, error: false }

const WebAppApiContext = createContext({
    loading: false,
    results: initialResults,
    getAnswers: () => {},
    clearAll : () => {}
});

export const UseWebAppApiProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(initialResults);

    const getAnswers = (value) => {
        clearAll()
        setLoading(true)

        api.sendQuestion(value)
            .then((response) => changeResults({ answers: response, noAnswers: response.length <= 0 }))
            .catch((error) => changeResults({ error }))
            .finally(() => setLoading(false))
    }

    const changeResults = (results) => setResults({ ...initialResults, ...results })

    const clearAll = () => setResults(initialResults)

    return (
        <WebAppApiContext.Provider
            value={{
                loading,
                results,
                getAnswers,
                clearAll
            }}
        >
            {children}
        </WebAppApiContext.Provider>
    )
}

export const useWebAppApi = () => useContext(WebAppApiContext)
