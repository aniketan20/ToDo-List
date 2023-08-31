//Sign Up Pages
const saveData = document.getElementById("signup-form");
const usernameTakenNotification = document.getElementById("username-taken-notification");

saveData.addEventListener("submit", function(event){
    event.preventDefault();
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
    const storedUser = localStorage.getItem(username);
    if (storedUser) {
        usernameTakenNotification.classList.add("show");
        setTimeout(() => {
            usernameTakenNotification.classList.remove("show");
        }, 3000);
    } 
    else{
        // Store user data in local storage
        localStorage.setItem(username, JSON.stringify({ username, password }));
        window.open("login.html","_self");
    }
});

