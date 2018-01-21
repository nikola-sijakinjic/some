//const express = require('express')
//const app = express()

const  moment = require('moment-timezone');

moment.tz('Europe/London');

//const m = moment([2017,10,10]).toISOString();
// const m = moment([2017,10,10]).tz('Europe/Belgrade').format();
// const m = moment([2017,10,10]).tz('Europe/Belgrade').format();
moment.tz('utc');
const m = moment('2017-10-10').format();


console.log(m);

//d = (new Date(2017,10,10)).getUTCDate();
var d = new Date('2017-10-10');


console.log(d);