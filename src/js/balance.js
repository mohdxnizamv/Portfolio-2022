// CHECK BALANCE BNB
async function AccountBalance() {
  try {
    web3.eth.getBalance(account).then((balanceInWei) => {
      balance = web3.utils.fromWei(balanceInWei)
      balance = +balance
      balance = balance.toFixed(4)
      document.getElementById("Balance").textContent = balance
    })
  } catch (error) {
    console.log(error)
  }
}
