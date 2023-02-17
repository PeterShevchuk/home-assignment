export const NoAnswerBlock = ({ clearAll }) => (
    <div className="p-4 w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                No answers for this question, please change your question.
            </h3>
            <button onClick={clearAll} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                Clear
            </button>
        </div>
    </div>
)
