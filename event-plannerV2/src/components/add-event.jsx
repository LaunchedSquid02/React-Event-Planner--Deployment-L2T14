import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import NavBar from "../routes/NavBar.jsx";

// Component to add a new event
export default function AddEvent({ currentUser, setCurrentUser }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState(""); // New state for time
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState(""); // New state for location

  // Hook to navigate programmatically
  const navigate = useNavigate(); // For navigation

  // Handle form submission
  const handleAddEvent = (e) => {
    e.preventDefault();

    if (!title || !date || !time) {
      alert("Please enter a title, date, and time for the event.");
      return;
    }

    // Create new event object
    const newEvent = {
      id: Date.now(),
      title,
      date,
      time,
      description,
      location,
    };

    // Update currentUser's events
    const updatedUser = {
      currentUser,
      events: [...(currentUser.events || []), newEvent],
    };

    setCurrentUser(updatedUser);

    // Reset form
    setTitle("");
    setDate("");
    setTime("");
    setDescription("");
    setLocation("");

    // Navigate back to dashboard
    navigate("/dashboard");
  };

  // Render form
  return (
    <div>
    {/* Call Navbar */}
      <NavBar />

      {/* Containers to display events in forms */}
      <Container className="mt-4">
        <h2>Add a New Event</h2>
        <Form onSubmit={handleAddEvent}>
          <Form.Group className="mb-3">
            <Form.Label>Event Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter event title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Event Date</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Event Time</Form.Label>
            <Form.Control
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Add a short description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            Add Event
          </Button>
        </Form>
      </Container>
    </div>
  );
}
