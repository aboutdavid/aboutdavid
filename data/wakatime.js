var request = require("sync-request");
var res = request(
  "GET",
  `https://wakatime.com/share/@aboutDavid/b8ce273b-e06b-41eb-a214-ea27ce6c8c67.json`,
  {
    headers: {
      "user-agent": "David's Website"
    }
  }
);
var at = request(
  "GET",
  `https://wakatime.com/share/@aboutDavid/9e7aa41f-94b2-4623-8844-334169a6bed9.json`,
  {
    headers: {
      "user-agent": "David's Website"
    }
  }
);
var atdata = JSON.parse(at.getBody("utf8"))
var alltime = `${atdata.data.best_day.text} on ${atdata.data.best_day.date}`
var json = JSON.parse(res.getBody("utf8")).data



module.exports = {
    highest: alltime,
    today: json[json.length-1].grand_total.text,
}
