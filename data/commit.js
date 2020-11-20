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
function time(date) {
  var date = new Date(date);
  var month = date.toLocaleString("default", { month: "long" });
  var day = date.getDate();
  var year = date.getFullYear();
  var hour = date.getHours() + 1;
  var min = date.getMinutes() + 1;
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return `${month} ${day}, ${year} (${strTime})`;
}
const activities = JSON.parse(res.getBody());

for (let i = 0; i < activities.length; i++) {
  if (activities[i].type === "PushEvent") {
    const commit =
      activities[i].payload.commits[activities[i].payload.commits.length - 1];

    module.exports = {
      message: commit.message,
      url: `https://github.com/${activities[i].repo.name}/commit/${commit.sha}`,
      time: time(activities[i].created_at),
      repo: activities[i].repo.name
    };
    break;
  }
}
