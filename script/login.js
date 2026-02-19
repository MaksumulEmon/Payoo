// console.log("Log in Suessefully");

document.getElementById('login-btn').addEventListener("click" , function(){
    //Get the mobile number
    const numberInput =document.getElementById("input-number");
    const contractNumber = numberInput.value ;
    console.log(contractNumber);


    const inputin =document.getElementById("input-pin");
    const pin = inputin.value ;
    console.log(pin);


    if(contractNumber =="01234567890" && pin =="1234"){
        alert("Log in Sucessfully")
        // window.location.replace("/home.html");
        window.location.assign("./home.html");
    }else{
        alert("Log in Failed");
        return;
    }

})
