// lopende digitale KLOK
// This Day
var today2 = new Date();
document.getElementById('datum').innerHTML = today2.getDate() + '/' + (today2.getMonth()+1);
// This Month
var maanden = new Array('Januari', 'Debruari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December');

document.getElementById('datum').innerHTML = today2.getDate() + ' ' + maanden[today2.getMonth()] + ' ' + today2.getFullYear();

var today = new Date();

function startTime(){
//tijd opzoeken
  today = new Date();

  var seconds = addLeadingZero(today.getSeconds());
  var minutes = addLeadingZero(today.getMinutes());

  document.getElementById('klok').innerHTML = today.getHours() + ':' + minutes + ':' + seconds;

  var t = setTimeout(startTime,500);
}
//nul toevoegen als nummer onder de 10 is
function addLeadingZero(number){
  if(number < 10){
    return '0' + number;
  }
    return number;
}
// AFB maan/zon veranderen


var dagNacht = today.getHours();

  if (dagNacht > 7 && dagNacht <= 19){
  //  document.getElementById('afb').src = "zon.png";
    document.getElementsByTagName('body')[0].style.backgroundImage = "url('zon.png')";
  } else {
    document.getElementById('afb').src = "maan.png";
  }


// function change(){
//   var nu = new Date();
//   var dagnacht = rightNow.getHours();
//
//   if (dagnacht > 6 && dagnacht <= 18){
//     document.getElementById("afb").src = "zon.png";
//   } else {
//     document.getElementById("afb").src = "maan.png";
//   }
// }
