const navbarClone = document.querySelector(".navbar").cloneNode(true);

navbarClone.classList.add("fixed-top", "bg-white", "border-bottom");

window.addEventListener("scroll",onscroll = () => {
    (window.scrollY > 0) ? document.querySelector("body").prepend(navbarClone): navbarClone.remove();
})
