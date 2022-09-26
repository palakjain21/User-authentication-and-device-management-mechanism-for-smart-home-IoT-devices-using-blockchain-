import Web3 from "web3";
import NFTContractBuild from "./contracts/AuthenticationContract.json";

let selectedAccount;
let nftContract;
let isInitialized = false;
let nounce;
let web3;
export const init = async () => {
  let provider = window.ethereum;

  if (typeof provider !== "undefined") {
    provider
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        selectedAccount = accounts[0];
        console.log(`Selected account is ${selectedAccount}`);
      })
      .catch((err) => {
        console.log(err);
        return;
      });
    window.ethereum.on("accountsChanged", function (accounts) {
      selectedAccount = accounts[0];
      console.log(`Selected account changed to ${selectedAccount}`);
    });
  }
  web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();
  nounce = await web3.eth.getTransactionCount(selectedAccount, "latest");
  console.log(`Network ID is ${networkId}`);
  nftContract = new web3.eth.Contract(
    NFTContractBuild.abi,
    "0x07853e30cdFF5b8343A4fC210752B78B17f2d834"
  );
  isInitialized = true;
};

export const addAdmin = async (address, name) => {
  if (!isInitialized) {
    await init();
  }

  return await nftContract.methods
    .addAdminv2(address, name)
    .send({ from: selectedAccount, gas: 3000000, nonce: nounce });
};
export const listAdmin = async () => {
  if (!isInitialized) {
    await init();
  }
  return await nftContract.methods.listAdmin().call();
};

export const addDevices = async (fog_add, dev_add, name) => {
  if (!isInitialized) {
    await init();
  }
  return await nftContract.methods
    .addDeviceFogMapping(fog_add, dev_add, name)
    .send({ from: selectedAccount, gas: 3000000, nonce: nounce });
};

export const listDevices = async (fog_add) => {
  if (!isInitialized) {
    await init();
  }
  return await nftContract.methods.listFogDevices(fog_add).call();
};

export const addUser = async (user_add, device_add, fog_add, user_name) => {
  if (!isInitialized) {
    await init();
  }

  return await nftContract.methods
    .addUserDeviceMapping(user_add, device_add, fog_add, user_name)
    .send({ from: selectedAccount, gas: 3000000, nonce: nounce });
};

export const deleteAdmin = async (address) => {
  if (!isInitialized) {
    await init();
  }
  return await nftContract.methods
    .delAdmin(address)
    .send({ from: selectedAccount, gas: 3000000, nonce: nounce });
};

export const deleteUser = async (user_add) => {
  if (!isInitialized) {
    await init();
  }
  return await nftContract.methods
    .delUser(user_add)
    .send({ from: selectedAccount, gas: 3000000, nonce: nounce });
};

export const deleteDev = async (fog_add) => {
  if (!isInitialized) {
    await init();
  }
  return await nftContract.methods
    .delDev(fog_add)
    .send({ from: selectedAccount, gas: 3000000, nonce: nounce });
};
