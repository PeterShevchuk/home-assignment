import {useWebAppApi} from "../contexts/WebAppApiContext";
import {NoAnswerBlock, ErrorBlock} from "./index";

export const AnswersBlock = () => {
    const { clearAll, results } = useWebAppApi()

    if (results.error) {
        return <ErrorBlock error={results.error} clearAll={clearAll} />
    }

    if (results.noAnswers) {
        return <NoAnswerBlock clearAll={clearAll}/>
    }

    if (results.answers.length) {
        return (
            <div className="p-4 w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Answers</h3>
                    <button
                        onClick={clearAll}
                        className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                        Clear
                    </button>
                </div>

                <div className="flow-root">
                    <ul role="presentation" className="divide-y divide-gray-200 dark:divide-gray-700">
                        {results.answers.map((result) => (
                            <li className="py-3 sm:py-4" key={result.id}>
                                <div className="flex space-x-4">
                                    <div
                                        className="answerList self-center flex-1 min-w-0 text-sm font-medium text-gray-900 truncate dark:text-white text-left"
                                        dangerouslySetInnerHTML={{__html: result.answer}}
                                    />
                                    <div className="inline-flex text-base font-semibold text-gray-900 dark:text-white">
                                        {result.confidence.toFixed(2)} %
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

    return null
}
