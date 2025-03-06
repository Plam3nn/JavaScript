function solve(input) {
    // Solution 1
    
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        let number = Number(input[i]);

        if (number % 2 === 0) {
            sum += number;        
        }
    }

    console.log(sum);

    // Solution 2
    
    // let sum = input
    // .map(Number)
    // .filter(x => x % 2 === 0)
    // .reduce((acc, x) => acc + x, 0);

    // console.log(sum);
}

solve(['1','2','3','4','5','6']);