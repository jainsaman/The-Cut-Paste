pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://mozilla.github.io/pdf.js/build/pdf.worker.js";

const url = "./newspaper.pdf";
let pdfDoc = null,
    pageNum = 1,
    pageIsRendering = false,
    pageNumIsPending = null;

const scale = 1.5;

// Get Document
pdfjsLib.getDocument(url).promise.then((pdfDoc_) => {
    pdfDoc = pdfDoc_;
    viewer = document.getElementById("pdf-viewer");
    for (page = 1; page <= pdfDoc.numPages; page++) {
        canvas = document.createElement("canvas");
        canvas.className = "pdf-page-canvas";
        viewer.appendChild(canvas);
        renderPage(page, canvas);
    }
});

function renderPage(pageNumber, canvas) {
    pdfDoc.getPage(pageNumber).then(function (page) {
        viewport = page.getViewport({ scale: scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        page.render({
            canvasContext: canvas.getContext("2d"),
            viewport: viewport,
        });
    });
}

// Newsletter Subscription
document.getElementById("subscribe-btn").addEventListener("click", (event) => {
    let subscribeEmail = document.getElementById("subscribe-email").value;
    alert("Thank you for subscribing to our newsletter!");
    document.getElementById("subscribe-email").value = "";
});

// LogOut
document.getElementById("logout-btn").addEventListener("click", (event) => {
    localStorage.clear();
    window.location.href = "index.html";
});

if (localStorage.getItem("isLoggedIn") === "true") {
    console.log("Yes")
    document.getElementById("register-btn").style.display = "none";
    document.getElementById("login-btn").style.display = "none";
    document.getElementById("logout-btn").style.display = "block";
} else {
    document.getElementById("login-btn").style.display = "block";
    document.getElementById("register-btn").style.display = "block";
    document.getElementById("logout-btn").style.display = "none";
}