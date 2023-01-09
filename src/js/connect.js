//CONNECT AUTOMETAMASK
document.getElementById("connect").onclick = () => {
  ;(async () => {
    if (window.ethereum) {
      await window.ethereum.request({
        method: "eth_requestAccounts",
      })
      window.web3 = new Web3(window.ethereum)
      var accounts = await web3.eth.getAccounts()
      account = accounts[0]
      Accounts = account
      document.getElementById("wallet-address").textContent = account
      document.getElementById("connect").className = "butang"
      document.getElementById("connect").innerHTML = "CONNECTED"

      // getTokenPrice();
    }

    //----------------------------------------------------------------------------------------------
    //ENABLED ALL BUTTON
    function getElementsByIds(ids) {
      var idList = ids.split(" ")
      var results = [],
        btn
      for (var i = 0; i < idList.length; i++) {
        btn = document.getElementById(idList[i])
        if (btn) {
          results.push(btn)
          btn.disabled = false
        }
      }
      return results
    }
    someFunc(getElementsByIds(""))

    function someFunc(ids) {}

    //----------------------------------------------------------------------------------------------
  })()
}
