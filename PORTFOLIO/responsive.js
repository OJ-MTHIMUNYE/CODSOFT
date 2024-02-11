


const side_bar = document.getElementById("actsidebar");
const Top_bar = document.getElementById("close");
const TopLinks = document.querySelector(".MobilePhone");
const AllDivs = document.querySelectorAll("div");


function toggleBar(){

    const SideBar = document.querySelector(".sideBar");
    SideBar.style.display = "flex";

    


}



function TopBar(){

    const SideBar = document.querySelector(".sideBar");
    SideBar.style.display = "none";
    


}


side_bar.addEventListener("click", toggleBar);

side_bar.addEventListener("click", toggleBar);
Top_bar.addEventListener("click", TopBar);


