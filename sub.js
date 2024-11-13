// Display profile info
const isLoggedIn = localStorage.getItem('isLoggedIn');
if (isLoggedIn) {
    const user = JSON.parse(localStorage.getItem('user'));
    document.getElementById('profileDetails').innerHTML = `
        <p>Name: ${user.name}</p>
        <p>Email: ${user.email}</p>
    `;
} else {
    alert('Please log in first.');
    window.location.href = 'login.html'; // Redirect to login page if not logged in
}

// Handle subscription buttons
document.getElementById("subscribeButton").addEventListener("click", () => {
    localStorage.setItem("subscription", JSON.stringify({
        type: "Monthly Subscription",
        price: "$29/month",
        status: "Active"
    }));
    alert("You have successfully subscribed to the Monthly Plan!");
});

document.getElementById("lifetimeButton").addEventListener("click", () => {
    localStorage.setItem("subscription", JSON.stringify({
        type: "Lifetime Subscription",
        price: "$399",
        status: "Active"
    }));
    alert("You have successfully upgraded to the Lifetime Plan!");
});

// Handle payment form validation
function validatePaymentForm() {
    const cardName = document.getElementById("cardName").value.trim();
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const expirationDate = document.getElementById("expirationDate").value.trim();
    const cvv = document.getElementById("cvv").value.trim();
    const validationMessage = document.getElementById("validationMessage");

    // Validate name (only letters and spaces)
    const namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(cardName)) {
        validationMessage.textContent = "Please enter a valid name on the card.";
        validationMessage.style.display = "block";
        return false;
    }

    // Validate card number (16 digits)
    const cardNumberPattern = /^\d{16}$/;
    if (!cardNumberPattern.test(cardNumber)) {
        validationMessage.textContent = "Please enter a valid 16-digit card number.";
        validationMessage.style.display = "block";
        return false;
    }

    // Validate expiration date (MM/YY format)
    const expirationDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expirationDatePattern.test(expirationDate)) {
        validationMessage.textContent = "Please enter a valid expiration date (MM/YY).";
        validationMessage.style.display = "block";
        return false;
    }

    // Validate CVV (3 digits)
    const cvvPattern = /^\d{3}$/;
    if (!cvvPattern.test(cvv)) {
        validationMessage.textContent = "Please enter a valid 3-digit CVV.";
        validationMessage.style.display = "block";
        return false;
    }

    validationMessage.style.display = "none"; // Hide validation message if all fields are valid
    return true;
}

// Handle form submission and save payment info
document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    if (validatePaymentForm()) {
        const cardName = document.getElementById("cardName").value;
        const cardNumber = document.getElementById("cardNumber").value;
        const expirationDate = document.getElementById("expirationDate").value;
        const cvv = document.getElementById("cvv").value;

        localStorage.setItem("paymentInfo", JSON.stringify({
            cardName: cardName,
            cardNumber: cardNumber,
            expirationDate: expirationDate,
            cvv: cvv
        }));

        displayPaymentInfo();
    }
});

function displayPaymentInfo() {
    const paymentInfo = JSON.parse(localStorage.getItem("paymentInfo"));
    if (paymentInfo) {
        document.getElementById("cardNameDisplay").textContent = paymentInfo.cardName;
        document.getElementById("cardNumberDisplay").textContent = paymentInfo.cardNumber;
        document.getElementById("expirationDateDisplay").textContent = paymentInfo.expirationDate;
        document.getElementById("cvvDisplay").textContent = paymentInfo.cvv;

        document.getElementById("paymentInfo").style.display = "block"; // Show payment info section
    }
}

function displaySubscriptionDetails() {
    const subscription = JSON.parse(localStorage.getItem("subscription"));
    const subscriptionDetails = document.getElementById("subscriptionDetails");
    const noSubscriptionMessage = document.getElementById("noSubscriptionMessage");

    if (subscription) {
        subscriptionDetails.innerHTML = `
            <p>Subscription Type: ${subscription.type}</p>
            <p>Price: ${subscription.price}</p>
            <p>Status: ${subscription.status}</p>
        `;
        noSubscriptionMessage.style.display = "none";
    } else {
        noSubscriptionMessage.style.display = "block";
    }
}

displaySubscriptionDetails();
