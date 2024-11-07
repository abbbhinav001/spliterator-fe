import { useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ApplicationHome from "./pages/ApplicationHome/ApplicationHome";

function App() {
  let routes = useRoutes([
    { path: "/default", element: <NotFoundPage /> },
    { path: "/*", element: <Home /> },
    { path: "/home", element: <ApplicationHome /> },
  ]);
  return routes;
}

export default App;
