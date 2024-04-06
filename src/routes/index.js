import LayoutDefault from "../components/Layout/LayoutDefault";
import BookRoom from "../components/pages/BookRoom";
import CreateRoom from "../components/pages/CreateRoom";
import Dashboard from "../components/pages/Dashboard";
import RoomList from "../components/pages/Roomlist";
export const routers = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/room-list",
        element: <RoomList />,
      },
      {
        path: "/book-room",
        element: <BookRoom />,
      },
      {
        path: "/create-room",
        element: <CreateRoom />,
      },
    ],
  },
];
