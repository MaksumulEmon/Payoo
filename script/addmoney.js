document.getElementById("add-money-btn").addEventListener("click", function () {
    //1. Bank Account Create

    const bankAccount = getvalueFromInput("add-money-bank");
    if (bankAccount == "Select A Bank") {
        alert("Please A Bank");
        return;
    }


    // 2. Get Bank Account Number
    const accno = getvalueFromInput("add-money-number");
    if (accno.length !== 11) {
        alert("Invaild Acc No");
        return;
    }

    // 3. get Amount

    const amount = getvalueFromInput("add-money-account");
    const currentBalance =getBalance();
    const newBalance = currentBalance + Number(amount);

    const pin = getvalueFromInput ("add-money-pin");
    if(pin =="1234"){
        alert(` Add Money Success ${bankAccount} at${new Date()}`);
        setBalance(newBalance);

    }else{
        alert("InValid");
        return;
    }

});