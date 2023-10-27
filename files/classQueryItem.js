class QueryItem {
    constructor(x, y, distance, path = []) {
        this.line = x;
        this.column = y;
        this.distance = distance;
        this.path = path;
    }
}

function minDistance(grid, sourceCoords, destCoords) {
    const source = new QueryItem(sourceCoords.x, sourceCoords.y, 0)
    const dest = { line: destCoords.x, column: destCoords.y }

    let visited = Array.from(Array(grid.length), () => Array(grid.length).fill(false))
    visited[source.line][source.column] = true
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (grid[i][j] !== " ") {
                visited[i][j] = true
            }
        }
    }

    const query = []
    query.push(source)
    while (query.length !== 0) {
        const pos = query[0]
        query.shift()

        if (pos.line === dest.line && pos.column === dest.column) return pos.distance

        if (pos.line - 1 >= 0 && !visited[pos.line - 1][pos.column]) {
            query.push(new QueryItem(pos.line - 1, pos.column, pos.distance + 1, [...pos.path, [pos.line, pos.column]]))
            visited[pos.line - 1][pos.column] = true
        }
        if (pos.line + 1 < grid.length && !visited[pos.line + 1][pos.column]) {
            query.push(new QueryItem(pos.line + 1, pos.column, pos.distance + 1, [...pos.path, [pos.line, pos.column]]))
            visited[pos.line + 1][pos.column] = true
        }
        if (pos.column - 1 >= 0 && !visited[pos.line][pos.column - 1]) {
            query.push(new QueryItem(pos.line, pos.column - 1, pos.distance + 1, [...pos.path, [pos.line, pos.column]]))
            visited[pos.line][pos.column - 1] = true
        }
        if (pos.column + 1 < grid.length && !visited[pos.line][pos.column + 1]) {
            query.push(new QueryItem(pos.line, pos.column + 1, pos.distance + 1, [...pos.path, [pos.line, pos.column]]))
            visited[pos.line][pos.column + 1] = true
        }
    }
    return - 1
}