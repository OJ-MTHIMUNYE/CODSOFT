const side_bar = document.getElementById("actsidebar");
const Top_bar = document.getElementById("close");
const TopLinks = document.querySelector(".MobilePhone");



function toggleBar(){

    const SideBar = document.querySelector(".sideBar");
    SideBar.style.display = "flex";

    


}
side_bar.addEventListener("click", toggleBar);


function TopBar(){

    const SideBar = document.querySelector(".sideBar");
    SideBar.style.display = "none";
    


}


side_bar.addEventListener("click", toggleBar);
Top_bar.addEventListener("click", TopBar);


