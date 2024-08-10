
document.addEventListener('DOMContentLoaded', function() {
    var loginLink = document.getElementById('loginLink');
    loginLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        // Show the popup here, for example, by displaying an overlay div
        alert('Popup untuk halaman login');
    });
});

var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const galleryThumbnail = document.querySelectorAll(".thumbnails-list li");
// select featured
const galleryFeatured = document.querySelector(".product-gallery-featured img");

// loop all items
galleryThumbnail.forEach((item) => {
  item.addEventListener("mouseover", function () {
    let image = item.children[0].src;
    galleryFeatured.src = image;
  });
});

// show popover
$(".main-questions").popover('show');

$('#myCarousel').carousel({
    interval: 3000,
 })
