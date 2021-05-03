const colorBtn = document.getElementById("color-btn");
const grayBtn = document.getElementById("gray-btn");
const changeSizeBtn = document.getElementById("change-size-btn");
const sketchBody = document.querySelector(".sketch-body");

const layoutGrid = (size) => {
    sketchBody.removeChild(sketchBody.lastChild);
    let gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");
    sketchBody.appendChild(gridContainer);
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(i = 0; i < (size ** 2); i++) {
        let gridDiv = document.createElement("div");
        gridDiv.classList.add("grid-div");
        gridContainer.appendChild(gridDiv);
    };
};

const changeSize = () => {
    let size = window.prompt("What dimension grid would you like?");
    if( size <= 64 && size > 0 ) {
        layoutGrid(size);
    } else {
        changeSize();
    };
};

changeSizeBtn.addEventListener("click", () => {
    changeSize();
});

colorBtn.addEventListener("click", () => {
    let gridDiv = document.querySelectorAll(".grid-container > div");
    for( let i = 0; i < gridDiv.length; i++) {
        gridDiv[i].onmouseover = (e) => {
            e.target.style.background = `${randomColor()}`;
        };
    };
});

grayBtn.addEventListener("click", () => {
    let gridDiv = document.querySelectorAll(".grid-container > div");
    for( let i = 0; i < gridDiv.length; i++) {
        gridDiv[i].onmouseover = (e) => {
            e.target.style.background = `black`;
            e.target.style.opacity -= `-0.1`;
        };
    };
});

const randomColor = function() {
    let number = function() {
        let randomNumber = Math.floor(Math.random() * 256);
        return randomNumber;
    };
    return `rgb( ${number()}, ${number()}, ${number()})`;
};

document.addEventListener("DOMContentLoaded", layoutGrid(16));