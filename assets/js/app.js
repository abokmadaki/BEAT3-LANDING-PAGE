const nav = document.getElementById("nav_menu");
const menu = document.getElementById("menu_btn");

menu.addEventListener("click", ()=>{
    menu.classList.toggle("open");
    nav.classList.toggle("show");
});



// const sr = ScrollReveal({
//     distance: '60px',
//     duration: 2500,
//     delay: 400,
//     // reset: true
// })




//when the scroll is greater than 50 viewport height add the scroll-header class to the tag
const scrollheader = () => {
    const header = document.getElementById("header");
    if(this.scrollY >= 50) {
        header.classList.add("header_scroll");
    }else {
        header.classList.remove("header_scroll")
    }
}

window.addEventListener("scroll", scrollheader);




