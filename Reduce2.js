let nums = [1, 2, 3, 4, 5, 6];

let sum = nums.reduce((acc, num) => {
    if (num % 2 === 0) {
        return acc + num;
    } else {
        return acc;
    }
}, 0);

console.log(sum);