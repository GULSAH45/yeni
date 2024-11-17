const tokyoBtn = document.getElementById("tokyoBtn");
const parisBtn = document.getElementById("parisBtn");
const londonBtn = document.getElementById("londonBtn");
const tokyo = document.getElementById("tokyo");
const paris = document.getElementById("paris"); 
const london = document.getElementById("london");

tokyoBtn.addEventListener("click", () => {
    tokyo.style.display = "block";
    paris.style.display = "none";    
    london.style.display = "none";
});

parisBtn.addEventListener("click", () => {    
    tokyo.style.display = "none";
    paris.style.display = "block";
    london.style.display = "none";
});

londonBtn.addEventListener("click", () => {    
    tokyo.style.display = "none";
    paris.style.display = "none";
    london.style.display = "block";
});

