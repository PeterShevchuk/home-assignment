import {useState} from "react";
import API from "../api/API";

const api = new API()

export const useWebAppApi = () => {
    const initialResults = { answers: [], noAnswers: false, error: false }

    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(initialResults);

    const getAnswers = (value) => {
        clearAll()
        setLoading(true)

        api.sendQuestion(value).then((response) => {
            setResults({
                ...initialResults,
                answers: response,
                noAnswers: response.length <= 0
            })
        }).catch((error) => {
            setResults({ ...initialResults, error })
        }).finally(() => {
            setLoading(false)
        })
    }

    const clearAll = () => setResults(initialResults)

    return {
        loading,
        results,
        getAnswers,
        clearAll
    }
}
