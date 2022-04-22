module.exports = async (callback) => {
  // TODO: implement your actions
  let ss = await SimpleStorage.deployed();
  let multisig = await MultiSignatureWallet.deployed();
  let accounts = await web3.eth.getAccounts();
  let encoded = '0x60fe47b10000000000000000000000000000000000000000000000000000000000000005';
  multisig.submitTransaction(ss.address, 0, encoded, {from: accounts[0]})

  // invoke callback
  callback();
};