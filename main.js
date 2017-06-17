/*
  Here is a guide for the steps you could take:
*/

// 1. First select and store the elements you'll be working with

// 2. Create your `onSubmit` event for getting the user's search term

// 3. Create your `fetch` request that is called after a submission

// 4. Create a way to append the fetch results to your page

// 5. Create a way to listen for a click that will play the song in the audio play

var artist = document
  .getElementById("button")
  .addEventListener("click", getRequest(textInput.value));

function getRequest(artist) {
  console.log(artist);
  // SC.initialize({
  //   client_id: "095fe1dcd09eb3d0e1d3d89c76f5618f"
  // });
  // // find all sounds of buskers licensed under 'creative commons share alike'
  // SC.get("/tracks", {
  //   q: artist,
  //   license: "cc-by-sa"
  // }).then(function(tracks) {
  //   console.log(tracks);
  //   for (var i = 0; i < tracks.length; i++) {
  //     displayTracks(tracks[i]);
  //   }
  // });
}

function displayTracks() {
  var createDisplay = document.querySelector(".results");
}
