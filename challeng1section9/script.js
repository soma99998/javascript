const game = {
  team1: "bayren munich",
  team2: "borrussia ",
  players: [
    [
      "neuer",
      "pavard",
      "mart",
      "alba",
      "davies",
      "kimmich",
      "goretzka",
      "coman",
      "muller",
      "gnarby",
      "lewandowski",
    ],
    [
      "burki",
      "schulz",
      "hummels",
      "akanij",
      "hakimi",
      "weigl",
      "witsel",
      "hazard",
      "brandel",
      "sancho",
      "gotze",
    ],
  ],
  score: "4:00",
  scored: ["lewandowski", "gnarby", "lewandowski", "hummels"],
  date: "nov 9th",
  odd: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const [players1, players2] = game.players;
//console.log(players1, players2);
const [gk, ...fieldPlayer] = game.players[0];
//console.log(gk, fieldPlayer);
const allPlayers = [...players1, ...players2];
//console.log(allPlayers);
const playersFinal = [...players1, "thigo", "coutinh", "per"];
console.log(playersFinal);
const { team1, x: draw, team2 } = game.odd;
console.log(team1, team2, draw);
function printGoals(...playersName) {
  console.log(...playersName);
}
