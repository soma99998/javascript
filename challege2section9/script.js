const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//Loop over the game.scored array and print each player name to the console,
//along with the goal number (Example: "Goal 1: Lewandowski")
let x = 0;
for (const score of game.scored) {
  x++;
  console.log(`Goal ${x} : ${score}`);
}
//Use a loop to calculate the average odd and log it to the console (We already
//studied how to calculate averages, you can go check if you don't remember)
const averageOdds = Object.values(game.odds);
console.log(averageOdds);
let sum = 0;
for (const average of averageOdds) {
  //let sum = 0;
  sum += average / 3;
}
console.log(sum);
/*Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names*/

const enteries = Object.entries(game.odds);
console.log(enteries);
for (const c of enteries) {
  console.log(`Odd of victory ${game.team1} : ${values}\n odd of draw :${values}\n 
        odd of victory ${game.team2}:${values}`);
}
