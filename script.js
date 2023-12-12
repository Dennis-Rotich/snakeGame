// Define HTML elements
const board = document.getElementById("game-board");

//Define game variables
let snake = [{x:10 , y:10}]

// Draw game map, snake and food
function map(){
    board.innerHTML = '';
    drawsnake();
}

// Draw snake
function drawsnake(){
    snake.forEach((segment) => {
    const snakeElement = createGameElement('div', 'snake'); 
 });
}

//Create snake or food element/div
function createGameElement(tag, className){
    const element = document.createElement(tag);
    element.className = className;
    return element;
}