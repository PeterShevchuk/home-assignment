import React from "react";
import {QuestionForm, Loader, AnswersBlock} from "./components";
import {UseWebAppApiProvider} from "./contexts/WebAppApiContext"

function App() {
    return (
        <UseWebAppApiProvider>
            <div className="App relative">
                <Loader />
                <QuestionForm />
                <AnswersBlock />
            </div>
        </UseWebAppApiProvider>
    );
}

export default App;
