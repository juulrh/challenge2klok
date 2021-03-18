//DAG
  var d = new Date();
  var dagweek = new Array("zondag","maandag", "dinsdag","woensdag","donderdag","vrijdag","zaterdag");
  var n = dagweek[d.getDay()];

  document.getElementById("dag").innerHTML = n;

//DATUM
  var vandaag = new Date();

  var maanden = new Array('Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December');

  document.getElementById('datum').innerHTML = vandaag.getDate() + ' ' + maanden[vandaag.getMonth()] + ' ' + vandaag.getFullYear();

//KLOK
  var today = new Date();
  function startTime(){
  //tijd opzoeken
    today = new Date();

    var hours = addLeadingZero(today.getHours());
    var seconds = addLeadingZero(today.getSeconds());
    var minutes = addLeadingZero(today.getMinutes());

    document.getElementById('klok').innerHTML = hours + ':' + minutes + ':' + seconds;

    var t = setTimeout(startTime,500);
}

//NUL toevoegen als nummer onder de 10 is
  function addLeadingZero(number){
    if(number < 10){
      return '0' + number;
    }
      return number;
  }

//AFB maan/zon veranderen & Background kleur & tekst dag/nacht
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
