
document.addEventListener("DOMContentLoaded", function () {
    const gameEstimator = document.getElementById("game-estimator");

    // Function to calculate estimated duration
    function calculateDuration(baseTime, additionalTime, numPlayers) {
        return baseTime + (additionalTime * numPlayers);
    }

    
    const games = [
        { name: "Codename Quest", baseTime: 30, additionalTime: 10 },
        
    ];

   
    gameEstimator.innerHTML = `
        <select id="game-select">
            <option value="">Select a Game</option>
            ${games.map(game => `<option value="${game.name}">${game.name}</option>`).join('')}
        </select>
        <input type="number" id="num-players" placeholder="Number of Players">
        <button onclick="estimateDuration()">Estimate Duration</button>
        <p id="result"></p>
    `;
    window.estimateDuration = function () {
        const gameSelect = document.getElementById("game-select");
        const numPlayersInput = document.getElementById("num-players");
        const resultElement = document.getElementById("result");

        const selectedGame = games.find(game => game.name === gameSelect.value);
        const numPlayers = parseInt(numPlayersInput.value);

        if (selectedGame && !isNaN(numPlayers)) {
            const estimatedDuration = calculateDuration(selectedGame.baseTime, selectedGame.additionalTime, numPlayers);
            resultElement.textContent = `Estimated Duration: ${estimatedDuration} minutes`;
        } else {
            resultElement.textContent = "Please select a game and enter the number of players.";
        }
    };
});
