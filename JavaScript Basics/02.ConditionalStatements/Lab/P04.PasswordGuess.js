function solve(inputPassword) {
    const correctPassword = `s3cr3t!P@ssw0rd`;

    if (inputPassword == correctPassword) {
        console.log(`Welcome`);
    } else {
        console.log(`Wrong password!`);
    }
}

solve('lksf');
solve(`s3cr3t!P@ssw0rd`);