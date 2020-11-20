var request = require("sync-request");
var res = request(
  "GET",
  `https://notebook.aboutdavid.me/feed/feed.json`,
  {
    headers: {
      "user-agent": "David's Website"
    }
  }
);

module.exports = JSON.parse(res.getBody()).items.slice(0,3)