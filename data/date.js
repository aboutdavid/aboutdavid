var obj = {};
var date = new Date();
obj.dateandtime = date.toLocaleString('en-US', { timeZone: 'America/New_York', timeStyle: "short", dateStyle: "long" }).toString();
module.exports = obj;
