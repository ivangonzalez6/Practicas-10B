if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw.js").then(
      function (registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

/*const API_URL = "https://www.theaudiodb.com/api/v1/json/1/search.php?s=";

function search() {
  let artist = document.getElementById("Artist").value;
  
  fetch(API_URL + artist)
    .then((response) => response.json())
    .then((data) => {
      let element = document.getElementById("app2");
      element.innerHTML =
        "<image src='" +
        data.artists[0].strArtistLogo +
        "'></image>" +
        "<image src='" +
        data.artists[0].strArtistBanner +
        "'></image> <br/> <p>" +
        data.artists[0].strBiographyES +
        "</p>";
      console.log(data);
    })
    .catch((err) => console.log(err));
}*/

let url = "https://www.theaudiodb.com/api/v1/json/1/search.php?s=";

function search() {
  let artist = document.getElementById("Artist").value;
  getData(url + artist).catch((err) => {
    console.log("Hubo un error: " + err);
  });
}

async function getData(endpoint) {
  const response = await fetch(endpoint);
  const data = await response.json();
  let element = document.getElementById("app2");

  element.innerHTML =
    "<image src='" +
    data.artists[0].strArtistLogo +
    "'></image>" +
    "<image src='" +
    data.artists[0].strArtistBanner +
    "'></image> <br/> <p>" +
    data.artists[0].strBiographyES +
    "</p>";

  console.log(data);
}
