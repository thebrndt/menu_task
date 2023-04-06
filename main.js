// Definition of variables and elements and stuff
const menuIcon = document.querySelector('.menu-icon');
const headerMenu = document.querySelector('.header-menu-icon');
const mainOverlay = document.querySelector('.main--overlay');
const nav = document.querySelector('.nav');
const collapsedClass = 'nav--collapsed';
const local_storage_key = 'navCollapsed';
const navLinks = document.querySelectorAll('.nav__link');
var max_width = window.matchMedia('(max-width: 767px)');

//LOGIC AND FUNTIONS

// checks the collapsed state of the menu whenever page is reloaded
// and adds class if needed based on local storage
if (localStorage.getItem(local_storage_key) === 'true') {
    nav.classList.add(collapsedClass);
}

// simple functions for adding and removing styling specific attributes to elements
function addOverlay() {
    mainOverlay.classList.add('active');
}
function removeOverlay() {
    mainOverlay.classList.remove('active');
}

function mobileMenuCollapsed() {
    nav.style.display = "none";
    nav.style.position = "absolute !important";
}
function mobileMenuExpanded() {
    nav.style.display = "block";
    nav.style.position = "relative";
}

function iconChangeClose() {
    menuIcon.innerHTML = "close";
}
function iconChangeMenu() {
    menuIcon.innerHTML = "menu";
}


// function to toggle the dark overlay effect once the browser has width of <768px and does not 
//contain the defined collapsedClass class
function overlayToggle() {
    if (max_width.matches && !nav.classList.contains(collapsedClass)){
        addOverlay();
    } else {
        removeOverlay();
    }
}

// removes class that adds colors and bolding selected nav links 
function clearAllNavLinks() {
    navLinks.forEach(navLink => {
        navLink.classList.remove('active');
    })
}

// as screen is resized, conditions for mobile screen are checked and mobile funtions are ran accordingly
// to display menu in a specific way, with specific changes
addEventListener('resize', () => {
    // headerMenu.classList.add('disappear')
    if (max_width.matches && nav.classList.contains(collapsedClass)){
        mobileMenuCollapsed();
    } else if (max_width.matches && !nav.classList.contains(collapsedClass)){
        mobileMenuExpanded();
        iconChangeClose();
    } else {
        mobileMenuExpanded();
        iconChangeMenu();
    }
    overlayToggle();
})

// when menu icon is clicked the menu is collapsed or expanded, it's state is stored, and condition is checked
// whether it is in mobile, either switching the menu or not, followed by the overlayToggle function
menuIcon.addEventListener('click', () => {
    nav.classList.toggle(collapsedClass);
    localStorage.setItem(local_storage_key, nav.classList.contains(collapsedClass));
    if (max_width.matches && nav.classList.contains(collapsedClass)){
        mobileMenuCollapsed();
    }
    if (max_width.matches && !nav.classList.contains(collapsedClass)) {
        iconChangeClose();
    } else {
        iconChangeMenu();
    }
    overlayToggle();
})

// adds class that adds colors and bolding, after a nav link is clicked
navLinks.forEach(navLink => {
    navLink.addEventListener('click', (e) => {
        clearAllNavLinks();
        e.target.classList.add('active');
    })
})

// when the menu item is clicked in mobile view, menu is toggled, and expanded if needed
headerMenu.addEventListener('click', () => {
    nav.classList.toggle(collapsedClass);
    if (max_width.matches && !nav.classList.contains(collapsedClass)) {
        mobileMenuExpanded();
        iconChangeClose();
    }
    overlayToggle();
})