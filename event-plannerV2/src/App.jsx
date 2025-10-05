//Import React from "react"; // not needed with React 17+
import LoginRegisterForm from "./components/LoginRegisterForm.jsx"; // we’ll create this
import "./App.css";

export default function App({ setCurrentUser, users, setUsers }) {
  // Pass props so App doesn’t manage routing itself
  return (
    <div className="app">
      <LoginRegisterForm
        users={users}
        setUsers={setUsers}
        setCurrentUser={setCurrentUser}
      />
    </div>
  );
}
