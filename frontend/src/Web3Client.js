import Web3 from 'web3'
import NFTContractBuild from './contracts/AuthenticationContract.json';

let selectedAccount;
let nftContract;
let isInitialized = false;
let nounce
let web3;
export const init = async () => {
    let provider = window.ethereum;

    if (typeof provider !== 'undefined') {
    
    provider
    .request({method: 'eth_requestAccounts' })
    .then((accounts) => {
      selectedAccount = accounts[0];
      console.log(`Selected account is ${selectedAccount}`);
    })
    .catch((err) => {
      console.log(err);
      return;
    });
    window.ethereum.on('accountsChanged', function (accounts){
      selectedAccount = accounts[0];
      console.log(`Selected account changed to ${selectedAccount}`);
    });
  }
  web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();
  nounce = await web3.eth.getTransactionCount(selectedAccount, 'latest')
  console.log(`Network ID is ${networkId}`);
  nftContract = new web3.eth.Contract(NFTContractBuild.abi,'0x37ce56852ee7ae45471eb6e5ad5fe3b26448a9f2'
  );
  isInitialized = true;
};

export const addAdmin= async(address,name) => {
  if (!isInitialized) {
    await init();
}

  return await nftContract.methods.addAdminv2(address,name).send({from: selectedAccount, gas: 3000000,nonce:nounce});
}
export const listAdmin=async()=>{
  if (!isInitialized) {
    await init();
}
return await nftContract.methods.listAdmin().call()
}