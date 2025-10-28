document.addEventListener("DOMContentLoaded", function () {
    const blurredTexts = document.querySelectorAll('.blurred-text');
    blurredTexts.forEach((blurr) => {
        blurr.addEventListener("click", () => {
            const currentFilter = getComputedStyle(blurr).filter;

            if (currentFilter !== "none") {
                blurr.style.filter = "none";
            } else {
                blurr.style.filter = "blur(10px)";
            }
        });
    });
});