document.addEventListener("DOMContentLoaded", function() {
    const courseCards = document.querySelectorAll(".course-card");
    courseCards.forEach(card => {
        card.addEventListener("click", function() {
            card.classList.toggle("active");
        });
    });
});
