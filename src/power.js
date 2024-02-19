/**
 * Return base raised to the power exponent.
 * @throws Error if exponent is negative
 * @param {integer} base an integer
 * @param {integer} exponent a non-negative integer
 */
function power(base, exponent) {
  // Check if the exponent is negative
  if (exponent < 0) {
    throw new Error("exponent should be >= 0");
  }

  // Any number raised to the power 0 is 1
  if (exponent === 0) {
    return 1;
  }

  // Calculate the power
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  return result;
}


function reverse(text) {
   let reversed = '';
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }
  return reversed;
}

function printFibonacciSequence(n) {
  for (let i = 0; i <= n; i++) {
    console.log(fibonacci(i));
  }
}

function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Example usage:
printFibonacciSequence(7);


function mazeSolver(maze, index = [0, 0], path = '', visited = new Set()) {
  const [x, y] = index;
  // Convert the current position to a string to use as a key in the visited set
  const posKey = `${x},${y}`;

  // Check for base cases: out of bounds, blocked path, or already visited
  if (x < 0 || y < 0 || x >= maze.length || y >= maze[x].length || maze[x][y] === '*' || visited.has(posKey)) {
    return '';
  }

  // Check if the exit is found
  if (maze[x][y] === 'e') {
    return path;
  }

  // Mark the current cell as visited
  visited.add(posKey);

  // Explore all possible directions: right (R), left (L), down (D), and up (U)
  // and concatenate the direction to the path if that path is viable
  let down = mazeSolver(maze, [x + 1, y], path + 'D', visited);
  if (down) return down;

  let right = mazeSolver(maze, [x, y + 1], path + 'R', visited);
  if (right) return right;

  let up = mazeSolver(maze, [x - 1, y], path + 'U', visited);
  if (up) return up;

  let left = mazeSolver(maze, [x, y - 1], path + 'L', visited);
  if (left) return left;

  // Backtrack if no path found
  return '';
}




module.exports = power;
