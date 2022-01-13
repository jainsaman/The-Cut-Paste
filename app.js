// PDF Embed API
const apiKey = "a94c9ac546334b69bf5b8a3229c9637c"

const previewConfig = {
    showDownloadPDF: false,
    showPageControls: false,
    showAnnotationTools: false,
    showPageControls: false,
    showLeftHandPanel: false,
    showPrintPDF: false,
    enableFormFilling: false,
}
// URL to the PDF file
let url = "./newspaper.pdf"

document.addEventListener("adobe_dc_view_sdk.ready", function () {
    var adobeDCView = new AdobeDC.View({ clientId: apiKey, divId: "adobe-dc-view" });
    adobeDCView.previewFile({
        content: { location: { url: url } },
        metaData: { fileName: "The Cut Paste Newspaper" }
    }, previewConfig);
});


// Newsletter Subscription
document.getElementById("subscribe-btn").addEventListener("click", (event) => {
    let subscribeEmail = document.getElementById("subscribe-email").value;
    alert("Thank you for subscribing to our newsletter!");
    document.getElementById("subscribe-email").value = "";
});



// All Newspapers Functionality

// Reference Newspapers Data
let newspapers = [
    {
        url: "./newspaper.pdf",
        date: "July 2020",
    },
    {
        url: "./newspaper.pdf",
        date: "July 2021",
    },
    {
        url: "./newspaper.pdf",
        date: "July 2022",
    },
    {
        url: "./newspaper.pdf",
        date: "July 2023",
    },
]
// Mapping All Newspapers

document.getElementById('card-container').innerHTML = newspapers.map(newspaper =>
    `<div class="card m-3 w-75 mt-3">
        <div class="card-body w-100 d-flex justify-content-between align-items-center">
            <h5 class="m-0 card-title">${newspaper.date}</h5>
            <button id="read-btn" type="button" class="btn btn-outline-danger">
            <a href=${newspaper.url} target="_blank">Read Now</a>
          </button>
        </div>
    </div>
    `
).join('')