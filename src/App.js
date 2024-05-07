import "./App.css";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://json-db-p2-code-challenge.onrender.com/bots")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => alert(error.message));
  }, []);

  function onHandleDelete(id) {
    fetch(`https://json-db-p2-code-challenge.onrender.com/bots/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => setItems(items.filter((item) => item.id !== id)));
  }
  return (
    <div className="App container-fluid">
      <header className="App-header">
        <YourBotArmy onHandleDelete={onHandleDelete} />
      </header>

      <BotCollection items={items} />
    </div>
  );
}

export default App;
