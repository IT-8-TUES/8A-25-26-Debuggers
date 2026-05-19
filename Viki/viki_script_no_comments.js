//clear js - no unused comments
let user = localStorage.getItem("username");
let cards = JSON.parse(localStorage.getItem(user + "_cards")) || [];

let cardIndex = -1;
let cardindex;

const noCards = document.getElementById("noCards");
const cardsContainer = document.getElementById("cardsContainer");

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
            <button class="card-button" id="cardButton_${card_index}" onclick="showCardDetails(${card_index})">${card.name}</button>
        `;
        cardindex = card_index;
        cardsContainer.appendChild(div_card);

        let cardId = document.getElementById(`cardButton_${card_index}`);
        if (cardId.textContent === "Kaufland") cardId.style.backgroundColor = "red";
        else if (cardId.textContent === "kaufland") cardsContainer.style.backgroundColor = "red";
        else if (cardId.textContent === "KAUFLAND") cardsContainer.style.backgroundColor = "red";
        else if (cardId.textContent === "Lidl") cardId.style.backgroundColor = "blue";
        else if (cardId.textContent === "Lidl") cardsContainer.style.backgroundColor = "blue";
        else if (cardId.textContent === "LIDL") cardsContainer.style.backgroundColor = "blue";
        else if (cardId.textContent === "lilly") cardsContainer.style.backgroundColor = "lightblue";
        else if (cardId.textContent === "Lilly") cardId.style.backgroundColor = "lightblue";
        else if (cardId.textContent === "DM") cardId.style.backgroundColor = "green";
        else if (cardId.textContent === "Billa") cardId.style.backgroundColor = "red";
        else if (cardId.textContent === "Bershka") cardId.style.backgroundColor = "black";
        else if (cardId.textContent === "H&M") cardId.style.backgroundColor = "black";
        else if (cardId.textContent === "Zara") cardId.style.backgroundColor = "black";
        else if (cardId.textContent === "Decathlon") cardId.style.backgroundColor = "blue";
        else if (cardId.textContent === "IKEA") cardId.style.backgroundColor = "darkblue";
        else if (cardId.textContent === "Фантастико") cardId.style.backgroundColor = "red";
        else if (cardId.textContent === "Technopolis") cardId.style.backgroundColor = "blue";
        else if (cardId.textContent === "Technomarket") cardId.style.backgroundColor = "blue";
        else if (cardId.textContent === "Metro") cardId.style.backgroundColor = "blue";
        else if (cardId.textContent === "JYSK") cardId.style.backgroundColor = "blue";
        else if (cardId.textContent === "SportDepot") cardId.style.backgroundColor = "blue";
        else{
            cardId.style.background = "linear-gradient(to right, blue, purple, magenta)";
        }
    });
}

function addCard() {
    let cardName = document.getElementById("cardName").value;
    let cardNumber = document.getElementById("cardNumber").value;

    if (cardName === "" || cardNumber === "") {
        alert("Please fill all fields");
        return;
    }

    alert("Card added!");

    cards.push({
    name: cardName,
    number: cardNumber
    });

    let user = localStorage.getItem("username");
    localStorage.setItem(user + "_cards", JSON.stringify(cards));

    let cardNameInput = document.getElementById("cardName");
    let cardNumberInput = document.getElementById("cardNumber");
    cardNameInput.value = "";
    cardNumberInput.value = "";
}

const add_card_btn = document.querySelector(".adding-card-btn");
add_card_btn.addEventListener("click", function(event) {
    event.preventDefault();
    addCard();
    showCards();
})

function generateBarcode(cardNumber) {
    const svg = document.getElementById("barcodeEach");
    svg.innerHTML = "";
    JsBarcode(svg, cardNumber, {
        format: "CODE128",
        height: 80,
        width: 2,
        displayValue: true,
        background: "white",
        lineColor: "black"
    });
}

function showCardDetails(card_index) {
    let user = localStorage.getItem("username");
    let cards = JSON.parse(localStorage.getItem(user + "_cards")) || [];

    cardIndex = card_index;
    document.getElementById("cardDetails").style.display = "block";
    document.getElementById("homepage").style.display = "none";
    document.getElementById("plusBtn").style.display = "none";
    document.getElementById("deleteCardQuestion").style.display = "none";

    const card = cards[card_index];
    document.getElementById("cardDetails").innerHTML = `
        <p class="subtitle">Name: ${card.name}</p>
        <svg id="barcodeEach"></svg>
        <button onclick="deleteCardQuestionfunc()" id="deleteCardBtn">Delete Card</button>
        `;

    generateBarcode(card.number);
        
}

function deleteCardQuestionfunc() {
    document.getElementById("cardDetails").style.display = "block";
    document.getElementById("homepage").style.display = "none";
    document.getElementById("plusBtn").style.display = "none";
    document.getElementById("deleteCardQuestion").style.display = "block";
}

function deleteCard()
{
    document.getElementById("deleteCardQuestion").style.display = "none";
    if (cardIndex === -1) {
        alert("No card selected for deletion.");
        return;
    }
    cards.splice(cardIndex, 1);
    let user = localStorage.getItem("username");
    localStorage.setItem(user + "_cards", JSON.stringify(cards));
    alert("Card deleted!");
    window.location.href = "homepage.html";
    showCards();
}

showCards();