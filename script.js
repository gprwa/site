/* =========================
   YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();



/* =========================
   DOCUMENT MODAL
========================= */
function documentMessage(documentId) {

    // Hide all document divs
    const documents = document.querySelectorAll('.document-content');

    documents.forEach(function (document) {
        document.classList.remove('active');
    });

    // Show only the clicked document
    const selectedDocument = document.getElementById(documentId);

    if (selectedDocument) {
        selectedDocument.classList.add('active');
    }
}


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
