console.log("Я загадал число от 1 до 10. Попробуй его угадать!");

let secretNumber = Math.floor(Math.random() * 10) + 1;

// console.log(secretNumber)
let attempts = 3

while (attempts > 0) {
    let userNumber = Number(prompt('Введите число: '));

    if (userNumber < secretNumber) {
        console.log("Секретное число больше");
        attempts = attempts - 1
        console.log("У вас осталось: ", attempts, "попыток")
    } else if (userNumber === secretNumber) {
        console.log("Вы угадали!")
        break;
    }
    else {
        console.log("Секретное число меньше")
        attempts = attempts - 1
        console.log("У вас осталось: ", attempts, "попыток")
}
}