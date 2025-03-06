function solve(firstArray, secondArray) {
    firstArray = firstArray.map(Number);
    secondArray = secondArray.map(Number);
    
    for (let i = 0; i < Math.max(firstArray.length, secondArray.length); i++) {
        if (firstArray[i] !== secondArray[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;        
        }
    }

    let sum = firstArray.reduce((acc, number) => acc + number, 0);

    console.log(`Arrays are identical. Sum: ${sum}`);
}

solve(['10','20','30'],  ['10','20','30']);
solve(['1','2','3','4','5'],  ['1','2','4','4','5']);
solve(['1'], ['10']);