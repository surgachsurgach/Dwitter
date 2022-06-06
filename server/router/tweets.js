import express from "express";
import "express-async-errors";

const tweets = [
  {
    id: "1",
    text: "dream coding fighing",
    date: Date.now().toString(),
    username: "bob",
    user: "bob",
    url: "&.png",
  },
];

const router = express.Router();

// GET tweets
// GET tweets?username=:username
router.get("/", (req, res, next) => {
  const username = req.query.username;
  if (username) {
    const data = tweets.find((t) => t.username === username);
    if (data) {
      res.status(200).json(data);
    } else {
      res.sendStatus(404);
    }
  } else {
    res.status(200).json(tweets);
  }
});

// GET tweets/:id
// POST tweets
// PUST tweets/:id
// DELETE tweets/:id

export default router;
