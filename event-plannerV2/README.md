# Event Management App

A simple React application for managing events. Users can log in, add new events with title, date, time, description, and location, view them on the dashboard, and delete events. Built using React, React Router, and React-Bootstrap.

---

## Project Structure

```
/src
  /components
    - add-event.jsx        # Form to add new events
    - dashboard.jsx       # Displays user's events and allows deletion
    - Help.jsx            # Help page (static info or FAQ)
    - LoginRegisterForm.jsx  # Login and registration form
  /routes
    - NavBar.jsx          # Navigation bar component
```

---

## Prerequisites

- Node.js (v18 or later recommended)  
- npm (v9 or later recommended)  

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/hyperiondev-bootcamps/JP25060018494.git

cd event-plannerV2
```

2. Install dependencies:

```bash
npm install react react-dom react-scripts react-router-dom react-bootstrap bootstrap
```
3. Start the development server:

```bash
npm run dev
```

The app will run at [http://localhost:5173](http://localhost:5173).

---

## Usage

- **Login/Register**: Use the `LoginRegisterForm` component to log in or register a new user.  
- **Add Event**: Go to "Add Event" to provide event details and submit. After adding, you are redirected to the dashboard.  
- **Dashboard**: Displays all events from the current user. Each event can be deleted using the "Delete Event" button.  
- **Help**: Static page to provide instructions or FAQ.

---

## Available Scripts

```bash
npm start      # Runs the app in development mode
npm run dev  # Builds the app for production
type "o" # To open in terminal

```

---

## Notes

- The app uses **React Router v6** for navigation and **React-Bootstrap** for UI components.  
- Currently, the app stores user data and events in memory (no backend). Refreshing the page will reset all data.  

---

## Future Enhancements

- Persist user data in localStorage or connect to a backend API.  
- Add event editing functionality.  
- Improve styling and mobile responsiveness.  
- Add confirmation prompts for deleting events.
