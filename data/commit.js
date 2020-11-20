const username = "aboutDavid";
var request = require("sync-request");
var res = request(
  "GET",
  `https://api.github.com/users/${username}/events/public`,
  {
    headers: {
      "user-agent": "David's Website"
    }
  }
);

const activities = JSON.parse(res.getBody());

for (let i = 0; i < activities.length; i++) {
  if (activities[i].type === "PushEvent") {
    const commit =
      activities[i].payload.commits[activities[i].payload.commits.length - 1];

    module.exports = {
      message: commit.message,
      url: `https://github.com/${activities[i].repo.name}/commit/${commit.sha}`,
      time: activities[i].created_at,
      repo: activities[i].repo.name
    };
    break;
  }
}
