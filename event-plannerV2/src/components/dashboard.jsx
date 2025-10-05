import NavBar from "../routes/NavBar.jsx";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Form,
  Modal,
} from "react-bootstrap";
import { useState } from "react";

export default function Dashboard({ currentUser, setCurrentUser }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);

  // Logout function
  const handleLogout = () => {
    setCurrentUser(null);
  };

  // Use currentUser's events
  const openEvents = currentUser?.events || [];

  // Open edit modal
  const handleEditEvent = (event) => {
    setEditingEvent({ ...event });
    setShowEditModal(true);
  };

  // Save updated event
  const handleSaveEvent = () => {
    const updatedEvents = openEvents.map((event) =>
      event.id === editingEvent.id ? editingEvent : event
    );
    setCurrentUser({
      ...currentUser,
      events: updatedEvents,
    });
    setShowEditModal(false);
  };

  // Delete event
  const handleDeleteEvent = (eventId) => {
    const updatedEvents = openEvents.filter((event) => event.id !== eventId);
    setCurrentUser({
      ...currentUser,
      events: updatedEvents,
    });
  };

  return (
    <div>
      <NavBar />
      <Container className="mt-4">
        <h1 className="mb-4">Welcome, {currentUser.name}!</h1>

        {openEvents.length === 0 ? (
          <p>No upcoming events.</p>
        ) : (
          <Row xs={1} md={2} lg={3} className="g-4">
            {openEvents.map((event) => (
              <Col key={event.id}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {event.date} {event.time && `at ${event.time}`}
                    </Card.Subtitle>
                    {event.location && (
                      <Card.Text>
                        <strong>Location:</strong> {event.location}
                      </Card.Text>
                    )}
                    {event.description && (
                      <Card.Text>{event.description}</Card.Text>
                    )}

                    {/* Edit & Delete buttons side by side */}
                    <div className="d-flex justify-content-center gap-2 mt-3">
                      <Button
                        variant="primary"
                        onClick={() => handleEditEvent(event)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteEvent(event.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>

      {/* Modal for editing event */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editingEvent && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={editingEvent.title}
                  onChange={(e) =>
                    setEditingEvent({ ...editingEvent, title: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={editingEvent.date}
                  onChange={(e) =>
                    setEditingEvent({ ...editingEvent, date: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="time"
                  value={editingEvent.time || ""}
                  onChange={(e) =>
                    setEditingEvent({ ...editingEvent, time: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  value={editingEvent.location || ""}
                  onChange={(e) =>
                    setEditingEvent({
                      ...editingEvent,
                      location: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={editingEvent.description || ""}
                  onChange={(e) =>
                    setEditingEvent({
                      ...editingEvent,
                      description: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleSaveEvent}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
