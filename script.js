/* =========================
   YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   TOAST
========================= */

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}


/* =========================
   COMPLAINT FORM
========================= */

document
    .getElementById("complaintForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("residentName").value;

        showToast(
            "Thank you, " +
            name +
            ". Your complaint has been recorded locally."
        );

        this.reset();
    });


/* =========================
   DOCUMENT MODAL
========================= */

function documentMessage() {

    document
        .getElementById("modal")
        .classList.add("show");
}


function closeModal() {

    document
        .getElementById("modal")
        .classList.remove("show");
}


window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("modal");

    if (event.target === modal) {
        closeModal();
    }

});


/* =========================
   MAP
========================= */

function openMap() {

    const address =
        "Green Power Residency, Sector 75, Faridabad, Haryana";

    const url =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(address);

    window.open(url, "_blank");
}


/* =========================
   BACK TO TOP
========================= */

const backTop =
    document.getElementById("backTop");


window.addEventListener("scroll", function() {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeModal();
    }

});
