import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function BotSpecs() {
  const [bot, setBot] = useState({});
  const params = useParams();
  const botId = params.id;

  useEffect(() => {
    fetch(`http://localhost:3000/bots/${botId}`)
      .then((r) => r.json())
      .then((bot) => setBot(bot))
      .catch((error) => console.error(error));
  }, [botId]);

  return (
    <div className="container">
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
          <Link to="/">
            <button className="d-block w-50 mt-2">Go Back</button>
          </Link>
          <button className="mt-2 w-50">Enlist</button>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;
