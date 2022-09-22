
const userName = prompt("choississez votre nom");
let guess = parseInt(prompt("Choississez un nombre entre 1 et 100"));
const random = Math.floor(Math.random() * 100) + 1;
let rounds = 1;
console.log(random);

while (guess !== random) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        guess = parseInt(prompt("You need to guess a number between 1 and 100"))
        rounds--;
    }
    else if (guess > random) {
        guess = parseInt(prompt("Essaye encore, c'est plus petit !"))
    } else {
        guess = parseInt(prompt("Essaye encore, c'est plus grand!"))
    }
    rounds++;
    console.log(rounds);
}
alert(`Félicitation ${userName} you Win! ${rounds} rounds!`);