# Feedback App

This project is a full-stack application built with Nest.js on the backend and React with TypeScript on the frontend. The application allows users to submit feedback and view all feedback entries.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Frontend Components](#frontend-components)
- [Rate Limiting](#rate-limiting)
- [Optional Enhancements](#optional-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Features

- Submit new feedback with a name and feedback text.
- Retrieve and display all feedback entries.
- Rate limiting to prevent spam (optional).
- Uses web workers to fetch data on the frontend (optional).
- Infinite scrolling for feedback list (optional).

## Tech Stack

**Backend:**
- Nest.js
- TypeScript

**Frontend:**
- React
- TypeScript
- Axios (for HTTP requests)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/feedback-app.git
    cd feedback-app
    ```

2. **Install backend dependencies**:
    ```sh
    cd backend
    npm install
    ```

3. **Install frontend dependencies**:
    ```sh
    cd ../frontend
    npm install
    ```

### Running the Application

1. **Run the backend server**:
    ```sh
    cd backend
    npm run start:dev
    ```

2. **Run the frontend application**:
    ```sh
    cd ../frontend
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Submit Feedback**: Use the form on the homepage to submit new feedback.
- **View Feedback**: Feedback entries will be displayed below the form.

## API Endpoints

### Retrieve All Feedback

- **URL**: `/feedback`
- **Method**: `GET`
- **Response**: Array of feedback entries

### Submit New Feedback

- **URL**: `/`
- **Method**: `POST`
- **Body**: JSON object with `name` and `feedback`
- **Response**: The created feedback entry

## Frontend Components

### FeedbackForm Component

```typescript
import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/feedback', { name, feedback });
    setName('');
    setFeedback('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div>
        <label>Feedback</label>
        <textarea value={feedback} onChange={e => setFeedback(e.target.value)} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
