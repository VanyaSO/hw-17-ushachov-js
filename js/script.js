'use strict'

let string = 'hello';
let number = 9;
let symbol = '*';
let boolean;
let answer;

function padString(str, num, sym, bool = true){
    if(typeof str !== 'string' || str === ''){
        return console.log('You enter did not string');
    }

    if(typeof num !== 'number' || num === ''){
        return console.log('You enter did not number');
    }

    if(typeof sym !== 'string' && sym.length === 1){
        return 'You enter did not symbol';
    }

    if(num < str.length){
        answer = str.substr(0, num);
        return console.log(answer);
    }else{

        let numOfAddCharacters = num - str.length;

        symbol = symbol.repeat(numOfAddCharacters);

        if (boolean === true){
            answer = `${string}${symbol}`;
            return console.log(answer);

        }else if(boolean === false) {
            answer = `${symbol}${string}`;
            return console.log(answer);

        }

    }

}

padString(string, number, symbol, boolean);
