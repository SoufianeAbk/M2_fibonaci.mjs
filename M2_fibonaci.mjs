import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });


function fibonacciSequence(n) {

    let fibonacci = [0, 1];
    

    while (fibonacci.length < n) {
        
        let nextValue = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        fibonacci.push(nextValue);
    }
    
    return fibonacci;
}

let fibonacci10 = fibonacciSequence(10);
console.log(fibonacci10);

process.exit()