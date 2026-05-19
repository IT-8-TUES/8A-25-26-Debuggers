function goToPage(page) {
    window.location.href = page;
}

function showMessage(message) {
    alert(message);
}

function markActivePage() {
    var currentPage = window.location.pathname.split("/").pop();
    var buttons = document.querySelectorAll("footer button");

    buttons.forEach(function (button) {
        var buttonAction = button.getAttribute("onclick");

        if (buttonAction && buttonAction.includes(currentPage)) {
            button.style.backgroundColor = "#4f46e5";
            button.style.borderColor = "#4f46e5";
            button.style.color = "white";
        }
    });
}

function setupAccountForm() {
    var saveButton = document.querySelector("button[onclick=\"alert('Changes Saved!')\"]");

    if (saveButton) {
        saveButton.onclick = function () {
            var name = document.getElementById("field-name");
            var email = document.getElementById("field-email");

            if (name && name.value.trim() === "") {
                showMessage("Please enter your display name.");
                return;
            }

            if (email && email.value.trim() === "") {
                showMessage("Please enter your email.");
                return;
            }

            showMessage("Changes Saved!");
        };
    }
}

document.addEventListener("DOMContentLoaded", function () {
    markActivePage();
    setupAccountForm();
});
