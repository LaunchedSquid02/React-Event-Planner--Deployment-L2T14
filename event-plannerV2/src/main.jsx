// Import necessary modules and components
import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Dashboard from "./components/dashboard.jsx";
import Help from "./components/Help.jsx";
import AddEvent from "./components/add-event.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// Root component to manage state and routing
function Root() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // Define routes using createBrowserRouter
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        // If user is logged in, go to dashboard; else show login/register
        <App
        // Pass props so App doesn’t manage routing itself
          users={users}
          setUsers={setUsers}
          setCurrentUser={setCurrentUser}
        />
      ),
    },
    {
      path: "/dashboard",
      element: currentUser ? (
        <Dashboard currentUser={currentUser} setCurrentUser={setCurrentUser} />
      ) : (
        <App
          users={users}
          setUsers={setUsers}
          setCurrentUser={setCurrentUser}
        />
      ),
    },
    {
      path: "/add-event",
      element: currentUser ? (
        <AddEvent currentUser={currentUser} setCurrentUser={setCurrentUser} />
      ) : (
        <App
          users={users}
          setUsers={setUsers}
          setCurrentUser={setCurrentUser}
        />
      ),
    },
    { path: "/help", element: <Help /> },
  ]);

  return <RouterProvider router={router} />;
}

// Render the Root component into the DOM
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
