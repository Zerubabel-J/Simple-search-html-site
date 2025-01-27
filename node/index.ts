import express, { Request, Response } from "express";
import fetch from "node-fetch";
import cors from "cors";
const app = express();

// Enable CORS for all routes
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", async (req: any, res: any) => {
  const { query } = req.query;
  if (!query) {
    return res.status(400).send("Query parameter is required");
  }

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=3`
    );
    const data: { name: string }[] = (await response.json()) as {
      name: string;
    }[];
    const filteredResults = data.filter((comment: { name: string }) =>
      comment.name.toLowerCase().includes(query.toLowerCase())
    );

    return res.json(filteredResults);
  } catch (error) {
    return res.status(500).send("Error fetching data");
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
