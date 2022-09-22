var datetime = null, date = null;

var datetime_update = function() {
  date = moment(new Date());
  datetime.html(date.format(' dddd , Do MMMM YYYY , HH:mm:ss'));
};

$(document).ready(function() {
  datetime = $('#datetime');
  datetime_update();
  setInterval(datetime_update, 1000);
});

