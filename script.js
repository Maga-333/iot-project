// Function to request permission for notifications
function requestNotificationPermission() {
    if (Notification.permission === "granted") {
        return;
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission();
    }
}

// Function to show notification
function showNotification(medicine) {
    new Notification(Time to take your ${medicine}!);
}

function setReminder() {
    let medicine = document.getElementById("medicineName").value;
    let time = document.getElementById("medicineTime").value;

    // Reminder logic
    let currentTime = new Date();
    let reminderTime = new Date(currentTime.toDateString() + ' ' + time);
    let timeDifference = reminderTime - currentTime;

    if (timeDifference >= 0) {
        setTimeout(function() {
            showNotification(medicine);
        }, timeDifference);
    } else {
        alert("Reminder time has already passed for today.");
    }
}