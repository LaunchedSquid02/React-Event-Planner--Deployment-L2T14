import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginRegisterForm({ users, setUsers, setCurrentUser }) {
  const [isRegistering, setIsRegistering] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, email, username, password } = formData;
    if (!name || !email || !username || !password) {
      alert("All fields are required.");
      return;
    }
    if (!isValidEmail(email)) {
      alert("Invalid email format.");
      return;
    }
    setUsers([...users, { ...formData }]);
    //alert("Registration successful! Please log in.");
    setIsRegistering(false);
    setFormData({ name: "", email: "", username: "", password: "" });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) =>
        u.username === formData.username && u.password === formData.password
    );
    if (user) {
      setCurrentUser(user);
      navigate("/dashboard"); // redirect to dashboard
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <form
      onSubmit={isRegistering ? handleRegister : handleLogin}
      className="form-container"
    >
      <h2>{isRegistering ? "Register" : "Login"}</h2>
      {isRegistering && (
        <>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </>
      )}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">{isRegistering ? "Register" : "Login"}</button>
      <p>
        {isRegistering
          ? "Already have an account? "
          : "Don't have an account? "}
        <span
          className="form-switch"
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering ? "Login here" : "Register here"}
        </span>
      </p>
    </form>
  );
}
