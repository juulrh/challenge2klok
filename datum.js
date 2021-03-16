console.log(today);
document.getElementById('datum').innerHTML = today.toString();

document.getElementById('day').innerHTML = today.getDate();
document.getElementById('month').innerHTML = today.getMonth()+1; // Januari is maand 0
document.getElementById('year').innerHTML = today.getFullYear();
document.getElementById('datum').innerHTML = today.getDay(); // Zondag is dag 0
