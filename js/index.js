var typed = new Typed(".typing", {
    strings: ["", "Web Developer", "Graphix Designer", "Mobile Apps Developer"],
    typeSpeed: 100,
    BackSpeed: 300,
    loop: false,
    
});

var typed = new Typed(".name", {
    strings: ["", "Saani Idd", "", "Saani Iddi"],
    typeSpeed: 100,
    loop: true,
    BackSpeed: 60
})

function addClicked() {
    document.querySelector(".aside").classList.toggle("select");
}