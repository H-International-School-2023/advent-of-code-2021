const fs = require('fs');

const dataString = fs.readFileSync('./data', 'utf-8');

const data = dataString.split('\n').reduce((acc, row) => {
  const splitted = row.split(' ');
  acc.push(splitted[0]);
  acc.push(parseInt(splitted[1]));
  return acc;
}, []);


/*
  data is an array like that:
  ['forward', 5, 'backward', 2, 'up', 1, 'up', 5] and so on
*/
console.log(data);