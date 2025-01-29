# React useEffect Cleanup Function Bug

This repository demonstrates a common bug in React's `useEffect` hook:  conditional cleanup logic.  The provided `bug.js` file contains an example where the cleanup function only runs if the `count` state is greater than 10. This is problematic because it might not always run, leading to potential memory leaks or unintended side effects.

The `bugSolution.js` file offers a corrected version, ensuring the cleanup logic always executes regardless of the state.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install` to install dependencies (if any).
4. Execute `node bug.js` to see the original problematic code's output.
5. Execute `node bugSolution.js` to see the corrected behavior.