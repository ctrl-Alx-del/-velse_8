const playliste = ["Squarepusher Theme", "Dr Cc", "Welcome Home (Sanitarium)", "One more time", "Zungguzungguguzungguzeng", "A Dialogue", "Don't stop 'Til You Get Enough", "Take My Breath", "SEGA SUNSET", "Tin Soldiers"];

playliste.forEach(visPlayliste);

function visPlayliste(sange) {
    console.log(sange);
    var ul = document.getElementById("display");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(sange));
    ul.appendChild(li);
}




