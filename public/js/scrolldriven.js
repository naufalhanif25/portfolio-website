document.addEventListener("DOMContentLoaded", function() {
    const hiddenSections = document.querySelectorAll(".hidden-section");
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };
  
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } 
        });
    }, options);
  
    hiddenSections.forEach(section => {
        observer.observe(section);
    });
});
