import React from "react";
import './App.css';
import Nav from "./components/nav.jsx";

function App() {
  const apiurl = "http://www.omdbapi.com/?apikey=a8f1cd5";
    return (
      <div className="Body">
          <header>
              <Nav />
          </header>
          <main>
            <slider />
            <div>
              <p>This is correct</p>
            </div>
          </main>
      </div>
  )
}

export default App; 
