const csr = document.getElementById("csr");
const cards = document.querySelectorAll(".cards");
const linksh4 = document.querySelectorAll(".links a");
const skillsimg = document.querySelectorAll(".skills img");
const socialmedia = document.querySelectorAll(".social-media a");
const mode = document.querySelector(".mode");
const hleftp = document.getElementById("hleft p")
const arightp = document.getElementById("aright p")
const bmidp = document.querySelector(".bmid p")

var flag = true;
mode.addEventListener("click", function(){
    if(flag){
    document.body.style.background = 'linear-gradient(90deg, #9e54bd, #5452b1)';

    flag = false;
    }
    else{
    document.body.style.background = 'linear-gradient(90deg, #000, #1a1a1a)';
    flag = true;
    }
})

document.addEventListener("mousemove", function (dets) {
  csr.style.left = dets.x + "px";
  csr.style.top = dets.y + "px";
});


socialmedia.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      csr.style.display = "none";
    });
    element.addEventListener("mouseleave", function () {
      csr.style.display = "block";
    });
  });
  
  


cards.forEach((element) => {
  element.addEventListener("mouseenter", function () {
    csr.style.display = "none";
  });
  element.addEventListener("mouseleave", function () {
    csr.style.display = "block";
  });
});






linksh4.forEach((element) => {
  element.addEventListener("mouseenter", function () {
    csr.style.backgroundColor = "transparent";
    csr.style.width = "40px";
    csr.style.height = "40px";
    csr.style.border = "1.5px solid white";
  });
  element.addEventListener("mouseleave", function () {
    csr.style.backgroundColor = "rgb(0, 191, 255)";
    csr.style.width = "12px";
    csr.style.height = "12px";
    csr.style.border = "none";
  });
});



skillsimg.forEach((element) => {
  element.addEventListener("mouseenter", function () {
    element.style.scale = "1.2";
    csr.style.display = "none";
  });
  element.addEventListener("mouseleave", function () {
    element.style.scale = "1";
    csr.style.display = "block";
  });
});




const sub = document.getElementById("sub");
sub.addEventListener("click", function () {
  alert(
    "Sorry! Something goes wrong you can message me on any other social platforms or via email"
  );
});

//  SCROLL TRIGGER NAV KA BG
gsap.to("#nav", {
  backgroundColor: "#000",
  height: "60px",
  duration: 0.01,
  //change this above properties of nav when scroller trigger nav
  scrollTrigger: {
    trigger: "#nav", // change nav
    scroller: "body",
    // markers:true,
    start: "top -10%", //jab scrolling yaha pochega
    end: "top -11%",
    scrub: 1, // mouse scroll smoothness
  },
});
gsap.to("#hleft", {
  y: 120,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    start: "top -10%",
    end: "top -90%",
    scrub: 1,
  },
});
gsap.to("#hright img", {
  y: 120,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    start: "top -10%",
    end: "top -100%",
    scrub: 1,
  },
});
gsap.from(".con1", {
  y: 200,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    start: "top -65%",
    end: "top -60%",
    scrub: 1,
  },
});
gsap.from(".con2", {
  opacity: 1,
  scale: 0.4,
  duration: 2,
  scrollTrigger: {
    trigger: ".con1",
    scroller: "body",
    start: "top 0%",
    end: "top 5%",
    scrub: 1,
  },
});

//FOR CARDS
gsap.from(".cards", {
  scale: 0.8,
  opacity: 1,
  duration: 2.5,
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    start: "top 18%",
    end: "top 15%",
    scrub: 1,
  },
});



