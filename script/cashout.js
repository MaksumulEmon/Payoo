document.getElementById('cashout-btn').addEventListener("click", function () {

    const cashoutNumberInput = document.getElementById("cashout-number");
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);
    if(cashoutNumber.length !=11){
        alert("Invalid Agent Number");
        return;
    }


    const cashOutAmountInput = document.getElementById("cashout-amount");
    const cashOutAmount = cashOutAmountInput.value;
    console.log(cashOutAmount);


    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);

    const newBalance = Number(balance) - Number(cashOutAmount);

    if (newBalance < 0) {
        alert("Invaild Amount");
        return;
    }


    const cashOutPinInput = document.getElementById("cashout-pin");
    const pin = cashOutPinInput.value;
    if (pin == '1234') {
        alert("Cashout Succefull")
        console.log("New Balance", newBalance);
        balanceElement.innerText =newBalance;
    } else {
        alert("Invalid Pin");
        return;
    }
});