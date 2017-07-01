/*
  Here is a guide for the steps you could take:
*/

// 1. First select and store the elements you'll be working with

// 2. Create your `onSubmit` event for getting the user's search term

// 3. Create your `fetch` request that is called after a submission

// 4. Create a way to append the fetch results to your page

// 5. Create a way to listen for a click that will play the song in the audio play

var results = document.querySelector(".results");
var clientID = "?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f";
var musicURL = "https://api.soundcloud.com/tracks/";

document.getElementById("button").addEventListener("click", function() {
  var artist = document.getElementById("textInput").value;
  axios
    .get(
      "http://api.soundcloud.com/tracks?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f&q" +
        artist
    )
    .then(function(response) {
      console.log(response.data);
      var resultsHeader = document.createElement("h3");
      resultsHeader.innerHTML = "Click On Title Below To Select Track";
      results.appendChild(resultsHeader);
      var tracks = response.data;
      var length = response.data.length;
      for (var i = 0; i < length; i++) {
        displayTracks(tracks[i]);
      }
    });
});

function displayTracks(info) {
  var newUL = document.createElement("ul");
  newUL.className = "output";
  results.appendChild(newUL);
  var imgLI = document.createElement("li");
  imgLI.id = info.id;
  newUL.appendChild(imgLI);
  var newImg = document.createElement("img");
  if (info.artwork_url == null) {
    newImg.src = "unavailable.png";
    newImg.width = 90;
    newImg.height = 105;
  } else {
    newImg.src = info.artwork_url;
  }
  imgLI.appendChild(newImg);
  var titleLI = document.createElement("li");
  titleLI.id = info.id;
  newUL.appendChild(titleLI);
  var newTitle = document.createElement("p");
  newTitle.id = "p-" + info.id;
  newTitle.innerHTML = info.title;
  titleLI.appendChild(newTitle);
  document
    .getElementById("p-" + info.id)
    .setAttribute("onclick", "sendRadioSRC(" + info.id + ")");
}

function sendRadioSRC(srcID) {
  var selectedStream = musicURL + srcID + "/stream" + clientID;
  document.getElementById("radio").setAttribute("src", selectedStream);
  document.getElementById("radio").setAttribute("autoplay", true);
}
