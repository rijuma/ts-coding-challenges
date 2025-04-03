[![en](https://img.shields.io/badge/lang-en-green.svg)](./README.md)
[![es](https://img.shields.io/badge/lang-es-blue.svg)](./README.es.md)

# Typescript Coding Challenges

This repository is a collection of [Typescript](https://www.typescriptlang.org) coding challenges I bumped into, which I've found interesting to solve. Some of these might be "snack" challenges and others might need a bit more thought.

Please do check the amazing [interview-ready](https://github.com/silver-dev-org/interview-ready) repo from [Silver.dev](https://silver.dev) which inspired me to start this project.

Right now there might not be a quite lot of exercises, but I think it will grow in the future.

## The idea

There are two main folders on this repo, `challenges` and `solutions`, and as you might have figured out, the challenges have the templates for you to solve them, and the solutions have emm.. a solution I came up with.

The intention for this is just to practice and to try to find an ingenious and clean solution. I have no intention of making my solutions to be comparable with LeetCode scores. If you want that type of challenge, feel free to go to [LeetCode](https://leetcode.com) instead.

In order to use this repo, I'd suggest you to fork this repo, then clone it and set it up, for example with `npm` by running:

```bash
npm install
```

then you can run any individual test by:

```bash
npm run test -- [pattern]
```

where `pattern` is an optional parameter to use as a partial match on the challenge file you want to test, for example:

```bash
npm run test -- closest-pair
```

will run the tests for the challenge located at:

```
challenges/recursion/closest-pair.ts
```

There's also coverage tests available with:

```bash
npm run test:coverage -- [pattern]
```

## Solved challenges

I'd recommend to try solving these challenges by yourself, without AI or any assistance except for [MDN's Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and [Typescript](https://www.typescriptlang.org/docs) documentation. You can always look for solutions afterwards, or looking into the solutions provided in this repo.

Similar to the test scripts above, there's a set of tools for testing the included solutions, like:

```bash
npm run test:solutions -- [pattern]
```

and

```bash
npm run test:solutions:coverage -- [pattern]
```

## Have fun

I hope you find this useful and have fun solving the different challenges. Please reach me at [marcos@rigoli.dev](mailto:marcos@rigoli.dev) or create a PR with suggestions, but if you do, please take the time to present it with the proper tests, both in the `challenges` and `solutions` with a clean prompt.

Cheers!
