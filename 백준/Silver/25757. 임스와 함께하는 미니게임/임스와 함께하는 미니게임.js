const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, G] = input[0].split(' ');
const players = input.slice(1).map((player) => player.trim());

const uniquePlayers = [...new Set(players)];

G = G.trim();

if (G === 'Y') {
	console.log(uniquePlayers.length);
} else if (G === 'F') {
	console.log(Math.floor(uniquePlayers.length / 2));
} else if (G === 'O') {
	console.log(Math.floor(uniquePlayers.length / 3));
}
