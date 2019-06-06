// # Task 1: Create selectors to point your data into elements
// * [X] Create selectors by using any of the DOM element's methods
// * [X] Note that IDs have been used on all images.  Use the IDs to update src path content
//
// ## Task 2: Update the HTML with the JSON data
// * [X] Remember, NO direct updating of the HTML source is allowed.
// * [ ] Using your selectors, update the content to match the example file.
// * [ ] Remember to update the src attributes on images
//
// ## Task 3: Add new content
// * [ ] Change the color of the navigation text to be green.
// * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
// * [ ] Check your work by looking at the [original html](original.html) in the browser
//
// ## Stretch Goals
// * [ ] Update styles throughout the page as you see fit.  Study what happens when you updated the DOM using style in JavaScript.
// * [ ] Study tomorrow's lesson on events and try to integrate a button that can update content on the site with a click of a button.  You could build a similar data object with new values to help you test the click event.
//
// ## Stretch Project: Digital Timer
// This project is heavier on logic but employs some DOM manipulation to achieve it's goals.  Go check it out here: [stretch assignment](stretch-assignment) and see how far you can get.


const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', "img/header-img.png");

let codeImg = document.getElementById("cta-img");
codeImg.setAttribute('src', "img/logo.png");

let codeImg2 = document.getElementById("middle-img");
codeImg2.setAttribute('src', "img/mid-page-accent.jpg");

 let h1Elements = document.getElementsByTagName('h1');
 h1Elements[0].textContent = 'Dom Is Awesome';

 let anchorElements = document.getElementsByTagName('a');
 [anchorElements[0].textContent, anchorElements[1].textContent, anchorElements[2].textContent, anchorElements[3].textContent, anchorElements[4].textContent, anchorElements[5].textContent] = ["Services", "Product", "Vision", "Features", "About", "Contact"];

let buttons = document.getElementsByTagName('button');
buttons[0].textContent = "Get Started";

let h4Elements = document.getElementsByTagName('h4');
[h4Elements[0].textContent, h4Elements[1].textContent, h4Elements[2].textContent, h4Elements[3].textContent, h4Elements[4].textContent] = ["Features", "About", "Services", "Product", "Vision"];

let middleParas = document.getElementsByTagName('p');
[middleParas[0], middleParas[1], middleParas[2], middleParas[3], middleParas[4]] = ["blah blah blah", "blah blah blah", "blah blah blah", "blah blah blah", "blah blah blah"];
 // Services product vision features about contact


