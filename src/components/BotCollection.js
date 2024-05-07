import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SortBar from "./SortBar";

function BotCollection({ items }) {
  const [sortedBots, setSortedBots] = useState(items);

  useEffect(() => {
    fetch("https://json-db-p2-code-challenge.onrender.com/bots")
      .then((res) => res.json())
      .then((initialItems) => setSortedBots(initialItems))
      .catch((error) => alert(error.message));
  }, [items.length]);

  // Callback function to handle sorting
  function handleSort(criteria) {
    let sortedBotsCopy = [...sortedBots];
    if (criteria !== "None") {
      sortedBotsCopy.sort((a, b) => {
        if (criteria === "health") {
          return b.health - a.health; // (descending)
        } else if (criteria === "damage") {
          return b.damage - a.damage;
        } else if (criteria === "armor") {
          return b.armor - a.armor;
        }
      });
    }
    setSortedBots(sortedBotsCopy); // Update state with sorted bots
  }

  // Callback function to handle filtering
  function handleFilter(criteria) {
    let filteredBots = items;
    if (criteria !== "") {
      filteredBots = items.filter((bot) => bot.bot_class === criteria);
    }
    setSortedBots(filteredBots); // Update state with filtered bots
  }

  return (
    <div>
      <SortBar onSort={handleSort} onFilter={handleFilter} />
      <div className="row">
        {sortedBots.map((item) => {
          function classIcon() {
            if (item.bot_class === "Support") {
              return <>🚁</>;
            } else if (item.bot_class === "Assault") {
              return <>💣</>;
            } else if (item.bot_class === "Defender") {
              return <>🛸</>;
            } else if (item.bot_class === "Medic") {
              return <>❤️</>;
            } else if (item.bot_class === "Witch") {
              return <>🖤</>;
            } else if (item.bot_class === "Captain") {
              return <>🔱</>;
            }
          }

          return (
            <div key={item.id} className="bg-secondary p-3 m-2 border col-3">
              <Link
                to={`/Code-Challenge-Bot-Battlr/specs/${item.id}`}
                className="text-decoration-none"
              >
                <figure className="">
                  <img src={item.avatar_url} alt="bot-avatar" />
                  <figcaption className="text-white">
                    <b>
                      {item.name}
                      {classIcon()}
                    </b>
                  </figcaption>
                </figure>
              </Link>

              <p className="text-break">{item.catchphrase}</p>
              <i>🦾</i>
              <em className="m-1">{item.health}</em>
              <i>⚡️</i>
              <em className="me-2">{item.damage}</em>
              <i>🧲</i>
              <em className="m-1">{item.armor}</em>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BotCollection;
