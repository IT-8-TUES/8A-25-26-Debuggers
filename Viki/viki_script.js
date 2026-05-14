let cards = JSON.parse(localStorage.getItem("cards")) || [];
// let transactions = [];
// let transactionCurrency = "";
// let transactionIndex = -1;
let cardIndex = -1;

const noCards = document.getElementById("noCards");
const cardsContainer = document.getElementById("cardsContainer");

// const transactionsContainer = document.getElementById("transactionsContainer");

// const noTransactions = document.getElementById("noTransactions");

function showCards() {
    cardsContainer.innerHTML = "";
    if (cards.length === 0) {
        noCards.style.display = "block";
    } else {
        noCards.style.display = "none";
    }
    cards.forEach((card, card_index) => {
        let div_card = document.createElement("div");

        div_card.classList.add("card");

        div_card.innerHTML = `
            <button class="card-button" onclick="showCardDetails(${card_index})">${card.name}</button>
        `;
        cardsContainer.appendChild(div_card);
    });
}

// function showTransactions() {
//     transactionsContainer.innerHTML = "";
//     if (transactions.length === 0) {
//         noTransactions.style.display = "block";
//     } else {
//         noTransactions.style.display = "none";
//     }
//     transactions.forEach((transaction, transaction_index) => {
//         let div_transaction = document.createElement("div");
//         div_transaction.classList.add("transaction");

//         div_transaction.innerHTML = `
//             <button class = "transaction-button" onclick="showTransactionDetails(${transaction_index})">${transaction.name} - ${transaction.amount} ${transaction.currency}</button>
//         `;
//         transactionsContainer.appendChild(div_transaction);
//     });

// }

function addCard() {
    let cardName = document.getElementById("cardName").value;
    let cardNumber = document.getElementById("cardNumber").value;

    if (cardName === "" || cardNumber === "") {
        alert("Please fill all fields");
        return;
    }

    //generateBarcode(cardNumber);

    alert("Card added!");

    cards.push({
    name: cardName,
    number: cardNumber
    });

    localStorage.setItem("cards", JSON.stringify(cards));

    //alert("Card added!");

    //showCards();

    let cardNameInput = document.getElementById("cardName");
    let cardNumberInput = document.getElementById("cardNumber");
    cardNameInput.value = "";
    cardNumberInput.value = "";

    //setTimeout(() => {
    //;
    //goHome();
//}, 2000);

}

const add_card_btn = document.querySelector(".adding-card-btn");
add_card_btn.addEventListener("click", function(event) {
    event.preventDefault();
    addCard();
    //addCard.target.reset();
    showCards();
})

function generateBarcode(cardNumber) {
    const svg = document.getElementById("barcodeEach");
    svg.innerHTML = "";
    JsBarcode(svg, cardNumber, {
        format: "CODE128",
        height: 80,
        width: 2,
        displayValue: true
    });
}

// function gotoHome() {
//     //document.getElementById("barcode").innerHTML = "";
//     document.getElementById("cardName").value = "";
//     document.getElementById("cardNumber").value = ""
//     document.getElementById("homepage").style.display = "block";
//     document.getElementById("add_card").style.display = "none";
//     document.getElementById("cardDetails").style.display = "none";
//     document.getElementById("search").style.display = "none";
//     document.getElementById("your_account").style.display = "none";
//     document.getElementById("transactions").style.display = "block";
//     document.getElementById("plusBtn").style.display = "block";
//     document.getElementById("transactionDetails").style.display = "none";
//     document.getElementById("add_transaction").style.display = "none";
//     document.getElementById("deleteTransactionQuestion").style.display = "none";
// }

//function gotoAddCard() {
    //document.getElementById("add_card").style.display = "block";
    //document.getElementById("homepage").style.display = "none";
    //document.getElementById("cardDetails").style.display = "none";
    //document.getElementById("search").style.display = "none";
    //document.getElementById("your_account").style.display = "none";
    //document.getElementById("transactions").style.display = "none";
    //document.getElementById("plusBtn").style.display = "block";
    //document.getElementById("transactionDetails").style.display = "none";
    //document.getElementById("add_transaction").style.display = "none";
    //document.getElementById("deleteTransactionQuestion").style.display = "none";
//}

function showCardDetails(card_index) {
    cardIndex = card_index;
    document.getElementById("cardDetails").style.display = "block";
    document.getElementById("homepage").style.display = "none";
    //document.getElementById("add_card").style.display = "none";
    //document.getElementById("search").style.display = "none";
    //document.getElementById("your_account").style.display = "none";
    //document.getElementById("transactions").style.display = "none";
    document.getElementById("plusBtn").style.display = "none";
    //document.getElementById("transactionDetails").style.display = "none";
    //document.getElementById("add_transaction").style.display = "none";
    document.getElementById("deleteCardQuestion").style.display = "none";

    const card = cards[card_index];
    document.getElementById("cardDetails").innerHTML = `
        <p class="subtitle">Name: ${card.name}</p>
        <svg id="barcodeEach"></svg>
        <button onclick="deleteCardQuestionfunc()" id="deleteCardBtn">Delete Card</button>
        `;

    generateBarcode(card.number);
        
    }

// function gotoSearch() {
//     document.getElementById("search").style.display = "block";
//     document.getElementById("homepage").style.display = "none";
//     document.getElementById("add_card").style.display = "none";
//     document.getElementById("cardDetails").style.display = "none";
//     document.getElementById("your_account").style.display = "none";
//     document.getElementById("transactions").style.display = "none";
//     document.getElementById("plusBtn").style.display = "block";
//     document.getElementById("transactionDetails").style.display = "none";
//     document.getElementById("add_transaction").style.display = "none";
//     document.getElementById("deleteTransactionQuestion").style.display = "none";
// }

// function gotoYourAccount() {
//     document.getElementById("your_account").style.display = "block";
//     document.getElementById("homepage").style.display = "none";
//     document.getElementById("add_card").style.display = "none";
//     document.getElementById("cardDetails").style.display = "none";
//     document.getElementById("search").style.display = "none";
//     document.getElementById("transactions").style.display = "none";
//     document.getElementById("plusBtn").style.display = "block";
//     document.getElementById("transactionDetails").style.display = "none";
//     document.getElementById("add_transaction").style.display = "none";
//     document.getElementById("deleteTransactionQuestion").style.display = "none";
// }

// function gotoAddTransaction() {
//     transactionNameInput = document.getElementById("transactionName");
//     transactionAmountInput = document.getElementById("transactionAmount");
//     currencySelect = document.getElementById("currency");

//     transactionNameInput.value = "";
//     transactionAmountInput.value = "";
//     currencySelect.value = "";
//     transactionCurrency = "";

//     document.getElementById("add_transaction").style.display = "block";
//     document.getElementById("homepage").style.display = "none";
//     document.getElementById("add_card").style.display = "none";
//     document.getElementById("cardDetails").style.display = "none";
//     document.getElementById("search").style.display = "none";
//     document.getElementById("your_account").style.display = "none";
//     document.getElementById("transactions").style.display = "none";
//     document.getElementById("plusBtn").style.display = "none";
//     document.getElementById("transactionDetails").style.display = "none";
//     document.getElementById("deleteTransactionQuestion").style.display = "none";
// }

// function addTransaction() {
//     let transactionName = document.getElementById("transactionName").value;
//     let transactionAmount = document.getElementById("transactionAmount").value;

//     if (transactionName === "" || transactionAmount === "") {
//         alert("Please fill all fields.");
//         return;
//     }

// //     if (transactionCurrency === "") {
// //         alert("Please select a currency.");
//         return;
//     }

//     alert("Transaction added!");

//     transactions.push({
//         name : transactionName,
//         amount: transactionAmount,
//         currency: transactionCurrency
//     });

//     transactionNameInput = document.getElementById("transactionName");
//     transactionAmountInput = document.getElementById("transactionAmount");

//     transactionNameInput.value = "";
//     transactionAmountInput.value = "";
//     currencySelect.value = "";
//     transactionCurrency = "";
//     showTransactions();
// }

// function showTransactionDetails(transaction_index) {
//     transactionIndex = transaction_index;

//     document.getElementById("transactionDetails").style.display = "block";
//     document.getElementById("add_transaction").style.display = "none";
//     document.getElementById("homepage").style.display = "none";
//     document.getElementById("add_card").style.display = "none";
//     document.getElementById("cardDetails").style.display = "none";
//     document.getElementById("search").style.display = "none";
//     document.getElementById("your_account").style.display = "none";
//     document.getElementById("transactions").style.display = "none";
//     document.getElementById("plusBtn").style.display = "none";
//     document.getElementById("deleteTransactionQuestion").style.display = "none";

//     transactionDetails = document.getElementById("transactionDetails");
//     const transaction = transactions[transaction_index];
//     transactionDetails.innerHTML = `
//         <p class = "subtitle">Transaction Details:</p>
//         <p class = "subtitle">Name: ${transaction.name}</p>
//         <p class = "subtitle">Amount: ${transaction.amount} ${transaction.currency}</p>
//         <p class = "subtitle">Date: not ready yet</p>
//         <p class = "subtitle">Time added: not ready yet</p>
//         <p class = "subtitle">Description: not ready yet</p>
//         <button onclick="deleteTransactionQuestionfunc()" id="deleteTransactionBtn">Delete Transaction</button>
//         `;
// }

// function selectCurrency(currency) {
//     transactionCurrency = currency;
// }

function deleteCardQuestionfunc() {
    document.getElementById("cardDetails").style.display = "block";
    //document.getElementById("add_transaction").style.display = "none";
    document.getElementById("homepage").style.display = "none";
    //document.getElementById("add_card").style.display = "none";
    //document.getElementById("transactionDetails").style.display = "none";
    //document.getElementById("search").style.display = "none";
    //document.getElementById("your_account").style.display = "none";
    //document.getElementById("transactions").style.display = "none";
    document.getElementById("plusBtn").style.display = "none";
    document.getElementById("deleteCardQuestion").style.display = "block";
    //deleteCardQuestionfunc();
    // delete(transactions[transaction_index]);
    // alert("Transaction deleted!");
    // showTransactions();
}

function deleteCard()
{
    document.getElementById("deleteCardQuestion").style.display = "none";
    if (cardIndex === -1) {
        alert("No card selected for deletion.");
        return;
    }
    cards.splice(cardIndex, 1);
    localStorage.setItem("cards", JSON.stringify(cards));
    alert("Card deleted!");
    window.location.href = "homepage.html";
    showCards();
    //gotoHome();
}

showCards();
//showTransactions();
//generateBarcode(cardNumber);