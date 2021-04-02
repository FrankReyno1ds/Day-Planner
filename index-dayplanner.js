// var start = new Date;
// setInterval(function() {
//   $('.Timer').text((new Date - start) / 1000 + " Seconds");
// }, 1000);

var time = moment().format("hh:mm:ss");
$("#containerClock").text(time);