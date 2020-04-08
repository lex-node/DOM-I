/***************
 CONTENT DATA
 ***************/
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
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

/***************
 IMAGES
 ***************/
let logo = document.getElementById("logo-img");
logo.src = siteContent["nav"]["img-src"];

let ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

let middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

// set nav text content via DOM selectors
let navLinks = document.querySelectorAll("nav > a");
for (i = 0; i < navLinks.length; i++) {
  navLinks[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
}

/***************
 MAIN TEXT CONTENT
 ***************/
document.querySelector("div.cta-text > h1").textContent = siteContent["cta"]["h1"];
document.querySelector("div.cta-text > button").textContent = siteContent["cta"]["button"];

let textContentBoxTypes = ["features", "about", "services", "product", "vision"]
let textContentBoxHeaders = document.querySelectorAll(`.text-content > h4`)
let textContentBoxParas = document.querySelectorAll(`.text-content > p`);

for (i = 0; i < textContentBoxHeaders.length; i++) {
  textContentBoxHeaders[i].textContent = siteContent[`main-content`][`${textContentBoxTypes[i]}-h4`];
}

for (i = 0; i < textContentBoxParas.length; i++) {
  textContentBoxParas[i].textContent = siteContent[`main-content`][`${textContentBoxTypes[i]}-content`];
}
/***************
 CONTACT CONTENT
 ***************/
let contactElements = document.querySelector(".contact").children;
let contactContents = Object.getOwnPropertyNames(siteContent['contact']);
for (i = 0; i < contactElements.length; i++) {
  contactElements[i].textContent = siteContent[`contact`][`${contactContents[i]}`];
}

document.querySelector('footer > p').textContent = siteContent['footer']["copyright"];
/*


## Task 3: Add new content
* [ ] Change the color of the navigation text to be green.
* [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
* [ ] Check your work by looking at the [original html](original.html) in the browser

## Stretch Goals
* [ ] Update styles throughout the page as you see fit.  Study what happens when you updated the DOM using style in JavaScript.
* [ ] Study tomorrow's lesson on events and try to integrate a button that can update conte*/
