function fizzbuzz() {
    let result = "";
    for (let i = 0, isFizz = false, isBuzz = false; i <= 100; ++i, isFizz = i%3 === 0, isBuzz = i%5 === 0) {
        if (isFizz) result += "Fizz";
        if (isBuzz) result += "Buzz";
        else if (!isFizz) result += i;
        result += "\n";
    }
    return result;
}

function sum(...params) {
    if (params.length === 2) return params[0] + params[1];
    else return a => params[0] + a;
}

console.log(sum(10, 10));
console.log(sum(10)(10));

