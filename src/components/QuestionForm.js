import {ExamplesBlock} from "./index";
import {useWebAppApi} from "../contexts/WebAppApiContext";
import {useState} from "react";
import {ReactComponent as SearchIcon} from "../assets/svg/search.svg";

export const QuestionForm = () => {
    const { loading, getAnswers, clearAll } = useWebAppApi()

    const [question, setQuestion] = useState('');

    const onChangeSearch = (event) => setQuestion(event.target.value)

    const onSubmit = (event) => {
        event?.preventDefault();

        if (loading) {
            return;
        }

        getAnswers(question);
    }

    const changeQuestion = (value) => {
        setQuestion(value)
        clearAll()
    }

    return (
        <>
            <form className="flex items-center mb-2" onSubmit={onSubmit} >
                <label htmlFor="voice-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <SearchIcon className="w-5 h-5 text-gray-500 dark:text-gray-400"/>
                    </div>
                    <input
                        type="text"
                        id="voice-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your question..."
                        required
                        onChange={onChangeSearch}
                        value={question}
                        disabled={loading}
                    />
                </div>
                <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    disabled={loading}
                >
                    <SearchIcon className="mr-2 -ml-1 w-5 h-5"/>
                    Search
                </button>
            </form>
            <ExamplesBlock chooseQuestion={changeQuestion}/>
        </>
    )
}
