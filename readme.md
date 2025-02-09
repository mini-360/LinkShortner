# Link Shortener: Make Long URLs Short and Shareable

This project explores the concept of link shorteners, tools that transform long, complex URLs into shorter, more manageable links.

## What are Link Shorteners?

Imagine sharing a lengthy URL on Twitter, where character limits reign supreme. Link shorteners come to the rescue, converting these cumbersome addresses into concise "shortlinks" perfect for social media, emails, or text messages.

## Benefits of Link Shorteners

- **Improved Readability**: Short links are visually appealing and easier to remember than their long counterparts.
- **Space Saving**: Ideal for platforms with character limitations like Twitter or SMS.
- **Link Management**: Many link shorteners offer analytics and tracking features, allowing you to see how many clicks your links get.
- **Brand Customization**: Some services allow you to create branded short links, promoting brand recognition.

## Common Use Cases

Link shorteners have a variety of applications:

- Sharing articles or blog posts on social media platforms.
- Promoting products or services with shortened links in marketing campaigns.
- Tracking link performance to gain insights into user engagement.
- Creating clean and professional-looking links for presentations or documents.

## Techonologies Used

- Node.js, Express.js, MongoDB, Mongoose, nanoid (for generating unique short URLs), EJS (for frontend)

## Popular Link Shorteners

Several popular link shorteners exist, including:

- [Bitly](https://bitly.com)
- [TinyURL](https://tinyurl.com)
- Goo.gl (now shortened to g.co)

## Features

- Shorten long URLs into unique short URLs.
- Redirect users from short URLs to original long URLs.
- Track visit history for each short URL.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- EJS

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

      ```bash
      PORT=8001
      MONGODB_URI=mongodb://localhost:27017/short-url
      ```

4. Start the server:

    ```bash
    npm start
    ```

5. Access the application at `http://localhost:8001`.

## How to Use the link shortener

- First you have to register yourself on the website.For that you have to go <http://localhost:8001/signup>
- After registering you can login to the website by going to <http://localhost:8001/login>
- After logging in you can shorten the link by putting the link in the input box and clicking on the generate button.
- You can see the list of all the links that you have shortened by  going to <http://localhost:8001/user>
