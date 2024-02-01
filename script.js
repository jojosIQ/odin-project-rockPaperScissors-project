function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3); // Generates a random integer between 0 and 2
    return choices[randomNumber];
}

