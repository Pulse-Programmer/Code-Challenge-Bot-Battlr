import BotSpecs from "./pages/BotSpecs";
import App from "./App";

const routes = [
  {
    path: "/Code-Challenge-Bot-Battlr",
    element: <App />,
  },
  {
    path: "/Code-Challenge-Bot-Battlr/specs/:id",
    element: <BotSpecs />,
  },
];

export default routes;
