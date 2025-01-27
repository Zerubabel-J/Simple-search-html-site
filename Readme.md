# Simple HTML SITE

This is a simple Express server that listens for GET requests on the root route (/), filters data based on a query parameter, and returns filtered results. It uses the node-fetch package to fetch data from an external API (https://jsonplaceholder.typicode.com/comments) and the cors package to enable cross-origin requests.

# Features

Handles GET requests with a query parameter. Fetches data from an external API (jsonplaceholder). Filters the results based on the query parameter. Enables CORS support for frontend applications.

1. Install Dependencies
   Run the following command to install all required dependencies for both the front-end and back-end:

```bash
npm install
```

2. Running the Front-End
   To start the front-end with live reloading, run the following command:

```bash
npm run dev
```

This will start the front-end and serve the content, usually accessible at http://localhost:3000.

3. Running the API
   To run the API (Node.js with Express), use the following command:

```bash
npx tsx node/index.ts
```

This will start the API server, usually accessible at http://localhost:3001.
