const fs = require('fs');
const input = fs.readFileSync('2525_input.txt').toString().trim().split('\n');

const currentTime = input[0].split(' ');
const currentHour = Number(currentTime[0]);
const currentMinute = Number(currentTime[1]);
const useTime = Number(input[1]);

const finishHour = currentHour + Math.floor((currentMinute + useTime) / 60);
const finishMinute = (currentMinute + useTime) % 60;
console.log(`${finishHour >= 24 ? finishHour - 24 : finishHour} ${finishMinute}`);
