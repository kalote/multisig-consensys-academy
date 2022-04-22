# Consensys Academy - Multisig wallet

Implementation of the multisig wallet used in the Consensys academy training

## Install

Make sure to either change the `truffle-config.js` network part with the correct port, or use GANACHE on port 7545

```
git clone
npm i
truffle compile 
truffle migrate --network development --reset
```

## VSCode Truffle Debug

This code can be used to generate a known issue in VS Code Truffle extension. Here are the steps to reproduce:

```
truffle compile
truffle migrate --network development
truffle console --network development
> exec scripts/debugExtension.js // doesn't work for now .... have to copy paste each command in the console
```

- Install VS Code Truffle extension
- Setup "Truffle - Networks" on the left bottom panel by adding a new Ganache network / running on (default) localhost port 7545
- Command + shift + P > Truffle: Debug transaction
- Select first transaction in the list
- It will load the VS Code debugger and set you up on Migrations.sol
- Step out / in / next will result in an error