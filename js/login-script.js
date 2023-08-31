const checkData = document.getElementById("login-form");
const invalidUserNotification = document.getElementById("invalid-username-notification");
const invalidPwdNotification = document.getElementById("invalid-pwd-notification");
const successnotification = document.getElementById("success-notification");

checkData.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const storedUser = localStorage.getItem(username);
    if (storedUser) {
        const userData = JSON.parse(storedUser);
        if (userData.password === password) {
            window.open("taskManager.html","_self");
        } 
        else {
            invalidPwdNotification.classList.add("show");
            setTimeout(() => {
                invalidPwdNotification.classList.remove("show");
            }, 3000);
        }
    } 
    else {
        invalidUserNotification.classList.add("show");
        setTimeout(() => {
            invalidUserNotification.classList.remove("show");
        }, 3000);
    }
    
});
