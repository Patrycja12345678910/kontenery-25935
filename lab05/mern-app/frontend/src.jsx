import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
    const [status, setStatus] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/api/status")
            .then(res => res.json())
            .then(data => setStatus(data))
            .catch(() => setStatus({ message: "Blad polaczenia z backendem" }));
    }, []);

    return (
        <div style={{ fontFamily: "Arial", padding: "30px" }}>
            <h1>Aplikacja MERN - Docker Compose</h1>
            <p>React dziala w trybie developerskim</p>
            <p>{status ? status.message : "Ladowanie"}</p>
            <p>{status?.database}</p>
        </div>
    );
}

createRoot(document.getElementById("root")).render(<App />);
