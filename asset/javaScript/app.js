let getBar = document.getElementById("bar");
let getHeader = document.getElementById("header");
let cancelMenu = document.getElementById("cancel");
let headerMobile = document.getElementById("mobileHeader");
let allContent = document.getElementById("content");

function myBar() {
    if (getBar) {
        getHeader.style.display = "block";
    }


}

function myCancel() {
    if (cancelMenu) {
        getHeader.style.display = "none";
    }

}