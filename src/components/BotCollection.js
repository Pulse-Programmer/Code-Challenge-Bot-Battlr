import { Link } from "react-router-dom";
import { useState } from "react";
import SortBar from "./SortBar";

function BotCollection({ items }) {
  const [sortedBots, setSortedBots] = useState(items);

  // Callback function to handle sorting
  function handleSort(criteria) {
    let sortedBotsCopy = [...sortedBots];
    sortedBotsCopy.sort((a, b) => {
      if (criteria === "health") {
        return b.health - a.health; // Sort by health (descending)
      } else if (criteria === "damage") {
        return b.damage - a.damage; // Sort by damage (descending)
      } else if (criteria === "armor") {
        return b.armor - a.armor; // Sort by armor (descending)
      }
    });
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
      <div>
        {sortedBots.map((item) => {
          function classIcon() {
            if (item.bot_class === "Support") {
              return <i>🚁</i>;
            } else if (item.bot_class === "Assault") {
              return <i>💣</i>;
            } else if (item.bot_class === "Defender") {
              return <i>🛸</i>;
            } else if (item.bot_class === "Medic") {
              return <i>❤️</i>;
            } else if (item.bot_class === "Witch") {
              return <i>🖤</i>;
            } else if (item.bot_class === "Captain") {
              return <i>🔱</i>;
            }
          }

          return (
            <div
              key={item.id}
              className="d-inline bg-secondary p-3 m-2 border "
            >
              <Link to={`/specs/${item.id}`}>
                <figure className="">
                  <img src={item.avatar_url} alt="bot-avatar" />
                  <figcaption>
                    <b>
                      {item.name}
                      {classIcon()}
                    </b>
                  </figcaption>
                </figure>
              </Link>

              <p>{item.catchphrase}</p>
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
