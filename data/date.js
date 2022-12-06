var date = new Date();
module.exports = {
dateandtime: date.toLocaleString('en-US', { timeZone: 'America/New_York', timeStyle: "short", dateStyle: "long" })
}
