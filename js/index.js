const logoHeader = document.querySelector(".logo-heading");
// console.log(logoHeader)

logoHeader.addEventListener("mouseenter", () => {
    logoHeader.style.color = "magenta";
    logoHeader.style.backgroundColor = "green";
    logoHeader.style.width = "30%";
    logoHeader.style.textAlign = "center";
    logoHeader.style.borderRadius = "10px"
});

logoHeader.addEventListener("mouseleave", () => {
    logoHeader.style.backgroundColor = "blue";
    logoHeader.style.width = "45%"
})

const allImage = document.querySelectorAll("img");
console.log(allImage);
allImage.forEach(image => {
    image.addEventListener("mouseover", (e) => {
       TweenMax.to(e.target, 0.5, {
           scale: 1.3,
           ease: Elastic.easeOut.config(5, 0.55)
       }) 
    });
});

allImage.forEach(image => {
    image.addEventListener("mouseout", (e) => {
       TweenMax.to(e.target, 0.0, {
           scale: 1,
           ease: Elastic.easeOut.config(1, 0.0)
       }) 
    });
});

const changeImg = document.querySelector(".img-fluid.rounded");
// console.log(changeImg)
changeImg.addEventListener("dblclick", () => {
    changeImg.src = "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic1509a.jpg"
});

changeImg.addEventListener("click", () => {
    changeImg.src = "img/fun.jpg"
});

const changeAnotherImg = document.querySelector(".img-content img");
// console.log(changeAnotherImg)

changeAnotherImg.addEventListener("dblclick", () => {
    changeAnotherImg.src = "https://cdn.pixabay.com/photo/2017/09/12/11/56/universe-2742113_960_720.jpg"
});
changeAnotherImg.addEventListener("click", () => {
    changeAnotherImg.src = "img/adventure.jpg"
});

const changeToNewImage = document.querySelector(".intro img");
// console.log(changeToNewImage)

changeToNewImage.addEventListener("dblclick", () => {
    changeToNewImage.src = "https://image.businessinsider.com/5ba3f311e55aa8b2058b4567?width=1500&format=jpeg&auto=webp"
});
changeToNewImage.addEventListener("click", () => {
    changeToNewImage.src = "img/fun-bus.jpg"
});

const justOneMoreImage = document.querySelector(".content-destination img");
// console.log(justOneMoreImage)

justOneMoreImage.addEventListener("dblclick", () => {
    justOneMoreImage.src = "https://solarsystem.nasa.gov/system/downloadable_items/709_solarsystem_0.jpg"
});

justOneMoreImage.addEventListener("click", () => {
    justOneMoreImage.src = "img/destination.jpg"
});

const button = document.querySelectorAll(".btn");
// console.log(button)
button.forEach(btn => {
    btn.textContent = "Don't Click Me";
    btn.style.backgroundColor = "purple";
    btn.addEventListener("click", () => {
        btn.textContent = "I Warned You!";
        btn.style.backgroundColor = "red"
    }); 
});

const text = document.querySelectorAll(".destination p");
// console.log(text)
text.forEach(p => {
    p.textContent = "NO, NO, NOooo!!! ";
    p.style.fontSize = "5rem";
    p.addEventListener("click", () => {
        p.style.backgroundColor = "black";
        p.style.color = "green"
        p.style.borderRadius = "25px"
    })
    p.addEventListener("dblclick", () => {
        p.style.width = 0;
    })
})





