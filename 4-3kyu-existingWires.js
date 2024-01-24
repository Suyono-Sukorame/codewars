function wire_DHD_SG1(existingWires) {
    const grid = existingWires.split('\n').map(row => row.split(''));

    const findNode = (char) => {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === char) {
                    return { x: j, y: i };
                }
            }
        }
        return null;
    };

    const startNode = findNode('S');
    const goalNode = findNode('G');

    const isValidMove = (x, y) => {
        return x >= 0 && x < grid[0].length && y >= 0 && y < grid.length && grid[y][x] !== 'X';
    };

    const calculateDistance = (x1, y1, x2, y2) => {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    };

    const getNextMoves = (x, y) => {
        const moves = [];
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                if (dx !== 0 || dy !== 0) {
                    const newX = x + dx;
                    const newY = y + dy;
                    if (isValidMove(newX, newY)) {
                        moves.push({ x: newX, y: newY });
                    }
                }
            }
        }
        return moves;
    };

    const findShortestPath = (start, goal) => {
        const visited = new Set();
        const queue = [{ path: [start], cost: 0 }];

        while (queue.length > 0) {
            queue.sort((a, b) => a.cost - b.cost);
            const current = queue.shift();
            const currentNode = current.path[current.path.length - 1];

            if (currentNode.x === goal.x && currentNode.y === goal.y) {
                return current.path;
            }

            if (!visited.has(`${currentNode.x}-${currentNode.y}`)) {
                visited.add(`${currentNode.x}-${currentNode.y}`);

                const moves = getNextMoves(currentNode.x, currentNode.y);
                for (const move of moves) {
                    const newPath = [...current.path, move];
                    const newCost = current.cost + calculateDistance(currentNode.x, currentNode.y, move.x, move.y);
                    queue.push({ path: newPath, cost: newCost });
                }
            }
        }

        return null;
    };

    const shortestPath = findShortestPath(startNode, goalNode);

    if (shortestPath) {
        for (const { x, y } of shortestPath) {
            if (grid[y][x] !== 'S' && grid[y][x] !== 'G') {
                grid[y][x] = 'P';
            }
        }

        return grid.map(row => row.join('')).join('\n');
    } else {
        return 'Oh for crying out loud...';
    }
}
