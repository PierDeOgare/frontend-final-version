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

//MODAL LOGIC
document.addEventListener("DOMContentLoaded", function () {

    const modal = new bootstrap.Modal(
        document.getElementById('welcomeModal')
    );

    const storedName = localStorage.getItem("profileName");
    const storedImage = localStorage.getItem("profileImage");

    if (!storedName || !storedImage) {
        modal.show();
    } else {
        document.getElementById("profileName").textContent = storedName;
        document.getElementById("profileImage").src = storedImage;
    }

    const form = document.getElementById("welcomeForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("userName").value;
        const imageInput = document.getElementById("userImage");

        if (imageInput.files.length === 0) return;

        const reader = new FileReader();

        reader.onload = function (event) {
            const imageData = event.target.result;

            document.getElementById("profileName").textContent = name;
            document.getElementById("profileImage").src = imageData;

            localStorage.setItem("profileName", name);
            localStorage.setItem("profileImage", imageData);

            modal.hide();
        };

        reader.readAsDataURL(imageInput.files[0]);
    });

});