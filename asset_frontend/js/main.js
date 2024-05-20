window.addEventListener('scroll', function() {
    var header = document.querySelector('.navbar');
    if (window.scrollY > 600) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});


// Dropdown menu phone
document.addEventListener("DOMContentLoaded", function () {
    var dropdownBtns = document.querySelectorAll('.dropdown-btn');

    dropdownBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var submenu = this.parentElement.nextElementSibling;

            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        });
    });
});

// Close and open menu
const MenuPhone = document.querySelector(".navbar-phone");
const closeMenu = document.querySelector(".x-menu");
const openMenu = document.querySelector(".menu-bar");
const addBackground = document.querySelector(".background-backdrop");

openMenu.addEventListener("click",function(){
    MenuPhone.classList.add("show-menuPh");
    addBackground.classList.add("add-background");
});

closeMenu.addEventListener("click",function(){
    MenuPhone.classList.remove("show-menuPh");
    addBackground.classList.remove("add-background");
});


addBackground.addEventListener("click",function(){
    MenuPhone.classList.remove("show-menuPh");
    addBackground.classList.remove("add-background");
});

// Show dropdown category
const Categories = document.querySelector(".categories");
const dropdownCategory = document.querySelector(".dropdown-categories");

Categories.addEventListener("click",function(){
    dropdownCategory.classList.toggle("show-category");
});

// Change image of banner
document.addEventListener("DOMContentLoaded", function() {
    const creators = document.querySelectorAll('.creator img');
    const banner = document.querySelector('.banner img');
    
    creators.forEach(creator => {
        creator.addEventListener('click', function() {
            // Get the source of the clicked image
            const imgSrc = this.getAttribute('src');
            // Set the source of the banner image to the clicked image source
            banner.setAttribute('src', imgSrc);
        });
    });
});

// Tab btn template
document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.display_template');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to the clicked button
            this.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => content.style.display = 'none');
            
            // Show the clicked tab content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).style.display = 'block';
        });
    });
});
