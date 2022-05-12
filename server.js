const fs = require('fs');
const { resolve } = require('path');

fs.readFile = () => {

}


const myPromise = new Promise(resolve => 
    resolve('hello world'))

myPromise.then(result => {
    console.log(result);
})
