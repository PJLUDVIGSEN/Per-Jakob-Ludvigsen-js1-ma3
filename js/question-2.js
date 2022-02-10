// Question 2

const myUrl =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=ea7c1d333ef44fe5b9c93b58ef10ac77";

const gamesHtml = document.querySelector(".container");
const loader = document.querySelector(".loading");
function errorMessage(message) {
  return `<div class="error">${message}</div>`;
}
async function callGames() {
  try {
    const response = await fetch(myUrl);
    const resultsdata = await response.json();
    const games = resultsdata.results;
    gamesHtml.innerHTML = "";
    for (let i = 0; i < games.length; i++) {
      gamesHtml.innerHTML += `<div class="box"><h3>Title: ${games[i].name}</h3><p>Rating: ${games[i].rating}</p><p>Tags: ${games[i].tags.length}</p></div>`;
      if (i === 7) {
        break;
      }
    }
  } catch (error) {
    loader.innerHTML = errorMessage("An error has Occured.");
    console.log("An error has occured.");
    gamesHtml.style.display = "none";
  }
}
callGames();
