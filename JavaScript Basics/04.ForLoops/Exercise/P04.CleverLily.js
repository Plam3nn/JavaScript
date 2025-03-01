function solve(age, laundryPrice, toyUnitPrice) {
    let toysCount = 0;
    let money = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 !== 0) {
            toysCount++;
            continue;
        }

        money += i * 5 - 1;
    }

    money += toysCount * toyUnitPrice;
    money -= laundryPrice;

    if (money >= 0) {
        console.log(`Yes! ${money}`);
        return;
    }

    console.log(`No! ${money}`);
}

solve(10, 170.00, 6);