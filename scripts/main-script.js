//TOGGLE FUNCTION
document.addEventListener("DOMContentLoaded", function () {

    const toggles = document.querySelectorAll(".toggle-membership");

    toggles.forEach(function(toggle) {

        toggle.addEventListener("click", function() {

            const section = this.closest(".membership-section");

            section.classList.toggle("active");

        });

    });

});