// Random NBA facts while waiting for server
let nbaFacts = [
  "The NBA first came to be as the Basketball Association of America in 1946",
  "Kobe Bryant's Middle Name Is Bean",
  "Wilt Chamberlain had his number retired by the Harlem Globetrotters",
  "Rumour has it that Manute Bol killed a lion with a spear. I wouldn't want to mess with that guy! 🦁",
  "Vince Carter and Tracy Mcgrady are cousins! They themselves did not know of this until after they were both in the NBA",
  "Scott Skiles holds the record for most assissts in one NBA game (a whopping 30 assists!)",
  "The largest margin of victory in an NBA game happened on December 17, 1991 as the Cavs dropped the hammer on the Miami Heat, 148-80",
  "Isiah Thomas once scored 16 Points in 94 Seconds and still lost!",
  "Allen Iverson holds the record for most steals in an NBA Playoff game (10 steals on May 13, 1999) 🐱‍👤",
  "The Celtics and the Knicks are the only two teams in the NBA to have never relocated!",
  "Dennis Rodman once illegally married himself! 👰",
  "MJ is the GOAT let's be real here 🐐",
  "The bird on the Twitter logo is named after Larry Bird of the Boston Celtics 🐦",
  "Shaquille O’Neal has only made one 3 pointer in his 20-year NBA career!",
  "No player has ever worn the number 69 while playing in the NBA",
  "Manute Bol has more career blocks than points! ⛔",
  "Russell Westbrook > Steph Curry , am I right Poli?",
  "Kobe Bryant’s first NBA contract was co-signed by his parents 👪",
  "The shortest player (Muggsy Bogues) and the tallest player (Manute Bol) in NBA history played once for the same team (Washington Bullets)",
  "Paul Pierce was stabbed 11 times and still played every game in the 2000-01 season 🔪 #CelticsPride 🍀",
  "Canadian-American James Naismith invented basketball in 1891",
  "Coach Frank W. Keaney holds the credit for the concept of 'fast break' in basketball 🏃‍♂️",
  "The longest NBA basketball game lasted for 78 minutes. It was between the Indianapolis Olympians and the Rochester Royals",
  "The highest-scoring NBA game ended with a score of 186-184 between the Detroit Pistons and the Denver Nuggets in 1983",
  "Wilt Chamberlain holds the record for the most points scored in a single basketball game (100 points 🤯)",
  "Ron Artest holds the record for the longest ever NBA suspension (73 regular season games and 13 playoff games) ⌚",
  "The famous NBA logo features the silhouette of Jerry West 🏀",
  "The first brand to market basketball shoes was Converse's authentic Chuck Taylor All-Stars",
  "Michael Jordan’s Air Jordan is the best-selling basketball shoe of all-time 💹",
  "Basketball at the Summer Olympics has been a sport for men consistently since 1936 🏀"
];

let randIndex = Math.floor(Math.random() * nbaFacts.length);
document.querySelector("#randomFacts").innerText = nbaFacts[randIndex];

let randFactGen = setInterval(() => {
  let randIndex = Math.floor(Math.random() * nbaFacts.length);
  document.querySelector("#randomFacts").innerText = nbaFacts[randIndex];
  console.log(nbaFacts[randIndex]);
}, 7000);

// Loading screen
let screenCover = document.querySelector("#screenCover");
let loader = document.querySelector("#loader");
let coverText = document.querySelector("#coverText");
let factsDiv = document.querySelector('#factsDiv');

let resultsTable;


screenCover.style.display = "none";
loader.style.display = "none";
coverText.style.display = "none";
factsDiv.style.display = 'none';

let getResultsButton = document.querySelector("#getResults");

getResultsButton.onclick = getResults;

function getResults() {
  // Show loader
  screenCover.style.display = "inline-block";
  loader.style.display = "inline-block";
  coverText.style.display = "inline-block";
  factsDiv.style.display = 'inline-block';

  // First remove previos results (if any)
  if (resultsTable) resultsTable.remove();

  // Creating results table
  resultsTable = document.createElement("table");
  document.body.appendChild(resultsTable);

  // Creating row for category names
  let newHeaderRow = document.createElement("tr");
  resultsTable.appendChild(newHeaderRow);

  // First Name
  let newHeaderFirstName = document.createElement("th");
  newHeaderFirstName.innerHTML = "First Name";
  newHeaderRow.appendChild(newHeaderFirstName);

  // Last Name
  let newHeaderLastName = document.createElement("th");
  newHeaderLastName.innerHTML = "Last Name";
  newHeaderRow.appendChild(newHeaderLastName);

  // Email
  let newHeaderEmail = document.createElement("th");
  newHeaderEmail.innerHTML = "Email";
  newHeaderRow.appendChild(newHeaderEmail);

  // Date of Birth (DoB)
  let newHeaderDoB = document.createElement("th");
  newHeaderDoB.innerHTML = "Date of Birth";
  newHeaderRow.appendChild(newHeaderDoB);

  // Class
  let newHeaderClass = document.createElement("th");
  newHeaderClass.innerHTML = "Class";
  newHeaderRow.appendChild(newHeaderClass);

  // Team
  let newHeaderTeam = document.createElement("th");
  newHeaderTeam.innerHTML = "Team";
  newHeaderRow.appendChild(newHeaderTeam);

  // Delete Option
  let newHeaderDelete = document.createElement("th");
  newHeaderDelete.innerHTML = "Delete";
  newHeaderRow.appendChild(newHeaderDelete);

  // Handling data from server
  let xhttp = new XMLHttpRequest();

  xhttp.open("GET", "https://89.116.228.40:5454/server/participants/");
  xhttp.send(null);

  xhttp.onload = function () {
    screenCover.style.display = "none";
    loader.style.display = "none";
    coverText.style.display = "none";
    factsDiv.style.display = 'none';

    let results = JSON.parse(this.responseText);
    results = sortResults(results);

    for (let i in results) {
      let newRow = document.createElement("tr");
      resultsTable.appendChild(newRow);

      // First Name
      let newCellFirstName = document.createElement("td");
      newCellFirstName.innerHTML = results[i]["firstName"];
      newRow.appendChild(newCellFirstName);

      // Last Name
      let newCellLastName = document.createElement("td");
      newCellLastName.innerHTML = results[i]["lastName"];
      newRow.appendChild(newCellLastName);

      // Email
      let newCellEmail = document.createElement("td");
      newCellEmail.innerHTML = results[i]["email"];
      newRow.appendChild(newCellEmail);

      // Date of Birth (DoB)
      let newCellDoB = document.createElement("td");
      newCellDoB.innerHTML = results[i]["dob"];
      newRow.appendChild(newCellDoB);

      // Class
      let newCellClass = document.createElement("td");
      newCellClass.innerHTML = results[i]["class"];
      newRow.appendChild(newCellClass);

      // Team
      let newCellTeam = document.createElement("td");
      newCellTeam.innerHTML = results[i]["team"];
      newRow.appendChild(newCellTeam);

      // Delete Cell
      let newCellDelete = document.createElement("td");
      newRow.appendChild(newCellDelete);

      // Delete Button
      let newDeleteButton = document.createElement("button");
      newDeleteButton.innerText = "Delete";
      newDeleteButton.addEventListener("click", () => {
        deleteParticipant({
          id: results[i]["_id"],
          team: results[i]["team"],
          email: results[i]["email"],
        });
      });
      newCellDelete.appendChild(newDeleteButton);
    }
  };
}

function sortResults(results) {
  // Sorting option will take the user choice for sorting the data
  let index = document.querySelector("#sortBySelection").selectedIndex;
  let sortingOption = document
    .querySelector("#sortBySelection")
    [index].getAttribute("value");

  if (sortingOption === "firstName") {
    return results.sort((a, b) => {
      if (a.firstName > b.firstName) return 1;
      else if (a.firstName < b.firstName) return -1;
      else return 0;
    });
  } else if (sortingOption === "lastName") {
    return results.sort((a, b) => {
      if (a.lastName > b.lastName) return 1;
      else if (a.lastName < b.lastName) return -1;
      else return 0;
    });
  } else if (sortingOption === "dob") {
    return results.sort((a, b) => {
      if (a.dob > b.dob) return 1;
      else if (a.dob < b.dob) return -1;
      else return 0;
    });
  } else if (sortingOption === "class") {
    return results.sort((a, b) => {
      if (a.class > b.class) return 1;
      else if (a.class < b.class) return -1;
      else return 0;
    });
  } else if (sortingOption === "team") {
    return results.sort((a, b) => {
      if (a.team > b.team) return 1;
      else if (a.team < b.team) return -1;
      else return 0;
    });
  } else return results;
}

let deleteParticipant = function (userInfo) {
  userInfo = JSON.stringify(userInfo);
  let AdminConfirmation = prompt(
    `Are you sure you want to delete the user with the email: '${(JSON.parse(userInfo)).email}'?\nIf you are sure please type 'CONFIRM' below.`
  );
  if (AdminConfirmation !== "CONFIRM") return;
  console.log(userInfo);

  screenCover.style.display = "inline-block";
  loader.style.display = "inline-block";
  coverText.style.display = "inline-block";
  factsDiv.style.display = 'inline-block';

  let xhttp = new XMLHttpRequest();

  xhttp.open("DELETE", `https://89.116.228.40:5454/server/delete/${userInfo}`);
  xhttp.send(null);

  xhttp.onload = () => {
    screenCover.style.display = "none";
    loader.style.display = "none";
    coverText.style.display = "none";
    factsDiv.style.display = 'none';

    document.write(
      `${xhttp.responseText}<br><button onclick='location.href="https://sportspc.ml/admin";'>Go back</button>`
    );
  };
};
