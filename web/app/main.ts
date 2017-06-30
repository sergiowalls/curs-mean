console.log(fizzbuzz());

function fizzbuzz(): String {
    let result: String = "";
    for (let i: number = 0,
             isFizz: boolean = false,
             isBuzz: boolean = false;
         i <= 100;
         ++i, isFizz = i % 3 == 0, isBuzz = i % 5 == 0) {
        result += isFizz ? "Fizz" : "";
        result += isBuzz ? "Buzz" : "";
        result += !isFizz && !isBuzz ? i.toString() : "";
        result += "\n";
    }
    return result;
}