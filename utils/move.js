const movableDiv = document.getElementById('movableDiv');

let isDragging = false;
let offsetX, offsetY;

movableDiv.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - movableDiv.getBoundingClientRect().left;
  offsetY = e.clientY - movableDiv.getBoundingClientRect().top;
  movableDiv.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const newX = e.clientX - offsetX;
  const newY = e.clientY - offsetY;

  movableDiv.style.left = `${newX}px`;
  movableDiv.style.top = `${newY}px`;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  movableDiv.style.cursor = 'grab';
});
