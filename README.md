# hardhat-thor-plugin-example

Example of using [`hardhat-thor-plugin`](https://github.com/zzGHzz/hardhat-thor-plugin).

## Installation

Download the repo and run

```bash
npm install
```

Download and compile the source code of the [Thor node](https://github.com/vechain/thor) and run a solo node locally

```bash
thor-node-dir/bin/thor solo --on-demand
```

## Usage

To run the created task:

```bash
npx hardhat accounts
```

To run the test:

```bash
npx hardhat test
```

To run the script:

```bash
npx hardhat run script/deploy.ts
```
