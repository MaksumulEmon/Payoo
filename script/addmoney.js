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
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);

    const pin = getvalueFromInput("add-money-pin");
    if (pin == "1234") {
        alert(` Add Money Success ${bankAccount} at${new Date()}`);
        setBalance(newBalance);


        // 1.history Container  dore niya asbo

        const history = document.getElementById('history-container');

        // 2.new div create Korbo
        const newHistory = document.createElement("div");

        // 3.new div innerHtml Add korbo

        newHistory.innerHTML = `
        <div class="transation-card p-5 bg-base-100">
        Add Money Success  from 
        ${bankAccount} ,acc-no ${accno} 
        at ${new Date()}
        </div>
        `;

        // history container a newDiv addd korbo Append
        history.append(newHistory);

    } else {
        alert("InValid");
        return;
    }

});