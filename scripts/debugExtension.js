const SimpleStorage = artifacts.require('SimpleStorage');
const MultiSignatureWallet = artifacts.require('MultiSignatureWallet');

module.exports = async (callback) => {
  try {
    const ss = await SimpleStorage.deployed();
    const multisig = await MultiSignatureWallet.deployed();
    const accounts = await web3.eth.getAccounts();
    const encoded = '0x60fe47b10000000000000000000000000000000000000000000000000000000000000005';
    const result = await multisig.submitTransaction(ss.address, 0, encoded, {from: accounts[0]})
    console.log(result);

  } catch(err) {
    console.log('doooh', err.message);
  }
  callback();
};