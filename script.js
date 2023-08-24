let currentScale = 1;
let currentRotation = 0;
let currentPosition = { x: 0, y: 0 };


function dragStart(event) {
    const originalDiv = event.target;
    const cloneDiv = originalDiv.cloneNode(true);
    event.dataTransfer.setData("text/plain", originalDiv.id);
    event.dataTransfer.setDragImage(cloneDiv, 50, 50);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const originalDivId = event.dataTransfer.getData("text/plain");
    const originalDiv = document.getElementById(originalDivId);
    const cloneDiv = originalDiv.cloneNode(true);
    event.target.appendChild(cloneDiv);
}

function applyTransform() {
    const div = document.getElementById("play-div");
    const transformValue = `translate(${currentPosition.x}px, ${currentPosition.y}px) scale(${currentScale}) rotate(${currentRotation}deg)`;
    div.style.transform = transformValue;
}

function translate(direction) {
    const step = 10;
    if (direction === '+') {
        currentPosition.x += step;
        currentPosition.y += step;
    } else {
        currentPosition.x -= step;
        currentPosition.y -= step;
    }
    applyTransform();
}

function scale(direction) {
    const step = 0.1;
    if (direction === '+') {
        currentScale += step;
    } else {
        currentScale -= step;
    }
    applyTransform();
}

function rotate(direction) {
    const step = 15;
    if (direction === '+') {
        currentRotation += step;
    } else {
        currentRotation -= step;
    }
    applyTransform();
}

function resetTransformations() {
    currentScale = 1;
    currentRotation = 0;
    currentPosition = { x: 0, y: 0 };
    applyTransform();
}

function allowDrop(event) {
    event.preventDefault();
}

function handleDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

function handleDrop(event) {
    event.preventDefault();
    const draggedId = event.dataTransfer.getData("text/plain");
    const draggedDiv = document.getElementById(draggedId);

    if (draggedDiv) {
        const clonedDiv = draggedDiv.cloneNode(true);
        draggedDiv.id = "play-div";
        event.target.appendChild(draggedDiv);
    }
}         
