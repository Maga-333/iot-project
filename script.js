// Request notification permission
function requestNotificationPermission() {
    if (Notification.permission === "granted") {
        return;
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission();
    }
}

// Function to show notification
function showNotification(medicine) {
    if (Notification.permission === "granted") {
        new Notification(Time to take your ${medicine}!);
    }
}

function setReminder() {
    // Get values from input fields
    let medicine = document.getElementById("medicineName").value;
    let time = document.getElementById("medicineTime").value;

    if (!medicine || !time) {
        alert("Please enter both medicine name and time.");
        return;
    }

    // Create reminder list item
    let reminderList = document.getElementById("reminderList");
    let listItem = document.createElement("li");
    listItem.textContent = ${medicine} at ${time};
    reminderList.appendChild(listItem);

    // Convert time input to Date object
    let currentTime = new Date();
    let reminderTime = new Date(currentTime.toDateString() + ' ' + time);

    // Calculate the time difference
    let timeDifference = reminderTime - currentTime;

    if (timeDifference >= 0) {
        // Set timeout to trigger notification
        setTimeout(function() {
            showNotification(medicine);
        }, timeDifference);
    } else {
        alert("Reminder time has already passed for today.");
    }
}

// Request notification permission when the page loads
window.onload = function() {
    requestNotificationPermission();
};
