import BotSpecs from "./pages/BotSpecs";
import App from "./App";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/specs/:id",
    element: <BotSpecs />,
  },
];

export default routes;
