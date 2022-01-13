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

// LogOut
document.getElementById("logout-btn").addEventListener("click", (event) => {
    localStorage.removeItem("isLoggedIn");
    alert("You have been logged out!");
    window.location.href = "index.html";
});

if (localStorage.getItem("isLoggedIn") === "true") {
    document.getElementById("register-btn").style.display = "none";
    document.getElementById("login-btn").style.display = "none";
    document.getElementById("logout-btn").style.display = "block";
} else {
    document.getElementById("login-btn").style.display = "block";
    document.getElementById("register-btn").style.display = "block";
    document.getElementById("logout-btn").style.display = "none";
}

// All Newspapers
document.getElementById("allNewspapers-btn").addEventListener("click", (event) => {
    if (localStorage.getItem("isLoggedIn") === "true") {
        window.location.href = "allnewspapers.html";
    } else {
        alert("Login to read all newspapers!");
        window.location.href = "login.html";
    }
});

// All Newspapers Functionality

// Reference Newspapers Data
// let newspapers = [
//     {
//         pageUrl: "./newspaper.pdf",
//         date: "2020",
//     },
//     {
//         pageUrl: "./newspaper.pdf",
//         date: "2021",
//     },
//     {
//         pageUrl: "./newspaper.pdf",
//         date: "2022",
//     },
// ]


// Mapping All Newspapers

// document.getElementById('card-container').innerHTML = newspapers.map(newspaper =>
//     `<div class="card m-3 w-25 mt-3 d-inline-flex">
//         <div class="card-body">
//             <h5 class="card-title">${newspaper.date}</h5>
//             <button type="button" class="btn-outline-danger">
//             <a href=newspaper.pageUrl target="_blank">Read Now</a>
//           </button>
//         </div>
//     </div>
//     `
// ).join('')