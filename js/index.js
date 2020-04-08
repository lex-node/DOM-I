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
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let h1Elements = document.getElementsByTagName('h1');
h1Elements[0].textContent = siteContent["cta"]["h1"];

let anchorElements = document.getElementsByTagName('a');
[anchorElements[0].textContent, anchorElements[1].textContent, anchorElements[2].textContent, anchorElements[3].textContent, anchorElements[4].textContent, anchorElements[5].textContent] = [siteContent["nav"]["nav-item-1"], siteContent["nav"]["nav-item-2"], siteContent["nav"]["nav-item-3"], siteContent["nav"]["nav-item-4"], siteContent["nav"]["nav-item-5"], siteContent["nav"]["nav-item-6"]];

let buttons = document.getElementsByTagName('button');
buttons[0].textContent = siteContent["cta"]["button"];

let h4Elements = document.querySelectorAll('.text-content h4');
[h4Elements[0].textContent, h4Elements[1].textContent, h4Elements[2].textContent, h4Elements[3].textContent, h4Elements[4].textContent] = [siteContent["main-content"]["features-h4"], siteContent["main-content"]["about-h4"], siteContent["main-content"]["services-h4"], siteContent["main-content"]["product-h4"], siteContent["main-content"]["vision-h4"]];


let middleParas = document.querySelectorAll('.text-content p');
[middleParas[0].textContent, middleParas[1].textContent, middleParas[2].textContent, middleParas[3].textContent, middleParas[4].textContent] = [siteContent["main-content"]["features-content"], siteContent["main-content"]["about-content"], siteContent["main-content"]["services-content"], siteContent["main-content"]["product-content"], siteContent["main-content"]["vision-content"]];

let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = "Contact";

let contactParas = document.querySelectorAll('.contact p');
[contactParas[0].textContent, contactParas[1].textContent, contactParas[2].textContent] = [siteContent["contact"]["address"], siteContent["contact"]["phone"], siteContent["contact"]["email"]];

let footerPara = document.querySelector('footer p');
footerPara.textContent = siteContent["footer"]["copyright"];


document.querySelector("nav").appendChild(document.createElement("a"));
document.querySelector("nav").appendChild(document.createElement("a"));
anchorElements[6].textContent = "RocketShip";
anchorElements[0].textContent = "UFO";

[anchorElements[0].style.color, anchorElements[1].style.color, anchorElements[2].style.color, anchorElements[3].style.color, anchorElements[4].style.color, anchorElements[5].style.color, anchorElements[6].style.color, anchorElements[7].style.color] = ['green', 'green', 'green', 'green', 'green', 'green', 'green', 'green'];

