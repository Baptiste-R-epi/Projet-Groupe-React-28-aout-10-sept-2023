import { EventDetails } from "pages/events/events.details";
import { NotFound } from "pages/error/NotFound";
import { Unauthorized } from "pages/error/Unauthorized";

const router = [
  {
    path: "/events/:uid",
    element: <EventDetails />,
  },
  {
    path: "unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default router;
