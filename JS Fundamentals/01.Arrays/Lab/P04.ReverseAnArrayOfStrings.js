function solve(strings) {
    for (let i = 0; i < strings.length / 2; i++) {
        let temp = strings[i];
        
        strings[i] = strings[strings.length - i - 1];
        strings[strings.length - i - 1] = temp;        
    }

    console.log(strings.join(` `));
}

solve(['a', 'b', 'c', 'd', 'e']);
solve(['abc', 'def', 'hig', 'klm', 'nop']);