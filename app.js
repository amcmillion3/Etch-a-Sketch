const colorBtn = document.getElementById("color-btn");
const grayBtn = document.getElementById("gray-btn");
const changeSizeBtn = document.getElementById("change-size-btn");
const gridContainer = document.getElementById("grid-container");

const layoutGrid = (size) => {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`
}

const changeSize = () => {
    let size = window.prompt("What dimension grid would you like?");
    layoutGrid(size);
}

changeSizeBtn.addEventListener("click", () => {
    changeSize();
})