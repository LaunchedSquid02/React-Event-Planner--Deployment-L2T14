import NavBar from "../routes/NavBar.jsx";
import { Container, Card } from "react-bootstrap";
import '../index.css';

// Enhanced Help component with detailed user guide
export default function Help() {
  return (
    <div>
      <NavBar />
      <Container className="mt-4">
        <h1 className="mb-4 text-center">Help & User Guide</h1>

        <Card className="mb-3 shadow-sm">
          <Card.Body>
            <Card.Title>
              <h4>Navigation</h4>
            </Card.Title>
            <Card.Text>
              Use the top navigation bar to move between sections of the app:
              <ul>
                <li>
                  <strong>Dashboard:</strong> View your upcoming events.
                </li>
                <li>
                  <strong>Add Event:</strong> Add new events to your planner.
                </li>
                <li>
                  <strong>Help:</strong> Access this guide anytime for
                  instructions.
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mb-3 shadow-sm">
          <Card.Body>
            <Card.Title>Registering an Account</Card.Title>
            <Card.Text>
              To use the app, you must create an account:
              <ul>
                <li>Click on the Register form.</li>
                <li>Provide your name, email, username, and password.</li>
                <li>Ensure all fields are filled and the email is valid.</li>
                <li>After registration, log in using your credentials.</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mb-3 shadow-sm">
          <Card.Body>
            <Card.Title>Managing Events</Card.Title>
            <Card.Text>
              Once logged in, you can manage your events from the dashboard:
              <ul>
                <li>
                  <strong>Create:</strong> Add a new event by clicking "Add
                  Event".
                </li>
                <li>
                  <strong>Edit:</strong> Modify event details using the "Edit"
                  button.
                </li>
                <li>
                  <strong>Delete:</strong> Remove an event with the "Delete"
                  button.
                </li>
                <li>
                  Events will be displayed in organized cards on your dashboard.
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mb-3 shadow-sm">
          <Card.Body>
            <Card.Title>Tips for Organising Events</Card.Title>
            <Card.Text>
              <ul>
                <li>Keep event names descriptive for easy identification.</li>
                <li>Use dates and reminders to stay on schedule.</li>
                <li>Group similar events together to improve visibility.</li>
                <li>
                  Regularly check your dashboard to manage upcoming events
                  efficiently.
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
