var request = require("sync-request");
var res = request(
  "GET",
  `https://aboutdavid.me/projects.json`,
  {
    headers: {
      "user-agent": "David's Website"
    }
  }
);

module.exports = JSON.parse(res.getBody())
