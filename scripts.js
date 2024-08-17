
document.getElementById('roll-dice').addEventListener('click', function() {
    const diceType = document.getElementById('dice-type').value;
    const result = rollDice(parseInt(diceType));
    document.getElementById('result').textContent = `You rolled: ${result}`;
});

function rollDice(faces) {
    return Math.floor(Math.random() * faces) + 1;
}
