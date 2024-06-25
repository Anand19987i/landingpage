var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px"
function toggleMenu() {
    if (menuList.style.maxHeight === "0px" || menuList.style.maxHeight === "") {
        menuList.style.maxHeight = "300px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}
document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    document.querySelector('.btn2').addEventListener('click', function() {
        window.location.href = 'course.html';
    });
});

const endDate = new Date("Dec 19, 2024 20:06:00").getTime();
const daysInputs = document.querySelectorAll("#days");
const hoursInputs = document.querySelectorAll("#hours");
const minutesInputs = document.querySelectorAll("#minutes");
const secondsInputs = document.querySelectorAll("#seconds");

function clock() {
    const now = new Date().getTime();
    const diff = endDate - now;

    if (diff < 0) return;

    daysInputs.forEach(input => {
        input.value = Math.floor(diff / (1000 * 60 * 60 * 24));
    });
    hoursInputs.forEach(input => {
        input.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    });
    minutesInputs.forEach(input => {
        input.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    });
    secondsInputs.forEach(input => {
        input.value = Math.floor((diff % (1000 * 60)) / 1000);
    });
}

clock();

setInterval(() => {
    clock();
}, 1000);