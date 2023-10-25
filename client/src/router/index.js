import { createBrowserRouter } from "react-router-dom";
import baseRouter from "router/base.router";
import eventsRouter from "router/events.router";

const routes = [
	{
		path: "events/",
		children: eventsRouter,
	},
  {
    path: "/",
    children: baseRouter,
  },
];

const router = createBrowserRouter(routes);

export default router;
