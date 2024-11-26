document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('[data-cell]');
    const winningMessage = document.getElementById('winningMessage');
    const winningMessageText = document.querySelector('[data-winning-message-text]');
    const restartButton = document.getElementById('restartButton');
    const currentPlayerSpan = document.getElementById('currentPlayer');
    const scoreX = document.getElementById('scoreX');
    const scoreO = document.getElementById('scoreO');
    let currentPlayer = 'X';
    let gameActive = true;
    let scores = {
        X: 0,
        O: 0
    };

    // Winning combinations
    const WINNING_COMBINATIONS = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    // Add click handlers to cells
    cells.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true });
    });

    // Restart button click handler
    restartButton.addEventListener('click', startGame);

    function handleClick(e) {
        if (!gameActive) return;
        
        const cell = e.target;
        placeMark(cell, currentPlayer);

        // Check for win or draw
        if (checkWin(currentPlayer)) {
            endGame(false);
        } else if (isDraw()) {
            endGame(true);
        } else {
            swapTurns();
        }
    }

    function placeMark(cell, currentClass) {
        cell.setAttribute('data-value', currentClass);
    }

    function swapTurns() {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        currentPlayerSpan.textContent = currentPlayer;
    }

    function checkWin(currentClass) {
        return WINNING_COMBINATIONS.some(combination => {
            return combination.every(index => {
                return cells[index].getAttribute('data-value') === currentClass;
            });
        });
    }

    function isDraw() {
        return [...cells].every(cell => {
            return cell.getAttribute('data-value') === 'X' || 
                   cell.getAttribute('data-value') === 'O';
        });
    }

    function endGame(draw) {
        gameActive = false;
        if (draw) {
            winningMessageText.textContent = "Draw!";
        } else {
            winningMessageText.textContent = `${currentPlayer} Wins!`;
            // Update score
            scores[currentPlayer]++;
            updateScoreDisplay();
        }
        winningMessage.classList.add('show');
    }

    function updateScoreDisplay() {
        scoreX.textContent = scores.X;
        scoreO.textContent = scores.O;
    }

    function startGame() {
        gameActive = true;
        currentPlayer = 'X';
        currentPlayerSpan.textContent = currentPlayer;
        cells.forEach(cell => {
            cell.removeAttribute('data-value');
            cell.removeEventListener('click', handleClick);
            cell.addEventListener('click', handleClick, { once: true });
        });
        winningMessage.classList.remove('show');
    }
});
