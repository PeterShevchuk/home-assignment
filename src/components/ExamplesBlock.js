const exampleQuestion = [
    'How do I remove a teammate?',
    'What should I eat for breakfast?',
    'What is the meaning of life?'
]

export const ExamplesBlock = ({ chooseQuestion }) => {

    return (
        <div className='mb-2 flex justify-between'>
            {exampleQuestion.map((value) => (
                <button
                    type="button"
                    className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                    key={value}
                    onClick={() => chooseQuestion(value)}
                >
                    {value}
                </button>
            ))}
        </div>
    )
}
