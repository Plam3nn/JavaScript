function solve(input) {
    let firstNumber = Number(input.shift());
    let secondNumber = Number(input.pop());
    
    console.log(firstNumber + secondNumber);    
}

solve([`10`, `20`, `40`]);