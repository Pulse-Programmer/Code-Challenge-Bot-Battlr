import { useState, useEffect } from "react";

function YourBotArmy({ onHandleDelete }) {
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("https://json-db-p2-code-challenge.onrender.com/enlisted")
      .then((res) => res.json())
      .then((data) => setArmy(data));
  }, [army.length]);

  function handleDelete(id) {
    fetch(`https://json-db-p2-code-challenge.onrender.com/enlisted/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const updatedItems = army.filter((item) => item.id !== id);
        setArmy(updatedItems);
        onHandleDelete(id);
      });
  }

  function handleRelease(id) {
    fetch(`https://json-db-p2-code-challenge.onrender.com/enlisted/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const updatedItems = army.filter((item) => item.id !== id);
        setArmy(updatedItems);
      });
  }

  return (
    <div className="container">
      <div className="row">
        {army.map((item) => {
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
            <div className="card m-2" key={item.id} style={{ width: "12rem" }}>
              <img
                src={item.avatar_url}
                alt="bot_avatar"
                className="card-img-top bg-secondary"
              />
              <div className="card-body>">
                <h5>
                  Name:{item.name} {classIcon()}
                </h5>
                <p style={{ fontSize: "12px" }}>{item.catchphrase}</p>

                <button
                  className="btn btn-warning bt-sm float-start"
                  onClick={() => handleRelease(item.id)}
                >
                  Release
                </button>
                <button
                  className="btn btn-danger btn-sm mb-2"
                  onClick={() => handleDelete(item.id)}
                >
                  X
                </button>
              </div>
              <div class="card-footer" style={{ fontSize: "14px" }}>
                <>🦾</>
                <em className="m-1">{item.health}</em>
                <i>⚡️</i>
                <em className="me-2">{item.damage}</em>
                <i>🧲</i>
                <em className="m-1">{item.armor}</em>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default YourBotArmy;
