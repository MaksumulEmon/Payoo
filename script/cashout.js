document.getElementById("cashout-btn").addEventListener("click", function () {
    const cashoutNumber = getvalueFromInput("cashout-number");

    if (cashoutNumber.length !== 11) {
        alert("Invaild Number");
        return;
    }
    const cashOutAmount = getvalueFromInput("cashout-amount");

    // const balanceElement = document.getElementById("balance");
    // const balance = balanceElement.innerText;
    // console.log(balance);

    const CurrentBalance =getBalance();
    const newBalance = CurrentBalance - Number(cashOutAmount);
    console.log(newBalance);

    if (newBalance < 0) {
        alert("Invaild Amount");
        return;
    }

    const pin = getvalueFromInput("cashout-pin");
    if (pin == "1234") {
        alert("Cashour Sucessfully");
        setBalance(newBalance);
    //    document.getElementById("balance").innerText = newBalance;
    } else {
        alert("Invaild Pin");
        return;
    }
});














// document.getElementById('cashout-btn').addEventListener("click", function () {

//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length !=11){
//         alert("Invalid Agent Number");
//         return;
//     }


//     const cashOutAmountInput = document.getElementById("cashout-amount");
//     const cashOutAmount = cashOutAmountInput.value;
//     console.log(cashOutAmount);


//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
//     console.log(balance);

//     const newBalance = Number(balance) - Number(cashOutAmount);

//     if (newBalance < 0) {
//         alert("Invaild Amount");
//         return;
//     }


//     const cashOutPinInput = document.getElementById("cashout-pin");
//     const pin = cashOutPinInput.value;
//     if (pin == '1234') {
//         alert("Cashout Succefull")
//         console.log("New Balance", newBalance);
//         balanceElement.innerText =newBalance;
//     } else {
//         alert("Invalid Pin");
//         return;
//     }
// });