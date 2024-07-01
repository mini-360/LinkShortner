# Link Shortener

A simple link shortener application built with Node.js, Express, MongoDB, and Mongoose.

## Features

- Shorten long URLs into unique short URLs.
- Redirect users from short URLs to original long URLs.
- Track visit history for each short URL.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- nanoid (for generating unique short URLs)
- HTML/CSS (for frontend, if applicable)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mini-360/LinkShortner.git
   cd link-shortener
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Define the following environment variables in the `.env` file:
      ```
      PORT=8001
      MONGODB_URI=mongodb://localhost:27017/short-url
      ```
4. Start the server:
    ```bash
    npm start
    ```
5. Access the application at `http://localhost:8001`.

