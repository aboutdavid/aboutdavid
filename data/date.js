var obj = {}
    var date = new Date(date);
    var month = date.toLocaleString("default", { month: "long" });
    var day = date.getDate();
    var year = date.getFullYear();
    var hour = date.getHours() + 1;
    var min = date.getMinutes() + 1;
       var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm
obj.dateandtime = `${month} ${day}, ${year} (${strTime})`
