const fs = require('fs');

const dataString = fs.readFileSync('./data', 'utf-8');

const data = dataString.split('\n').map((row) => parseInt(row));

let count = 0;
for (let i = 1; i < data.length; i = i + 1) {
  if (data[i] > data[i - 1]) {
    count = count + 1;
  }
}

console.log(count);
