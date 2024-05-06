import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import YourBotArmy from "../components/YourBotArmy";

function BotSpecs() {
  const [bot, setBot] = useState({});
  const params = useParams();
  const botId = params.id;
  const [enlist, setEnlist] = useState([]);

  useEffect(() => {
    fetch(`https://json-db-p2-code-challenge.onrender.com/bots/${botId}`)
      .then((r) => r.json())
      .then((bot) => setBot(bot))
      .catch((error) => alert(error));

    fetch("https://json-db-p2-code-challenge.onrender.com/enlisted")
      .then((r) => r.json())
      .then((enlistedBots) => setEnlist(enlistedBots))
      .catch((error) => alert(error));
  }, [botId]);

  function handleEnlist(botRecord) {
    const duplicate = enlist.filter(
      (item) =>
        item.id === botRecord.id || item.bot_class === botRecord.bot_class,
    );
    // console.log(enlist);

    if (duplicate.length === 0) {
      fetch("https://json-db-p2-code-challenge.onrender.com/enlisted", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(botRecord),
      })
        .then((res) => res.json())
        .then((postedBot) =>
          setEnlist((prevEnlist) => [...prevEnlist, postedBot]),
        )
        .catch((error) => alert(error.message));
    }
  }

  return (
    <div className="container">
      <header className="App-header">
        <YourBotArmy />
      </header>
      <div className="row">
        <div class="col-6">
          <img src={bot.avatar_url} alt="bot_avatar" className="float-end" />
        </div>
        <div className="col-6 mt-5">
          <h3>
            Name:<i className="ms-2">{bot.name}</i>
          </h3>
          <h5>Catchphrase</h5>
          <p>{bot.catchphrase}</p>
          <div>
            <b>Class:</b> <i>{bot.bot_class}</i>
          </div>

          <div className="border p-3 w-50">
            <>🦾</>
            <em className="me-2 m-1">{bot.health}</em>
            <>⚡️</>
            <em className="me-3">{bot.damage}</em>
            <>🧲</>
            <em className="m-1">{bot.armor}</em>
          </div>
          <Link to="/Code-Challenge-Bot-Battlr">
            <button className="d-block w-50 mt-2 rounded">Go Back</button>
          </Link>
          <Link to="/Code-Challenge-Bot-Battlr">
            <button
              className="mt-2 w-50 rounded"
              onClick={() => handleEnlist(bot)}
            >
              Enlist
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;
