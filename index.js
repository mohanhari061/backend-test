require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;

const githubAPI={
    "login": "mohanhari061",
    "id": 115946069,
    "node_id": "U_kgDOBukyVQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/115946069?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mohanhari061",
    "html_url": "https://github.com/mohanhari061",
    "followers_url": "https://api.github.com/users/mohanhari061/followers",
    "following_url": "https://api.github.com/users/mohanhari061/following{/other_user}",
    "gists_url": "https://api.github.com/users/mohanhari061/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mohanhari061/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mohanhari061/subscriptions",
    "organizations_url": "https://api.github.com/users/mohanhari061/orgs",
    "repos_url": "https://api.github.com/users/mohanhari061/repos",
    "events_url": "https://api.github.com/users/mohanhari061/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mohanhari061/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 12,
    "public_gists": 0,
    "followers": 0,
    "following": 2,
    "created_at": "2022-10-16T17:39:26Z",
    "updated_at": "2024-08-02T13:33:04Z"
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("Hello twitter!");
});
app.get("/login", (req, res) => {
  res.send("<h1>Please Login!</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>Youtube!</h2>");
});
app.get("/github", (req, res) => {
  res.json(githubAPI);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port http://localhost:${port}/`);
});
