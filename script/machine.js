// machine id -> input Valuebh
console.log("Machine Added");
function getvalueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}
// Machine -> Balance 
function getBalance() {
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log("Current Balance", Number(balance));
    return Number(balance);
}

// machine value -> set Balance
function setBalance(value){
    const balanceElement =document.getElementById("balance");
    balanceElement.innerText =value;
}

// Macj=hine Id > hide all> Show All

function showOnly(id){
   
    const addmoney =document.getElementById("add-money");
    const cashout =document.getElementById("cashout");
    //  console.log(`add money - ${addmoney} , cashout - ${cashout}`)
    // Alll hide
    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");

    // id Wala Element  ta ke tmi show Koro 
     const selected = document.getElementById(id);
     selected.classList.remove("hidden");
}

