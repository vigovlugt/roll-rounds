import "./App.css";
import { main } from "../game";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        if ((window as any).started) {
            location.href = location.href;
            return;
        }

        (window as any).started = true;
        main();
    }, []);

    return <div className="App"></div>;
}

export default App;
