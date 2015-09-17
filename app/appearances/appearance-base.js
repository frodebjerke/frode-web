const moment = require('moment');
const Link = require('react-router').Link;


module.exports.fromNowRepr = function (date) {

  if (isToday(date)) {
   return "Today";
  }
  return moment(date).fromNow();
}

function isToday(date) {
  return moment(date).startOf('day').isSame(moment().startOf('day'));
}
