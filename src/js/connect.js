//----------------------------------------------------------------------------------------------
// Account Change Metamask
window.ethereum.on("accountsChanged", async function (accounts) {
  // Time to reload your interface with accounts[0]!
  account = accounts[0];

  if (Accounts != null) {
    AccountBalance();
    document.getElementById("wallet-address").textContent = account;
  }
});

//----------------------------------------------------------------------------------------------
// Disconnect Metamask
window.ethereum.on("disconnect", function (networkId) {
  // Time to reload your interface with the new networkId
});

document.getElementById("connect").onclick = () => {
  // CONNECT METAMASK
  (async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      window.web3 = new Web3(window.ethereum);
      var accounts = await web3.eth.getAccounts();
      account = accounts[0];
      Accounts = account;
      document.getElementById("wallet-address").textContent = account;
      AccountBalance();
    }
  })();
};
