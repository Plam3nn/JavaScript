function solve(n, numbers) {
    // Solution 1
    
    // let result = numbers.slice(0, n).reverse().join(` `);    
    // console.log(result);

    // Solution 2

    let arr = [];
    let result = ``;

    for (let i = 0; i < n; i++) {
        let currentNumber = numbers[n - i - 1]; 
                
        arr[i] = currentNumber;
        result += currentNumber;

        // add space after each number except the last one
        // can use trim or trimEnd too 
        if (i < n - 1) {
            result += ` `;
        }
    }

    console.log(result);
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);