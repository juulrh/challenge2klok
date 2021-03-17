//DAG
var d = new Date();
  var dagweek = new Array("zondag","maandag", "dinsdag","woensdag","donderdag","vrijdag","zaterdag");
  var n = dagweek[d.getDay()];
  document.getElementById("dag").innerHTML = n;

//DATUM
var today2 = new Date();
document.getElementById('datum').innerHTML = today2.getDate() + '/' + (today2.getMonth()+1);

var maanden = new Array('Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December');

document.getElementById('datum').innerHTML = today2.getDate() + ' ' + maanden[today2.getMonth()] + ' ' + today2.getFullYear();

var today = new Date();

//KLOK
function startTime(){
//tijd opzoeken
  today = new Date();

  var seconds = addLeadingZero(today.getSeconds());
  var minutes = addLeadingZero(today.getMinutes());

  document.getElementById('klok').innerHTML = today.getHours() + ':' + minutes + ':' + seconds;

  var t = setTimeout(startTime,500);
}

//NUL toevoegen als nummer onder de 10 is
function addLeadingZero(number){
  if(number < 10){
    return '0' + number;
  }
    return number;
}

// AFB maan/zon veranderen

var dagNacht = today.getHours();

  if (dagNacht > 6 && dagNacht <= 18){
    document.getElementsByTagName('body')[0].style.backgroundImage = "url('zon.png')";
    document.body.style.backgroundColor = 'lightblue';
    document.getElementById("dn").innerHTML= "DAG";

  } else {
    document.getElementsByTagName('body')[0].style.backgroundImage = "url('maan2.png')";
    document.body.style.backgroundColor = 'black';
    document.getElementById("dn").innerHTML= "NACHT";

  }
