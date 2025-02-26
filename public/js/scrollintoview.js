document.querySelectorAll(".header-button").forEach(button => {
    button.addEventListener("click", function() {
        const targetId = this.getAttribute("scrollto");
        document.getElementById(targetId).scrollIntoView();
    });
});