// document.addEventListener('DOMContentLoaded', function () {
//     const navbarPlaceholders = document.querySelector('.my-navbar-menu');
//     const contentContainer = document.getElementById('dynamic-content');

//     function loadDefaultContent() {
//         const xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 contentContainer.innerHTML = this.responseText;
//             }
//         };
//         xhttp.open('GET', '/src/pages/Home/Index.html', true);
//         xhttp.send();
//     }

//     function loadNavbar() {
//         const xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 navbarPlaceholders.innerHTML = this.responseText;
//                 initializeNavbarLinks();
//             }
//         };
//         xhttp.open('GET', '/src/pages/Components/Navbar/Index.html', true);
//         xhttp.send();
//     }

//     function loadPageContent(url) {
//         const xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 contentContainer.innerHTML = this.responseText;
//             }
//         };
//         xhttp.open('GET', url, true);
//         xhttp.send();
//     }

//     function initializeNavbarLinks() {
//         const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

//         navbarLinks.forEach(link => {
//             link.addEventListener('click', function (event) {
//                 event.preventDefault();
//                 const pageUrl = this.getAttribute('href');
//                 loadPageContent(pageUrl);
//             });
//         });
//     }


//     loadDefaultContent();

//     loadNavbar();

//     initializeNavbarLinks();
// });