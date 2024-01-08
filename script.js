function randomPosition(element) {
    const randomX = Math.random(1,5) * 1000;
    const randomY = Math.random(1,5) * 500;
    element.style.left = `${randomX}px`;
    element.style.top = `${randomY}px`;
}
function sendelemnt(){
    const circles = document.querySelectorAll('.cir_inmation');
    circles.forEach(circle => {
        randomPosition(circle);
    });
};
sendelemnt()
setInterval(sendelemnt , 5000)