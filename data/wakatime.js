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
var json = JSON.parse(res.getBody("utf8")).data
json.sort((a,b)=>b.grand_total.total_seconds-a.grand_total.total_seconds)
console.log(json)
var text
var today = json.find(i=>i.range.date == `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`)
if (!today) today = json.find(i=>i.range.date == `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()-1}`)
if (today) text = today.grand_total.text
if (!today) text = "Unable to fetch..."

module.exports = {
    highest: json[0].grand_total.text,
    today: json.find(i=>i.range.date == `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()-1}`).grand_total.text,
}

console.log(module.exports)
