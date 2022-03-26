import React from "react";
import "./App.css";
import welcome from "./assets/welcome.webp";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                <img src={welcome} alt="loading..." />
            </p>
        </div>
    );
}

export default App;
