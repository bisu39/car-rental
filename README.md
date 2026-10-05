# Car Rental

A car-rental web application for browsing vehicles, viewing car details, and submitting rental bookings. The project includes a React frontend and an Express/MongoDB backend.

## Features

### Frontend

- Browse the vehicle collection and filter by vehicle category.
- View vehicle details, specifications, and rental prices.
- Create an account and log in.
- Submit a booking with pickup and return locations and dates.
- Responsive pages for different screen sizes.
- Load vehicle data and submit user and booking requests through the backend API.

### Backend

- RESTful API endpoints for vehicle data, user accounts, and bookings.
- MVC-style separation of routes, controllers, and models.

## Visit

Live link: [carrental-front.netlify.app](carrental-front.netlify.app)

## Tech stack

- **Frontend:** React, Vite, React Router, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose

## Project structure

```text
Project-Car-Rental/
├── backend/
│   ├── config/          # MongoDB connection
│   ├── controller/      # User, vehicle, and booking request handlers
│   ├── middleWares/     # Authentication and error handling
│   ├── models/          # User, car, and booking schemas
│   ├── routes/          # API routes
│   ├── utils/           # Shared backend utilities
│   └── server.js        # Express server entry point
├── frontend/
│   ├── public/          # Static public files
│   ├── src/
│   │   ├── assets/      # Images, icons, and video
│   │   ├── components/  # Shared UI components
│   │   ├── context/     # Shared application state and API data
│   │   ├── pages/       # Application pages
│   │   ├── App.jsx      # Frontend routes and layout
│   │   └── main.jsx     # Frontend entry point
│   └── vite.config.js
└── README.md
```

## Future features

Possible additions:

- Search and refine vehicle results by price, features, and availability.
- Prevent overlapping bookings and show real-time availability.
- Add a customer dashboard for viewing or cancelling bookings.
- Add an administration area for managing vehicles and bookings.
- Integrate secure online payments.

