function solve(array) {
    let evenSum = array
    .filter(x => x % 2 === 0)
    .reduce((acc, number) => acc + number, 0);

    let oddSum = array
    .filter(x => x % 2 !== 0)
    .reduce((acc, number) => acc + number, 0);

    console.log(evenSum - oddSum);
}

solve([2,4,6,8,10]);