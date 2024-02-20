console.log("Welcome To My Portfolio!");
let menuBtn = document.getElementById("menu-btn");
let exitBtn = document.getElementById("exit-btn");
let menuLst = document.getElementById("menu");
// let brndHead = document.getElementById("bName");
function displayMenuBtn() {
    exitBtn.style.opacity = 0;
    // brndHead.style.opacity=1;
    menuBtn.addEventListener('click', (event) => {
        menuLst.style.opacity = 1;
        menuBtn.style.opacity = 0;
        displayExitBtn();
    });
}
function displayExitBtn() {
    exitBtn.style.opacity = 1;
    // brndHead.style.opacity=0;
        
    exitBtn.addEventListener('click', (event) => {
        menuLst.style.opacity = 0;
        menuBtn.style.opacity = 1;
        displayMenuBtn();
    });
}
displayMenuBtn();