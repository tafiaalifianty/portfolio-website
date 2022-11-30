function submit() {
    let details = document.getElementById("details").value;
    let amount = document.getElementById("amount").value;
    amount = parseInt(amount, 10);

    let listHistory = document.getElementById("list-history");
    let contents = listHistory.getElementsByClassName("list-history-item");

    const result = [];

    for (let i = 0; i < contents.length; i++) {
        let amount = contents[i].getElementsByClassName("history-amount").item(0).textContent;
        if(amount.substring(0,1) !== "+" || amount.substring(0,1) !== ""){
            result.push(`<div class="list-history-item"><button class="delete-btn" onclick="deleteAmount(this)" class="delete-history">X</button><div class="history-detail"><p>${contents[i].getElementsByClassName("history-detail").item(0).textContent}</p></div><div class="history-amount"><p>${contents[i].getElementsByClassName("history-amount").item(0).textContent}</p></div></div></br>`);
            continue;
        }
        result.push(`<div class="list-history-item"><button class = "delete-btn" onclick="deleteAmount(this)" class="delete-history">X</button><div class="history-detail"><p>${contents[i].getElementsByClassName("history-detail").item(0).textContent}</p></div><div class="history-amount"><p>${contents[i].getElementsByClassName("history-amount").item(0).textContent}</p></div></div></br>`);
    }
    if (amount > 0) {
        result.push(`<div class="list-history-item"><button class = "delete-btn" onclick="deleteAmount(this)" class="delete-history">X</button><div class="history-detail"><p>${details}</p></div><div class="history-amount"><p>+${amount}</p></div></div></br>`);
        updateIncomeExpense(amount);
        listHistory.innerHTML = result.join("");
        calculateTotalBalance();
        return
    }
    result.push(`<div class="list-history-item"><button class = "delete-btn" onclick="deleteAmount(this)" class="delete-history">X</button><div class="history-detail"><p>${details}</p></div><div class="history-amount"><p>${amount}</p></div></div></br>`);
    updateIncomeExpense(amount);
    listHistory.innerHTML = result.join("");
    
    calculateTotalBalance();
}

function updateIncomeExpense(amount) {
    if (amount > 0){
        let currentIncome = document.getElementById("income-nominal").innerText.replace('+Rp ','');
        currentIncome = parseInt(currentIncome, 10);
        currentIncome = currentIncome + amount;
        document.getElementById("income-nominal").innerText = "+Rp " + currentIncome;
        return
    }
    let currentExpense = document.getElementById("expense-nominal").innerText.replace('Rp ','');
    currentExpense = parseInt(currentExpense, 10);
    currentExpense = currentExpense + amount;
    document.getElementById("expense-nominal").innerText = "Rp " + currentExpense;
}

function calculateTotalBalance() {
    let currentIncome = document.getElementById("income-nominal").innerText.replace('+Rp ','');
    currentIncome = parseInt(currentIncome, 10);
    let currentExpense = document.getElementById("expense-nominal").innerText.replace('Rp ','');
    currentExpense = parseInt(currentExpense, 10);
    const total = currentIncome + currentExpense;
    document.getElementById("total-balance").innerText = "Rp " + total;
}

function calculateIncome() {
    let income = document.getElementsByClassName("history-amount");
    console.log(income);
    let incomeTotal = 0;
    let expenseTotal = 0;
    for (let i = 0; i < income.length; i++) {
        let temp = income.item(i).textContent;
        if(temp.substring(0,1) !== "+"){
            console.log(temp.substring(1))
            expenseTotal += parseInt(temp.substring(1), 10);
            document.getElementById("expense-nominal").innerText = "Rp -" + expenseTotal;
            continue
        }
        console.log(temp.substring(1))
        incomeTotal += parseInt(temp.substring(1), 10);
        document.getElementById("income-nominal").innerText = "+Rp " + incomeTotal;
    }
}

function deleteAmount(item) {
    item.parentNode.parentNode.removeChild(item.parentNode);
    calculateIncome()
    calculateTotalBalance()
}