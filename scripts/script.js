let element = document.getElementById('container'),
canvas = document.getElementById('canvas'),
grid = document.getElementById('grid_canvas')
styles = document.querySelector('#container'),

ctx = canvas.getContext('2d'),
grid_ctx = document.getElementById('grid_canvas').getContext('2d'),

isMove = false,

width = 200,
height = 200,

grid_width = +getComputedStyle(document.getElementById('container')).width.split('px')[0],
grid_height = +getComputedStyle(document.getElementById('container')).height.split('px')[0];

canvas.setAttribute("width", width);
canvas.setAttribute("height", height);

grid.setAttribute("width", grid_width);
grid.setAttribute("height", grid_height);

function drawTable() {
  ctx.fillRect(0, 0, 5, 200);
  ctx.fillRect(0, 0, 200, 5);
  ctx.fillRect(195, 0, 5, 200);
  ctx.fillRect(0, 195, 200, 5);
}
drawTable();

// Event handler
grid_canvas.addEventListener('mousemove' , function(event) {
  document.getElementById('area').innerHTML = 'X: ' + event.offsetX + ' Y: ' + event.offsetY;
  document.getElementById('area').innerHTML += '<br> Width: ' + styles.clientWidth + ' Height: ' + styles.clientHeight;
});
canvas.addEventListener('mousedown' , function(event) { start(event); });
canvas.addEventListener('mousemove' , function(event) { move(event); });
canvas.addEventListener('mouseup' , function(event) { end(event); });
canvas.addEventListener('mouseout' , function(event) { end(event); });

function cells() {
  grid_ctx.fillStyle = '#808080';
  for(let i = 4.5; i <= grid_width; i += 5) {
    grid_ctx.fillRect(i, 0, 1, grid_height);
  }
  for(let i = 4.5; i <= grid_height; i += 5) {
    grid_ctx.fillRect(0, i, grid_width, 1);
  }
}
cells();

function drag() {
  x = Math.trunc((event.pageX - element.offsetLeft - 100)/5)*5;
  y = Math.trunc((event.pageY - element.offsetTop - 100)/5)*5;

  if (x >= 0 && y >= 0 && x <= grid_width-200 && y <= grid_height-200) {
    canvas.style.marginLeft = x + 'px';
    canvas.style.marginTop = y + 'px';
  }
}
function start(event) {
  drag();
  isMove = true;
}
function move(event) {
  if (isMove) {
    drag();
  }
}
function end(event) {
  isMove = false;
}