const roundBoxElem = document.querySelector('.round-box');
const arrowElem = document.querySelector('.arrow-box');
const btnChangeElem = document.querySelector('.change-time-btn');
btnChangeElem.addEventListener('click', arrowMove);
    arrowElem.style.transform=`rotate3d(0, 0, 1, 0deg)`;

function arrowMove() {
    let deg = window.getComputedStyle(arrowElem).transform;
    console.log(deg);
    // arrowElem.style.transform=`rotate3d(0, 0, 1, ${deg++}deg)`;
    // console.log('gbntu');
}