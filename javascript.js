//KAART
mapboxgl.accessToken = 'pk.eyJ1IjoiamFuZWtvbGYiLCJhIjoiY2ttbnY0ZGpuMXlsdDJvazVrZ3gwOGRzaCJ9.mtUoN32I1ZdXpE0_Kh9cBA';

var map = new mapboxgl.Map({
  container: 'kaart',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [12.554729, 55.70651],
  zoom: 2
});

//MARKERS
var Denemark = new mapboxgl.Marker()
  .setLngLat([12.5700724, 55.6867243])
  .addTo(map);

var Nederland = new mapboxgl.Marker()
  .setLngLat([4.8936041, 52.3727598])
  .addTo(map);

var Japan = new mapboxgl.Marker()
  .setLngLat([139.7594549, 35.6828387])
  .addTo(map);

var Washington = new mapboxgl.Marker()
  .setLngLat([-77.0365427, 38.8950368])
  .addTo(map);

var Egypte = new mapboxgl.Marker()
  .setLngLat([29.2675469, 26.2540493])
  .addTo(map);

var Sydney = new mapboxgl.Marker()
  .setLngLat([151.2164539, -33.85481573])
  .addTo(map);

//BUTTON
document.getElementById('denemark').addEventListener('click', function () {

  map.flyTo({
    center: [
      12.554729, 55.70651
    ],
    essential: true // this animation is considered essential with respect to prefers-reduced-motion
  });
});

document.getElementById('nederland').addEventListener('click', function () {

  map.flyTo({
    center: [
      4.8936041, 52.3727598
    ],
    essential: true // this animation is considered essential with respect to prefers-reduced-motion
  });
});

document.getElementById('japan').addEventListener('click', function () {

  map.flyTo({
    center: [
      139.7594549, 35.6828387
    ],
    essential: true // this animation is considered essential with respect to prefers-reduced-motion
  });
});

document.getElementById('egypte').addEventListener('click', function () {

  map.flyTo({
    center: [
      29.2675469, 26.2540493
    ],
    essential: true // this animation is considered essential with respect to prefers-reduced-motion
  });
});

document.getElementById('sydney').addEventListener('click', function () {

  map.flyTo({
    center: [
      151.2164539, -33.85481573
    ],
    essential: true // this animation is considered essential with respect to prefers-reduced-motion
  });
});

document.getElementById('washington').addEventListener('click', function () {

  map.flyTo({
    center: [
      -77.0365427, 38.8950368
    ],
    essential: true // this animation is considered essential with respect to prefers-reduced-motion
  });
});

// API dadJokes
function dadJoke() {
  var url = 'https://official-joke-api.appspot.com/random_joke'

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      //console.log (response)
      var antwoord = response.punchline;
      var vraag = response.setup;
      //document.getElementById('joke').innerHTML ='Vraag:' + ' ' + '<br>'+ vraag + '<br>' + '<br>'+ 'Antwoord:' + '<br>'  + antwoord;
      document.getElementById('joke').innerHTML = vraag + '<br>' + antwoord;
    });
}
dadJoke();

document.getElementById('dadjokeBekijken').onclick = function () {
  dadJoke();
}
//STYLING API
document.getElementById("joke").style.textAlign = "center";
document.getElementById("joke").style.color = "rgb(220, 8, 73)";
document.getElementById("joke").style.fontFamily = "Space Grotesk,sans-serif";

// API MUZIEK NUMMERS
function getGift() {
  var url = 'https://binaryjazz.us/wp-json/genrenator/v1/genre/'

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      //console.log (response)  
      alert(response);
    });
}

document.getElementById('cadeauBekijken').onclick = function () {
  getGift();
}

document.getElementById("cadeau").style.textAlign = "center";
document.getElementById("cadeau").style.color = "rgb(220, 8, 73)";
document.getElementById("cadeau").style.fontFamily = "Space Grotesk,sans-serif";





