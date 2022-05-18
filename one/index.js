const fs = require('fs');

const dataString = fs.readFileSync('./data', 'utf-8');

const data = dataString.split('\n').map((row) => parseInt(row));
