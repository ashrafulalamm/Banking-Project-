function getInput(inputId){
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputAmmount = parseFloat(inputText);   
    // clear the field
    inputField.value = ''; 
    return inputAmmount;
}

function updateTotal(updateId, newDepositAmmount) {
    const depositTotal = document.getElementById(updateId);
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmmount + newDepositAmmount;
    depositTotal.innerText = newDepositTotal;
}
// validation???
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balace-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmmount = parseFloat(balanceTotalText);
    return balanceTotalAmmount;
}


function upadateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balace-total');
   const previousBalanceAmmount = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceAmmount + amount;
    } else {
        balanceTotal.innerText = previousBalanceAmmount - amount;
    } 

}
                    // deposit section
document.getElementById('deposit-button').addEventListener('click', function(){
    const newDepositAmmount = getInput('deposit-input');
    if(newDepositAmmount > 0){
        updateTotal('deposit-total', newDepositAmmount);
        upadateBalance(newDepositAmmount, true);
    }else{
        alert('Please input a valid number')
    }
})

                            //  withdraw Section 
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInputAmmount = getInput('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawInputAmmount > 0 && withdrawInputAmmount <= currentBalance){
        updateTotal('withdraw-total', withdrawInputAmmount);                  
        upadateBalance(withdrawInputAmmount, false)                         
    }
        // error
    if(withdrawInputAmmount > currentBalance){
        const error = document.getElementById('error');
        error.innerText = 'Not Enough Balance'
        alert("You Have Enough Balance")
    }


})



 

















    //    class24 code
// document.getElementById('deposit-button').addEventListener('click', function(){
//     const depositInput = document.getElementById('deposit-input');
//     const depositInputText = depositInput.value;
//     const depositInputAmmount = parseFloat(depositInputText);


//     const depositTotal = document.getElementById('deposit-total');
//     const depositTotalText = depositTotal.innerText;
//     const depositTotalAmmount = parseFloat(depositTotalText);

//     const newDeposit = depositTotalAmmount +  depositInputAmmount;


//     depositTotal.innerText = newDeposit;

//                          // balance update
//     const balanceTotal = document.getElementById('balace-total');
//     const balanceTotalText = balanceTotal.innerText;
//     const balanceTotalAmmount = parseFloat(balanceTotalText);

//     const newBalance = balanceTotalAmmount + depositInputAmmount;
//     balanceTotal.innerText = newBalance;

  
//     depositInput.value = '';
// })



//                             //  withdraw Section 
// document.getElementById('withdrw-button').addEventListener('click', function() {
//     const withdrawInput = document.getElementById('withdraw-input');
//     const withdrawInputText = withdrawInput.value;
//     const withdrawInputAmmount = parseFloat(withdrawInputText);
// //    console.log(withdrawInputAmmount);

//     const withdrawTotal = document.getElementById('withdraw-total');
//     const withdrawTotalText = withdrawTotal.innerText;
//     const witdrawTotalAmmount = parseFloat(withdrawTotalText);


//     const newWithdrawAmmount = witdrawTotalAmmount + withdrawInputAmmount;
//     withdrawTotal.innerText = newWithdrawAmmount;


    
//                          // balance update
//     const balanceTotal = document.getElementById('balace-total');
//     const balanceTotalText = balanceTotal.innerText;
//     const balanceTotalAmmount = parseFloat(balanceTotalText);


//     const newBalance = balanceTotalAmmount - withdrawInputAmmount;

//     balanceTotal.innerText = newBalance;
//     withdrawInput.value = '';
// })