import "./App.css";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => alert(error.message));
  }, []);

  return (
    <div className="App container-fluid">
      <header className="App-header"></header>
      <YourBotArmy />
      <BotCollection items={items} />
    </div>
  );
}

export default App;
