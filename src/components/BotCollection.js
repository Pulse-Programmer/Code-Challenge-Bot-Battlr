import { Link } from "react-router-dom";

function BotCollection({ items }) {
  return (
    <div>
      {items.map((item) => {
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
          <div key={item.id} className="d-inline bg-secondary p-3 m-2 border ">
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
  );
}

export default BotCollection;
