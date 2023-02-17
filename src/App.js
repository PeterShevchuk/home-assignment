import React from "react";
import {QuestionForm, Loader, AnswersBlock} from "./components";
import {useWebAppApi} from "./hooks/useWebAppApi";
import { WebAppApiContext } from './contexts/WebAppApiContext'

function App() {
    const webAppApiContext = useWebAppApi()

    return (
        <WebAppApiContext.Provider value={webAppApiContext}>
            <div className="App relative">
                <Loader />
                <QuestionForm />
                <AnswersBlock />
            </div>
        </WebAppApiContext.Provider>
    );
}

export default App;
