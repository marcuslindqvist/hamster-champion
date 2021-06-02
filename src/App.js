import "./App.css";
import PageContainer from "./components/PageContainer";
import { useEffect, useState } from "react";

function App() {
    
    useEffect(() => {
        async function getHamsters() {
            const response = await fetch("/hamsters", { method: "GET" });
            const data = await response.json();
            setHamsters(data);
        }

        getHamsters();
    }, []);

    const [hamsters, setHamsters] = useState([]);

    return (
        <div className="App">
            <PageContainer hamsterList={hamsters} />
        </div>
    );
}

export default App;