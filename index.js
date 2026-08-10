document.addEventListener("DOMContentLoaded", function () {

    const welcomePage = document.getElementById("welcomePage");
    const mainSystem = document.getElementById("mainSystem");
    const enterButton = document.getElementById("enterButton");
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");


    /* =========================
       INITIAL PAGE
    ========================= */

    if (welcomePage && mainSystem) {
        welcomePage.style.display = "flex";
        mainSystem.style.display = "none";
    }


    /* =========================
       ENTER SYSTEM
    ========================= */

    if (enterButton) {

        enterButton.addEventListener("click", function () {

            if (!welcomePage || !mainSystem) {
                console.error("Required page elements are missing.");
                return;
            }

            welcomePage.style.display = "none";
            mainSystem.style.display = "block";

            window.scrollTo(0, 0);
        });

    } else {
        console.error("Enter button not found.");
    }


    /* =========================
       TAB NAVIGATION
    ========================= */

    tabButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const targetId = button.getAttribute("data-tab");

            if (!targetId) {
                console.error("Tab ID is missing.");
                return;
            }


            // Remove active from all buttons
            tabButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });


            // Hide all content
            tabContents.forEach(function (content) {
                content.classList.remove("active");
            });


            // Activate clicked button
            button.classList.add("active");


            // Show selected content
            const selectedContent =
                document.getElementById(targetId);

            if (selectedContent) {

                selectedContent.classList.add("active");

                window.scrollTo(0, 0);

            } else {

                console.error(
                    "Content section not found:",
                    targetId
                );

            }

        });

    });


});