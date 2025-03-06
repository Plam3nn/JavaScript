function solve(array) {
    while (true) {
        if (array.length === 1) {
            console.log(array[0]);            
            return;
        }

        for (let i = 0; i < array.length - 1; i++) {
            array[i] += array[i + 1];
        }

        array.pop();
    }
}

solve([2, 10, 3]);
solve([5, 0, 4, 1, 2]);