var obj = {};
var date = new Date();
obj.dateandtime = date.toLocaleString('en-US', { timeZone: 'EST', timeStyle: "short", dateStyle: "long" }).toString();
module.exports = obj;
