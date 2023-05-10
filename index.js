// Your code goes here
document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById("text").textContent = "This is really cool!";
});

console.log(
    "This console.log() fire when index.js loads - before DOMContentLoaded is triggered"
);
