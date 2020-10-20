const roundBoxElem = document.querySelector('.round-box');
const arrowElem = document.querySelector('.arrow-box');
const btnStartElem = document.querySelector('.change-time-btn');
const btnStopElem = document.querySelector('.stop-btn');
btnStartElem.addEventListener('click', arrowMove);
btnStopElem.addEventListener('click', arrowStop);
// arrowElem.style.transform = `rotate3d(0, 0, 1, 0deg)`;
let deg = 0;
let timerId = null;

function arrowMove() {
    // let deg = window.getComputedStyle(arrowElem).transform;
    // console.log(deg);
    timerId = setInterval(() => {
        arrowElem.style.transform = `rotate3d(0, 0, 1, ${deg+=6}deg)`;
        console.log(timerId);
    }, 1000)
}
function arrowStop() {
    clearInterval(timerId);
    console.log(timerId);
    deg = -6;
    arrowElem.style.transform = `rotate3d(0, 0, 1, ${deg+=6}deg)`;
}