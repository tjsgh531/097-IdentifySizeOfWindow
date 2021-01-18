const width = document.getElementById('widthSize');
const height = document.getElementById('heightSize');

width.textContent = `가로 크기 : ${window.innerWidth}px`;
height.textContent = `세로 크기 : ${window.innerHeight}px`;

window.addEventListener('resize',onResize);

function onResize(){
    width.textContent = `가로 크기 : ${window.innerWidth}px`;
    height.textContent = `세로 크기 : ${window.innerHeight}px`;

}