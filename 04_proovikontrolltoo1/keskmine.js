function arithmeticAverage(a, b, c) {
    return (a + b + c) / arithmeticAverage.length;
}
console.log(arithmeticAverage(2, 4, 6));
function libisevKeskmine(massiiv) {
    let result = [];
    for (let nr = 0; nr < massiiv.length - 2; nr++) {
        let total = (massiiv[nr] + massiiv[nr + 1] + massiiv[nr + 2]) / 3;
        result.push(total);
    }
    return result;
}
console.log(libisevKeskmine([1, 2, 5, 3, 3]));
class MovingAverage {
    array = [1, 2, 5, 3, 3];
    result = [];
    constructor() {
        this.initialMovingAverage();
    }
    addNumber(number) {
        this.array.push(number);
        this.recalculateMovingAverage();
    }
    initialMovingAverage() {
        for (let nr = 0; nr < this.array.length - 2; nr++) {
            let total = (this.array[nr] + this.array[nr + 1] + this.array[nr + 2]) / 3;
            this.result.push(total);
        }
        return this.result;
    }
    recalculateMovingAverage() {
        let len = this.array.length;
        let total = (this.array[len - 1] + this.array[len - 2] + this.array[len - 3]) / 3;
        this.result.push(total);
        console.log(total);
    }
}
let test = new MovingAverage;
console.log(test.initialMovingAverage());
console.log(test.addNumber(7));
