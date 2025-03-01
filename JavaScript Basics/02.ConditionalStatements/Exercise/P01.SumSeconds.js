function solve(firstTime, secondTime, thirdTime) {
    var totalTimeInSeconds = firstTime + secondTime + thirdTime;
    var minutes = parseInt(totalTimeInSeconds / 60);
    var seconds = totalTimeInSeconds - minutes * 60;

    console.log(`${minutes}:${seconds.toString().padStart(2, '0')}`);
}

solve(35, 45, 44);