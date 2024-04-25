let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        }, i * 80);
    });

    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        }, 340 + i * 80);
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0: currentWordIndex + 1;

};

changeText();
setInterval(changeText, 3000);




//circle percentages


const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360/dots;

    for(let  i = 0; i < dots; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;        // <div class="points" style="--i:0; --rot:72deg"></div>
    }

    elem.innerHTML = points;     

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i < percent; i++){
        pointsMarked[i].classList.add('marked');
    }
})


//Project mix it up
var mixer = mixitup('.portfolio-gallery');



//Active menu

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function setActiveMenu() {
    let scrollPosition = window.scrollY + 97; // Adding a buffer to the scroll position

    section.forEach((sec, index) => {
        if (scrollPosition >= sec.offsetTop && (index === section.length - 1 || scrollPosition < section[index + 1].offsetTop)) {
            // If the scroll position is within the current section
            menuLi.forEach(item => item.classList.remove("active")); // Remove active class from all menu items
            menuLi[index].classList.add("active"); // Add active class to the corresponding menu item
        }
    });
}

// Call setActiveMenu initially to set the initial state of the navigation menu
setActiveMenu();

// Add an event listener to the window scroll event
window.addEventListener("scroll", setActiveMenu);





// Sticky Navbar
const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 50);
})




// Toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}








