function randomPosition(element) {
    const maxWidth = window.innerWidth - element.clientWidth;
    const maxHeight = window.innerHeight - element.clientHeight;
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);
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