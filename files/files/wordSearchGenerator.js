function wordSearchGenerator(size = 10, words) {
    let wordSearch = {
        grid: new Array(size).fill(" ").map(() => new Array(size).fill(" ").join("")),
        wordsPositions: new Map()
    }

    wordSearch = fillWithWords(wordSearch, words)
    wordSearch = fillWithRandom(wordSearch)
    return wordSearch;
}

function fillWithWords(wordSearch, words) {
    for (const word of words) {
        const positions = getPositions(wordSearch.grid, word);
        if (positions.length > 0) {
            const randomIndex = Math.floor(Math.random() * positions.length);
            const selectedPosition = positions[randomIndex];

            for (const { coords, letter } of selectedPosition) {
                const [row, col] = coords;
                wordSearch.grid[row] = wordSearch.grid[row].substring(0, col) + letter + wordSearch.grid[row].substring(col + 1);
            }

            wordSearch.wordsPositions.set(word, selectedPosition);
        }
    }
    return wordSearch;
}

function fillWithRandom(wordSearch) {
    for (let row = 0; row < wordSearch.grid.length; row++) {
        for (let col = 0; col < wordSearch.grid[row].length; col++) {
            if (wordSearch.grid[row][col] === " ") {
                wordSearch.grid[row] = wordSearch.grid[row].substring(0, col) + randomLetter() + wordSearch.grid[row].substring(col + 1);
            }
        }
    }
    return wordSearch;
}

function randomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function getPositions(grid, word) {
    const dirs = [
        { line: 1, column: 0 },
        { line: 0, column: 1 }
    ];
    let possiblePositions = [];

    for (const dir of dirs) {
        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[row].length; col++) {
                const positionsAtuais = [];
                let PalavraCabe = true;

                for (let i = 0; i < word.length; i++) {
                    const newRow = row + i * dir.line;
                    const newCol = col + i * dir.column;

                    if (
                        newRow < 0 || newRow >= grid.length ||
                        newCol < 0 || newCol >= grid[row].length ||
                        grid[newRow][newCol] !== " " &&
                        grid[newRow][newCol] !== word[i]
                    ) {
                        PalavraCabe = false;
                        break;
                    }

                    positionsAtuais.push({ coords: [newRow, newCol], letter: word[i]});
                }

                if (PalavraCabe) {
                    possiblePositions.push(positionsAtuais);
                }
            }
        }
    }
    return possiblePositions;
}
