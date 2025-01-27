# Next.js router.push() Error: Navigating Away Before Promise Resolves

This repository demonstrates a common error in Next.js applications when using `router.push()` within a promise.  If the user navigates away from the page before the promise resolves, it can lead to unexpected behavior or errors. The solution provided ensures that the `router.push()` operation only executes if the component is still mounted.

## Setup

Clone this repository and run `npm install` to install the necessary dependencies.

## Bug

The `bug.js` file contains the problematic code.  Clicking the button initiates a fetch request; upon successful completion, it attempts to use `router.push()` to navigate. If the user navigates away from the page before the fetch completes, an error occurs.

## Solution

The `bugSolution.js` file demonstrates the corrected approach.  It uses the `useEffect` hook to check if the component is still mounted before executing `router.push()`, preventing errors.

## Contributing

Contributions are welcome! Feel free to submit pull requests with improvements or additional examples.